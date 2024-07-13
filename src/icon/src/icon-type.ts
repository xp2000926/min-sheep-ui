import { ExtractPropTypes, PropType } from 'vue';

export const iconProps = {
  size: {
    type: [String, Number] as PropType<string | number>,
    default: '1em'
  },
  name: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: ''
  }
} as const;
export type IconProps = ExtractPropTypes<typeof iconProps>;
