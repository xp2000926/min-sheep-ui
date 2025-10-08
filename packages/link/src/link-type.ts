import { ExtractPropTypes } from 'vue';

export const linkProps = {
  type: {
    type: String,
    default: 'default'
  },
  icon: {
    type: String,
    default: ''
  },
  underline: {
    type: Boolean,
    default: true
  },
  disabled: {
    type: Boolean,
    default: false
  }
} as const;
export type LinkProps = ExtractPropTypes<typeof linkProps>;
