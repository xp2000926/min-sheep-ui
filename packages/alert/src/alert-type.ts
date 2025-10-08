import { ExtractPropTypes } from 'vue';
import { definePropType } from '../../utils.utils';
export type ButtonType =
  | ''
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'error'
  | 'default';
export const alertEffects = ['light', 'dark'] as const;

export const alertProps = {
  type: {
    type: definePropType<ButtonType>(String),
    default: 'info'
  },
  effect: {
    type: String,
    values: alertEffects,
    default: 'light'
  },
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  /**
   * @description should content be placed in center.
   */
  center: {
    type: Boolean,
    default: false
  }
} as const;
export type AlertProps = ExtractPropTypes<typeof alertProps>;
