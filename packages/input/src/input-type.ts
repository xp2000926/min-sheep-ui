import { ExtractPropTypes } from 'vue';

export const inputProps = {
  modelValue: {
    type: String,
    default: ''
  },
  type: {
    type: String,
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
  },
  showPassword: {
    type: Boolean,
    default: false
  },
  maxlength: {
    type: Number || undefined,
    default: undefined
  },
  minlength: {
    type: Number || undefined,
    default: undefined
  },
  countGraphemes: {
    type: Function
  },
  showCount: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: ''
  }
} as const;
export type InputProps = ExtractPropTypes<typeof inputProps>;
