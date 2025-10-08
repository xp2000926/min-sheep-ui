import { ExtractPropTypes } from 'vue';

export const cascaderPanelProps = {
  options: {
    type: Array,
    default: () => []
  },
  props: {
    type: Object,
    default: () => ({})
  }
} as const;
export type CascaderPanelProps = ExtractPropTypes<typeof cascaderPanelProps>;
