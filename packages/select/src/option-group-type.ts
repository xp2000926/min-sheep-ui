import { ExtractPropTypes } from 'vue';

export const optionGroupProps = {
  label: {
    type: String,
    required: true
  },
  disabled: {
    type: Boolean,
    default: false
  }
} as const;

export type OptionGroupProps = ExtractPropTypes<typeof optionGroupProps>;
