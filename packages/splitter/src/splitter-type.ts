import { ExtractPropTypes, PropType } from 'vue';

export const splitterProps = {
  layout: {
    type: String as PropType<'horizontal' | 'vertical'>,
    default: 'horizontal'
  }
} as const;
export type SplitterProps = ExtractPropTypes<typeof splitterProps>;
