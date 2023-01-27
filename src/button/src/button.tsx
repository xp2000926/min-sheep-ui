import { defineComponent, toRefs } from 'vue'
import { ButtonProps, buttonProps } from './button-type'
import '../../index.scss'
import '../style/button.scss'
export default defineComponent({
  name: 'SButton',
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    const { type, size, disabled, block, round, plain, circle } = toRefs(props)
    // block
    const blockClass = block.value ? 's-btn--block' : ''
    const roundClass = round.value ? `s-btn--round--${size.value}` : '' // 圆角按钮
    const plainClass = plain.value ? 's-btn--plain' : '' //朴素按钮
    const circleClass = circle.value ? 's-btn--circle' : '' //圆形按钮
    return () => {
      return (
        <button
          disabled={disabled.value}
          class={`s-btn s-btn--${type.value} s-btn--${size.value} ${blockClass} ${roundClass} ${plainClass} ${circleClass}`}
        >
          {slots.default ? slots.default() : '按钮'}
        </button>
      )
    }
  }
})
