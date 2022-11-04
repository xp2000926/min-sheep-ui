import { ExtractPropTypes, PropType } from 'vue'

export type IButtonType = 'primary' | 'secondary' | 'text'
export type ButtonSize = 'mini' | 'small' | 'medium' | 'large'
/**
 * buttonProps 是用于约束用户在进行属性定义的时候的属性对象，并不是属性类型
 */
export const buttonProps = {
  type: {
    type: String as PropType<IButtonType>,
    default: 'secondary'
  },
  size: {
    type: String as PropType<ButtonSize>,
    default: 'medium'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  block: {
    type: Boolean,
    default: false
  }
} as const //as const 表示以后 buttonProps 是不可以动态设置一些其他属性

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
