import { ExtractPropTypes } from 'vue';
import { definePropType } from '../../utils.utils';
import { ButtonSize } from '../../button/src/button-type';

export const radioButtonProps = {
  label: {
    type: definePropType<string | number | boolean>([String, Number, Boolean]),
    required: true
  },
  disabled: {
    type: Boolean,
    default: false
  },
  size: {
    type: definePropType<ButtonSize>(String),
    default: ''
  }
} as const;
export type RadioButtonProps = ExtractPropTypes<typeof radioButtonProps>;
