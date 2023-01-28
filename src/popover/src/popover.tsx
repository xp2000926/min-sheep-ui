import { defineComponent, toRefs } from 'vue'
import { PopoverProps, popoverProps } from './popover-type'
import '../../index.scss'
import '../style/popover.scss'
import { BasePopover } from '../../base-popover'

export default defineComponent({
  name: 'SPopover',
  props: popoverProps,
  emits: ['update:modelValue'],
  setup(props: PopoverProps, { slots }) {
    // 获取属性中关键值
    const { modelValue, title } = toRefs(props)
    return () => (
      <>
        {modelValue.value && (
          <BasePopover class="s-popover" {...props}>
            <h4 class="s-popover__title">{title.value}</h4>
            {slots.default?.()}
          </BasePopover>
        )}
      </>
    )
  }
})
