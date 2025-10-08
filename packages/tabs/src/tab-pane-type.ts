import { ExtractPropTypes } from 'vue';

export const tabPaneProps = {
  label: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  }
} as const;
export type TabPaneProps = ExtractPropTypes<typeof tabPaneProps>;
