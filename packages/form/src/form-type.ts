import { ExtractPropTypes } from 'vue';

export const formProps = {
  model: {
    type: Object,
    default: () => ({})
  },
  labelWidth: {
    type: String,
    default: ''
  },
  rules: {
    type: Object,
    default: () => ({})
  },
  inline: {
    type: Boolean,
    default: false
  }
} as const;
export type FormProps = ExtractPropTypes<typeof formProps>;
