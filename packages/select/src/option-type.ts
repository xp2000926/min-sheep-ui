import { ExtractPropTypes } from 'vue';

export const optionProps = {
  value: {
    type: [String, Number],
    required: true
  },
  label: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  }
} as const;

export type OptionProps = ExtractPropTypes<typeof optionProps>;
