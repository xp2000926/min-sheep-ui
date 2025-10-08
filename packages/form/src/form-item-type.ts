import { ExtractPropTypes } from 'vue';

export const formItemProps = {
  label: {
    type: String,
    default: ''
  },
  labelWidth: {
    type: String,
    default: ''
  },
  rules: {
    type: Object,
    default: () => ({})
  },
  prop: {
    type: String,
    default: ''
  }
} as const;
export type FormItemProps = ExtractPropTypes<typeof formItemProps>;
