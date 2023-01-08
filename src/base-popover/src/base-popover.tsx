import { defineComponent, nextTick, onUnmounted, ref, toRefs, watch } from 'vue'
import { BasePopoverProps, basePopoverProps } from './base-popover-type'
import { arrow, autoPlacement, computePosition, offset } from '@floating-ui/dom'
import '../../index.scss'
import '../style/base-popover.scss'

export default defineComponent({
  name: 'SBasePopover',
  props: basePopoverProps,
  emits: ['update:modelValue'],
  setup(props: BasePopoverProps, { slots, attrs }) {
    // 获取属性中关键值
    const { host: hostRef, modelValue, showArrow, placement } = toRefs(props)

    // 箭头元素
    const arrowRef = ref()

    // 浮动元素
    const overlayRef = ref()

    // 计算定位
    const updatePosition = () => {
      const middleware = []
      if (showArrow.value) {
        middleware.push(offset(8))
        middleware.push(arrow({ element: arrowRef.value }))
      }
      // 如果用户没有指定placement，则自动调整定位
      if (!placement.value) {
        middleware.push(autoPlacement())
      }
      computePosition(hostRef.value, overlayRef.value, {
        middleware,
        placement: placement.value || 'bottom'
      }).then(({ x, y, middlewareData, placement }) => {
        Object.assign(overlayRef.value.style, {
          left: `${x}px`,
          top: `${y}px`
        })
        if (showArrow.value) {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          const { x: arrowX, y: arrowY } = middlewareData.arrow!
          // 首先获取当前所在边 例如top-end
          const currentSide = placement.split('-')[0]
          const staticSide = {
            top: 'bottom',
            right: 'left',
            bottom: 'top',
            left: 'right'
          }[currentSide]

          const SIDE = ['top', 'right', 'bottom', 'left']

          const prevIndex = SIDE.indexOf(currentSide) - 1
          const nextSide = SIDE[prevIndex < 0 ? prevIndex + 4 : prevIndex]

          //每次计算结束，重新计算箭头定位样式
          Object.assign(arrowRef.value.style, {
            left: `${arrowX}px`,
            top: `${arrowY}px`,
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            [staticSide!]: '-4px',
            [`border-${currentSide}-color`]: 'transparent',
            [`border-${nextSide}-color`]: 'transparent'
          })
        }
      })
    }
    // 创建mutationobserver监听宿主元素的状态变化
    const mutationObserver = new MutationObserver(() => updatePosition())
    watch(
      modelValue,
      newVal => {
        // 当前newVal为true，即overlay需要显示时，需要重新更新位置
        if (newVal) {
          nextTick(updatePosition)

          // 监听两个事件和宿主元素尺寸、定位变化
          hostRef.value &&
            mutationObserver.observe(hostRef.value, { attributes: true })
          window.addEventListener('resize', updatePosition)
          window.addEventListener('scroll', updatePosition)
        } else {
          mutationObserver.disconnect()
          window.removeEventListener('resize', updatePosition)
          window.removeEventListener('scroll', updatePosition)
        }
      },
      {
        immediate: true
      }
    )
    onUnmounted(() => {
      mutationObserver.disconnect()
      window.removeEventListener('resize', updatePosition)
      window.removeEventListener('scroll', updatePosition)
    })
    return () => (
      <>
        {modelValue.value && (
          <div ref={overlayRef} class="s-base-popover" {...attrs}>
            {/* 弹窗内容 */}
            {slots.default?.()}
            {/* 箭头元素 */}
            {showArrow.value && (
              <div class="s-base-popover__arrow" ref={arrowRef} />
            )}
          </div>
        )}
      </>
    )
  }
})
