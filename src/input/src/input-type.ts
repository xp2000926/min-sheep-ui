import { ExtractPropTypes, PropType } from 'vue';
export type InputType = 'text' | 'password';
export type InputSize = '' | 'small' | 'large' | 'default';
export type InputStatus = 'success' | 'warning' | 'error' | '';
export const inputProps = {
  modelValue: {
    type: String,
    default: ''
  },
  type: {
    type: String as PropType<InputType>,
    default: 'text'
  },
  size: {
    type: String as PropType<InputSize>,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  status: {
    type: String as PropType<InputStatus>,
    default: ''
  },
  round: {
    type: Boolean,
    default: false
  },
  clearable: {
    type: Boolean,
    default: false
  },
  showPassword: {
    type: Boolean,
    default: false
  }
} as const;
export type InputProps = ExtractPropTypes<typeof inputProps>;
