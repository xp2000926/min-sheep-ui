import { ExtractPropTypes } from 'vue';
import { definePropType } from '../../utils.utils';
export type BadgeType =
  | ''
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'default';
export const badgeProps = {
  value: {
    type: definePropType<string | number>([String, Number]),
    default: 0
  },
  type: {
    type: definePropType<BadgeType>(String),
    default: ''
  },
  max: {
    type: Number,
    default: ''
  },
  isDot: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: ''
  },
  textColor: {
    type: String,
    default: ''
  },
  isStatus: {
    type: Boolean,
    default: false
  },
  text: {
    type: String,
    default: ''
  },
  independent: {
    type: Boolean,
    default: false,
    description: '是否独立显示'
  },
  showZero: {
    type: Boolean,
    default: false,
    description: '是否显示0值'
  }
} as const;
export type BadgeProps = ExtractPropTypes<typeof badgeProps>;
