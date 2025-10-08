import { Component, ExtractPropTypes } from 'vue';
import { definePropType } from '../../utils.utils';

export type ButtonType =
  | ''
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'default';
export type ButtonSize = '' | 'small' | 'large' | 'default';
//buttonProps 是用于约束用户在进行属性定义的时候的属性对象，并不是属性类型
export const buttonProps = {
  type: {
    type: definePropType<ButtonType>(String),
    default: ''
  },
  size: {
    type: definePropType<ButtonSize>(String),
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  block: {
    type: Boolean,
    default: false
  },
  plain: {
    type: Boolean,
    default: false
  },
  round: {
    type: Boolean,
    default: false
  },
  circle: {
    type: Boolean,
    default: false
  },
  // 虚线按钮
  dashed: {
    type: Boolean,
    default: false
  },
  tag: {
    type: definePropType<string | Component>([String, Object]),
    default: 'button'
  },
  color: {
    type: String,
    default: ''
  }
} as const; //as const 表示以后 buttonProps 是不可以动态设置一些其他属性;
export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
