import { defineComponent, toRefs } from 'vue'
import { ButtonProps, buttonProps } from './button-type'
export default defineComponent({
  name: 'SButton',
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    const { type } = toRefs(props)
    return () => {
      return (
        <button class={`s-btn s-btn--${type.value}`}>
          {slots.default ? slots.default() : '按钮'}
        </button>
      )
    }
  }
})
