import { ExtractPropTypes } from 'vue';

export const configProviderProps = {
  locale: {
    type: String,
    default: 'zh_CN'
  },
  namespace: {
    type: String,
    default: 's'
  },
  theme: {
    type: String,
    default: ''
  }
} as const;
export type ConfigProviderProps = ExtractPropTypes<typeof configProviderProps>;
