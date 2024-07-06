import { ExtractPropTypes, PropType } from 'vue';
import type { Rules } from 'async-validator';
export type FormSize = '' | 'large' | 'default' | 'small';
export type FormLabelPosition = 'left' | 'right';
export const formProps = {
  model: {
    type: Object,
    required: true
  },
  inline: {
    type: Boolean,
    default: false
  },
  size: {
    type: String as PropType<FormSize>,
    default: ''
  },
  labelPosition: {
    type: String as PropType<FormLabelPosition>,
    default: 'left'
  },
  rules: {
    type: Object as PropType<Rules>,
    default: false
  }
} as const;
export type FormProps = ExtractPropTypes<typeof formProps>;
