import { defineComponent, toRefs } from 'vue'
import { ButtonProps, buttonProps } from './button-type'
import { Icon } from '../../icon'
import '../../index.scss'
import '../style/button.scss'
export default defineComponent({
  name: 'SButton',
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    const { type, size, disabled, block, round, plain, circle, icon, iconSvg } =
      toRefs(props)
    const blockClass = block.value ? 's-btn--block' : '' // 块级按钮
    const roundClass = round.value ? 's-btn--round' : '' // 圆角按钮
    const plainClass = plain.value ? 's-btn--plain' : '' //朴素按钮
    const circleClass = circle.value ? 's-btn--circle' : '' //圆形按钮
    const IconSize =
      size.value === 'mini'
        ? '18'
        : size.value === 'small'
        ? '22'
        : size.value === 'medium'
        ? '26'
        : '30'
    return () => {
      return (
        <button
          disabled={disabled.value}
          class={`s-btn s-btn--${type.value} s-btn--${size.value} ${blockClass} ${roundClass} ${plainClass} ${circleClass}`}
        >
          {(slots.default && icon.value) || (slots.default && iconSvg.value) ? (
            <>
              <Icon
                name={icon.value}
                component={iconSvg.value}
                size={IconSize}
              />
              {slots.default()}
            </>
          ) : slots.default ? (
            <>
              {slots.icon && slots.icon()}
              {slots.default()}
            </>
          ) : icon.value || iconSvg.value ? (
            <Icon name={icon.value} component={iconSvg.value} size={IconSize} />
          ) : (
            '按钮'
          )}
        </button>
      )
    }
  }
})
