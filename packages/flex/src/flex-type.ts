import { Component, ExtractPropTypes } from 'vue';
import { definePropType } from '../../utils.utils';
export type Layout = 'horizontal' | 'vertical';
// export type GapSize = '' | 'small' | 'default' | 'large';
export type WrapType =
  | 'nowrap'
  | 'wrap'
  | 'wrap-reverse'
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'revert'
  | 'revert-layer'
  | 'unset';
export type JustifyType =
  | 'center'
  | 'end'
  | 'flex-end'
  | 'flex-start'
  | 'left'
  | 'normal'
  | 'right'
  | 'space-around'
  | 'space-between'
  | 'space-evenly'
  | 'start'
  | 'stretch'
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'revert-layer'
  | 'unset';
export type AlignType =
  | 'baseline'
  | 'center'
  | 'end'
  | 'flex-end'
  | 'flex-start'
  | 'normal'
  | 'self-end'
  | 'self-start'
  | 'stretch'
  | 'start'
  | 'stretch'
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'revert-layer'
  | 'unset';
export const flexProps = {
  vertical: {
    type: Boolean,
    default: false
  },
  wrap: {
    type: definePropType<WrapType>(String),
    default: 'wrap'
  },
  justify: {
    type: definePropType<JustifyType>(String),
    default: 'normal'
  },
  align: { type: definePropType<AlignType>(String), default: '' },
  gap: {
    type: definePropType<string | number | number[]>([String, Number]),
    default: ''
  },
  component: {
    type: definePropType<string | Component>([String, Object]),
    default: 'div'
  },
  inline: {
    type: Boolean,
    default: false
  }
} as const;
export type FlexProps = ExtractPropTypes<typeof flexProps>;
