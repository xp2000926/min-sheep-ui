import { ExtractPropTypes } from 'vue';
import { definePropType } from '../../utils.utils';
import { ButtonSize } from '../../button/src/button-type';

export const radioGroupProps = {
  modelValue: {
    type: definePropType<string | number | boolean>([String, Number, Boolean]),
    required: true
  },
  options: {
    type: Array,
    default: () => []
  },
  disabled: {
    type: Boolean,
    default: false
  },
  size: {
    type: definePropType<string | ButtonSize>(String),
    default: ''
  }
} as const;
export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>;
