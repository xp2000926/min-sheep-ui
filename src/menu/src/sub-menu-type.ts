import { ExtractPropTypes } from 'vue';
export const subItemProps = {
  icon: {
    type: String,
    default: ''
  },
  path: {
    type: String,
    default: ''
  },
  level: {
    level: Number,
    default: 0
  }
} as const;
export type SubItemProps = ExtractPropTypes<typeof subItemProps>;
