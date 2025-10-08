import { ExtractPropTypes } from 'vue';
import { definePropType } from '../../utils.utils';

export const radioProps = {
  modelValue: {
    type: definePropType<string | number | boolean>([String, Number, Boolean]),
    required: true
  },
  label: {
    type: definePropType<string | number | boolean>([String, Number, Boolean]),
    required: true
  },
  disabled: {
    type: Boolean,
    default: false
  },
  value: {
    type: definePropType<string | number | boolean>([String, Number, Boolean]),
    default: ''
  },
  border: {
    type: Boolean,
    default: false
  }
} as const;
export type RadioProps = ExtractPropTypes<typeof radioProps>;
