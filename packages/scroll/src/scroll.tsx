import {
  defineComponent,
  toRefs,
  useTemplateRef,
  computed,
  ref,
  onMounted,
  onUnmounted,
  nextTick,
  watch,
  reactive
} from 'vue';
import { ScrollProps, scrollProps, ScrollState } from './scroll-type';

export default defineComponent({
  name: 'SScroll',
  props: scrollProps,
  setup(props: ScrollProps, { slots }) {
    const {
      yPlacement,
      xPlacement,
      railSize,
      minRailSize,
      showXScroll,
      showYScroll,
      railColor,
      railHoverColor,
      trigger,
      customClass,
      customRailStyle,
      customBarStyle,
      customContainerStyle,
      customContentStyle
    } = toRefs(props);

    // dom ref
    const wrapperRef = useTemplateRef<HTMLElement | null>('wrapperRef');
    const containerRef = useTemplateRef<HTMLElement | null>('containerRef');
    const yRailRef = useTemplateRef<HTMLElement | null>('yRailRef');
    const xRailRef = useTemplateRef<HTMLElement | null>('xRailRef');

    // 滚动状态
    const scrollState = reactive<ScrollState>({
      contentWidth: 0,
      contentHeight: 0,
      containerWidth: 0,
      containerHeight: 0,
      scrollLeft: 0,
      scrollTop: 0,
      xRailSize: 0,
      yRailSize: 0,
      xRailLeft: 0,
      yRailTop: 0,
      showXScroll: false,
      showYScroll: false
    });

    // 拖拽状态
    const isDragging = ref(false);
    const dragType = ref<'x' | 'y' | null>(null);
    const dragStartPos = ref({ x: 0, y: 0 });
    const dragStartScroll = ref({ left: 0, top: 0 });

    // 悬停状态
    const isHovering = ref(false);
    const hoverType = ref<'x' | 'y' | null>(null);

    // 滚动条显示状态
    const showScrollbars = ref(false);

    // 计算滚动条尺寸和位置
    const updateScrollState = () => {
      if (!containerRef.value || !wrapperRef.value) return;

      const container = containerRef.value;
      const wrapper = wrapperRef.value;

      // 获取容器和内容尺寸
      scrollState.containerWidth = wrapper.clientWidth;
      scrollState.containerHeight = wrapper.clientHeight;
      scrollState.contentWidth = container.scrollWidth;
      scrollState.contentHeight = container.scrollHeight;
      scrollState.scrollLeft = container.scrollLeft;
      scrollState.scrollTop = container.scrollTop;

      // 计算是否需要显示滚动条
      scrollState.showXScroll =
        showXScroll.value &&
        scrollState.contentWidth > scrollState.containerWidth;
      scrollState.showYScroll =
        showYScroll.value &&
        scrollState.contentHeight > scrollState.containerHeight;

      // 计算垂直滚动条
      if (scrollState.showYScroll) {
        const railHeight = scrollState.containerHeight - 4; // 减去上下边距
        const scrollRatio =
          scrollState.containerHeight / scrollState.contentHeight;
        scrollState.yRailSize = Math.max(
          scrollRatio * railHeight,
          minRailSize.value
        );
        // 修复滚动条位置计算，确保可以触底
        const maxScrollTop =
          scrollState.contentHeight - scrollState.containerHeight;
        const scrollProgress =
          maxScrollTop > 0 ? scrollState.scrollTop / maxScrollTop : 0;
        scrollState.yRailTop =
          scrollProgress * (railHeight - scrollState.yRailSize);
      }

      // 计算水平滚动条 - 优化计算逻辑，提高精度
      if (scrollState.showXScroll) {
        const railWidth = scrollState.containerWidth - 4; // 减去左右边距
        const scrollRatio =
          scrollState.containerWidth / scrollState.contentWidth;
        scrollState.xRailSize = Math.max(
          scrollRatio * railWidth,
          minRailSize.value
        );
        // 优化滚动条位置计算，确保精确触底
        const maxScrollLeft =
          scrollState.contentWidth - scrollState.containerWidth;
        const scrollProgress =
          maxScrollLeft > 0 ? scrollState.scrollLeft / maxScrollLeft : 0;
        // 使用更精确的计算，避免浮点数误差
        scrollState.xRailLeft = Math.round(
          scrollProgress * (railWidth - scrollState.xRailSize)
        );
      }
    };

    // 防抖处理 - 使用 requestAnimationFrame 优化性能
    const scrollTimer = ref<number | null>(null);
    const rafId = ref<number | null>(null);

    const debouncedUpdateScrollState = () => {
      if (scrollTimer.value) {
        clearTimeout(scrollTimer.value);
      }
      if (rafId.value) {
        cancelAnimationFrame(rafId.value);
      }

      // 使用 requestAnimationFrame 确保与浏览器渲染同步
      rafId.value = requestAnimationFrame(() => {
        updateScrollState();
        rafId.value = null;
      });
    };

    // 处理容器滚动事件
    const handleScroll = () => {
      if (!containerRef.value) return;
      debouncedUpdateScrollState();
    };

    // 处理垂直滚动条拖拽
    const handleYBarMouseDown = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      isDragging.value = true;
      dragType.value = 'y';
      dragStartPos.value = { x: e.clientX, y: e.clientY };
      dragStartScroll.value = {
        left: scrollState.scrollLeft,
        top: scrollState.scrollTop
      };
    };

    // 处理水平滚动条拖拽
    const handleXBarMouseDown = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      isDragging.value = true;
      dragType.value = 'x';
      dragStartPos.value = { x: e.clientX, y: e.clientY };
      dragStartScroll.value = {
        left: scrollState.scrollLeft,
        top: scrollState.scrollTop
      };
    };

    // 处理滚动条悬停
    const handleYBarMouseEnter = () => {
      isHovering.value = true;
      hoverType.value = 'y';
    };

    const handleYBarMouseLeave = () => {
      isHovering.value = false;
      hoverType.value = null;
    };

    const handleXBarMouseEnter = () => {
      isHovering.value = true;
      hoverType.value = 'x';
    };

    const handleXBarMouseLeave = () => {
      isHovering.value = false;
      hoverType.value = null;
    };

    // 处理容器悬停事件
    const handleContainerMouseEnter = () => {
      if (trigger.value === 'hover') {
        showScrollbars.value = true;
      }
    };

    const handleContainerMouseLeave = () => {
      if (trigger.value === 'hover') {
        showScrollbars.value = false;
      }
    };

    // 处理拖拽移动 - 优化性能，减少重复计算
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.value || !containerRef.value) return;

      const deltaX = e.clientX - dragStartPos.value.x;
      const deltaY = e.clientY - dragStartPos.value.y;

      if (dragType.value === 'y') {
        const railHeight = scrollState.containerHeight - 4;
        const maxScrollTop =
          scrollState.contentHeight - scrollState.containerHeight;
        const scrollRatio = deltaY / (railHeight - scrollState.yRailSize);
        const newScrollTop = Math.max(
          0,
          Math.min(
            maxScrollTop,
            dragStartScroll.value.top + scrollRatio * maxScrollTop
          )
        );
        containerRef.value.scrollTop = newScrollTop;
      } else if (dragType.value === 'x') {
        const railWidth = scrollState.containerWidth - 4;
        const maxScrollLeft =
          scrollState.contentWidth - scrollState.containerWidth;
        const scrollRatio = deltaX / (railWidth - scrollState.xRailSize);
        // 优化横向滚动计算，使用更精确的数值
        const newScrollLeft = Math.max(
          0,
          Math.min(
            maxScrollLeft,
            Math.round(dragStartScroll.value.left + scrollRatio * maxScrollLeft)
          )
        );
        containerRef.value.scrollLeft = newScrollLeft;
      }
    };

    // 处理拖拽结束
    const handleMouseUp = () => {
      isDragging.value = false;
      dragType.value = null;
    };

    // 处理轨道点击
    const handleYRailClick = (e: MouseEvent) => {
      if (!containerRef.value || !yRailRef.value) return;

      const rect = yRailRef.value.getBoundingClientRect();
      const clickY = e.clientY - rect.top;
      const railHeight = scrollState.containerHeight - 4;
      const maxScrollTop =
        scrollState.contentHeight - scrollState.containerHeight;
      const scrollRatio = clickY / railHeight;
      const newScrollTop = scrollRatio * maxScrollTop;

      containerRef.value.scrollTop = Math.max(
        0,
        Math.min(newScrollTop, maxScrollTop)
      );
    };

    const handleXRailClick = (e: MouseEvent) => {
      if (!containerRef.value || !xRailRef.value) return;

      const rect = xRailRef.value.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const railWidth = scrollState.containerWidth - 4;
      const maxScrollLeft =
        scrollState.contentWidth - scrollState.containerWidth;
      const scrollRatio = clickX / railWidth;
      // 优化横向滚动点击计算，确保精确触底
      const newScrollLeft = Math.round(scrollRatio * maxScrollLeft);

      containerRef.value.scrollLeft = Math.max(
        0,
        Math.min(newScrollLeft, maxScrollLeft)
      );
    };

    // 计算样式
    const yBarStyle = computed(() => {
      let backgroundColor = railColor.value;
      if (isHovering.value && hoverType.value === 'y') {
        backgroundColor = railHoverColor.value;
      }
      if (isDragging.value && dragType.value === 'y') {
        backgroundColor = railHoverColor.value;
      }

      return {
        height: `${scrollState.yRailSize}px`,
        top: `${scrollState.yRailTop}px`,
        backgroundColor,
        transition: isDragging.value ? 'none' : 'background-color 0.2s',
        ...customBarStyle.value
      };
    });

    const xBarStyle = computed(() => {
      let backgroundColor = railColor.value;
      if (isHovering.value && hoverType.value === 'x') {
        backgroundColor = railHoverColor.value;
      }
      if (isDragging.value && dragType.value === 'x') {
        backgroundColor = railHoverColor.value;
      }

      return {
        width: `${scrollState.xRailSize}px`,
        left: `${scrollState.xRailLeft}px`,
        backgroundColor,
        transition: isDragging.value ? 'none' : 'background-color 0.2s',
        ...customBarStyle.value
      };
    });

    const yRailStyle = computed(() => {
      const shouldShow =
        scrollState.showYScroll &&
        (trigger.value === 'none' || showScrollbars.value);
      return {
        width: `${railSize.value}px`,
        display: shouldShow ? 'block' : 'none',
        opacity: shouldShow ? 1 : 0,
        transition: 'opacity 0.2s ease-in-out',
        ...customRailStyle.value
      };
    });

    const xRailStyle = computed(() => {
      const shouldShow =
        scrollState.showXScroll &&
        (trigger.value === 'none' || showScrollbars.value);
      return {
        height: `${railSize.value}px`,
        display: shouldShow ? 'block' : 'none',
        opacity: shouldShow ? 1 : 0,
        transition: 'opacity 0.2s ease-in-out',
        ...customRailStyle.value
      };
    });

    // 监听容器尺寸变化
    let resizeObserver: ResizeObserver | null = null;

    onMounted(() => {
      nextTick(() => {
        // 初始化滚动条显示状态
        if (trigger.value === 'none') {
          showScrollbars.value = true;
        }
        updateScrollState();

        // 监听容器滚动
        if (containerRef.value) {
          containerRef.value.addEventListener('scroll', handleScroll);
        }

        // 监听容器悬停事件
        if (wrapperRef.value) {
          wrapperRef.value.addEventListener(
            'mouseenter',
            handleContainerMouseEnter
          );
          wrapperRef.value.addEventListener(
            'mouseleave',
            handleContainerMouseLeave
          );
        }

        // 监听窗口大小变化
        window.addEventListener('resize', updateScrollState);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);

        // 使用 ResizeObserver 监听容器尺寸变化
        if (window.ResizeObserver) {
          resizeObserver = new ResizeObserver(updateScrollState);
          if (wrapperRef.value) {
            resizeObserver.observe(wrapperRef.value);
          }
        }
      });
    });

    onUnmounted(() => {
      if (containerRef.value) {
        containerRef.value.removeEventListener('scroll', handleScroll);
      }
      if (wrapperRef.value) {
        wrapperRef.value.removeEventListener(
          'mouseenter',
          handleContainerMouseEnter
        );
        wrapperRef.value.removeEventListener(
          'mouseleave',
          handleContainerMouseLeave
        );
      }
      window.removeEventListener('resize', updateScrollState);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);

      if (resizeObserver) {
        resizeObserver.disconnect();
      }

      // 清理定时器和动画帧
      if (scrollTimer.value) {
        clearTimeout(scrollTimer.value);
      }
      if (rafId.value) {
        cancelAnimationFrame(rafId.value);
      }
    });

    // 监听 props 变化
    watch([showXScroll, showYScroll], updateScrollState);

    // 计算容器类名
    const containerClass = computed(() => {
      const classes = ['s-scroll'];
      if (scrollState.showXScroll && scrollState.showYScroll) {
        classes.push('s-scroll--has-both');
      }
      if (customClass.value) {
        classes.push(customClass.value);
      }
      return classes;
    });

    // 计算容器样式
    const wrapperStyle = computed(() => ({
      ...customContainerStyle.value
    }));

    // 计算内容区域样式
    const contentStyle = computed(() => ({
      ...customContentStyle.value
    }));

    return () => (
      <div
        class={containerClass.value}
        style={wrapperStyle.value}
        ref="wrapperRef"
      >
        <div class="s-scroll-container" ref="containerRef">
          <div class="s-scroll-content" style={contentStyle.value}>
            {slots.default?.()}
          </div>
        </div>

        {/* 垂直滚动条 */}
        <div
          ref="yRailRef"
          class={[
            's-scroll-rail',
            's-scroll-rail--vertical',
            `s-scroll-rail--vertical--${yPlacement.value}`
          ]}
          style={yRailStyle.value}
          onClick={handleYRailClick}
        >
          <div
            ref="yBarRef"
            class="s-scroll-rail__scroll"
            style={yBarStyle.value}
            onMousedown={handleYBarMouseDown}
            onMouseenter={handleYBarMouseEnter}
            onMouseleave={handleYBarMouseLeave}
          />
        </div>

        {/* 水平滚动条 */}
        <div
          ref="xRailRef"
          class={[
            's-scroll-rail',
            's-scroll-rail--horizontal',
            `s-scroll-rail--horizontal--${xPlacement.value}`
          ]}
          style={xRailStyle.value}
          onClick={handleXRailClick}
        >
          <div
            ref="xBarRef"
            class="s-scroll-rail__scroll"
            style={xBarStyle.value}
            onMousedown={handleXBarMouseDown}
            onMouseenter={handleXBarMouseEnter}
            onMouseleave={handleXBarMouseLeave}
          />
        </div>
      </div>
    );
  }
});
