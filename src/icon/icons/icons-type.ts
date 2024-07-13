import { ExtractPropTypes, PropType } from 'vue';

export const iconsProps = {
  width: {
    type: [String, Number] as PropType<string | number>,
    default: '1em'
  },
  height: {
    type: [String, Number] as PropType<string | number>,
    default: '1em'
  }
} as const;
export type IconsProps = ExtractPropTypes<typeof iconsProps>;
