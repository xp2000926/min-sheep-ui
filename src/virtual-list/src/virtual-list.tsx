import { computed, defineComponent, onMounted, ref, toRefs } from 'vue'
import { VirtualListProps, virtualListProps } from './virtual-list-type'
import '../style/virtual-list.scss'
// 1.data传入
// 2.containerHeight高度自适应
// 3.itemHeight传入
export default defineComponent({
  name: 'SVirtualList',
  props: virtualListProps,
  setup(props: VirtualListProps, { slots }) {
    const { data, itemHeight, component: Component } = toRefs(props)
    const containerRef = ref()
    // 1.滚动条位置scrollTop
    const containerHeight = ref(0) // 容器高度
    const offsetY = ref(0) // 列表在Y轴的偏移量
    const startIndex = ref(0) // 起始索引
    const visibleCount = computed(() =>
      Math.ceil(containerHeight.value / itemHeight.value)
    ) // 可视区域列表元素数量

    // 可视区域的数据
    const visibleData = computed(() =>
      data.value.slice(
        startIndex.value,
        Math.min(startIndex.value + visibleCount.value, data.value.length)
      )
    )

    onMounted(() => {
      // 容器高度动态获取
      containerHeight.value = containerRef.value?.clientHeight
    })

    const scrollEvent = (event: UIEvent) => {
      const { scrollTop } = event.target as HTMLElement
      // 当scrollTop发生变化，重新计算startIndex，如果startIndex变化，依赖它的visibleData也就动态变化了
      startIndex.value = Math.floor(scrollTop / itemHeight.value)
      // 改变列表元素在Y轴的偏移量
      offsetY.value = scrollTop - (scrollTop % itemHeight.value)
    }
    return () => {
      return (
        <Component.value
          class="s-virtual-list__container"
          ref={containerRef}
          onScroll={scrollEvent}
        >
          {/* 数据最终高度，用于展示滚动条 */}
          <div
            class="s-virtual-list__blank"
            style={{
              height: `${data.value.length * itemHeight.value}px`
            }}
          ></div>
          {/* 真正的数据列表 */}
          <div
            class="s-virtual-list"
            style={{
              transform: `translate3d(0, ${offsetY.value}px, 0)`
            }}
          >
            {visibleData.value.map((item, index) =>
              slots.default?.({ item, index })
            )}
          </div>
        </Component.value>
      )
    }
  }
})
