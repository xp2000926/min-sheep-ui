import { ExtractPropTypes, PropType } from 'vue';
export type SwitchSize = '' | 'small' | 'large';
export const switchProps = {
  modelValue: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  size: {
    type: String as PropType<SwitchSize>,
    default: ''
  },
  activeText: {
    type: String,
    default: ''
  },
  inactiveText: {
    type: String,
    default: ''
  },
  inlinePrompt: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  }
  // width: {
  //   type: Number | String,
  //   default: ''
  // }
} as const;
export type SwitchProps = ExtractPropTypes<typeof switchProps>;
