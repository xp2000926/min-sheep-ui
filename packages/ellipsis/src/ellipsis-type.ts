import { ExtractPropTypes, PropType } from 'vue';

export const ellipsisProps = {
  tooltip: {
    type: Boolean,
    default: true
  },
  lineClamp: {
    type: [Number, String] as PropType<string | number>,
    default: undefined
  },
  expandTrigger: {
    type: String as PropType<'click'>,
    default: undefined
  }
} as const;
export type EllipsisProps = ExtractPropTypes<typeof ellipsisProps>;
