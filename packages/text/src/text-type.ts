import { ExtractPropTypes } from 'vue';

export const textProps = {
  type: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: ''
  },
  truncated: {
    type: Boolean,
    default: false
  },
  lineClamp: {
    type: Number || String,
    default: ''
  }
} as const;
export type TextProps = ExtractPropTypes<typeof textProps>;
