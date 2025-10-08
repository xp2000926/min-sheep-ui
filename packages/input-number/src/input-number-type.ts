import { ExtractPropTypes } from 'vue';

export const inputNumberProps = {
  modelValue: {
    type: String,
    default: ''
  }
} as const;
export type InputNumberProps = ExtractPropTypes<typeof inputNumberProps>;
