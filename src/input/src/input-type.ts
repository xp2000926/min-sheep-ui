import { ExtractPropTypes, PropType } from 'vue';
export type IInputType = 'text' | 'password';
export const inputProps = {
  modelValue: {
    type: String,
    default: ''
  },
  type: {
    type: String as PropType<IInputType>,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  clearable: {
    type: Boolean,
    default: false
  }
} as const;
export type InputProps = ExtractPropTypes<typeof inputProps>;
