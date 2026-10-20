import { ExtractPropTypes, PropType } from 'vue';
import { Locale } from '../../locale';

export const configProviderProps = {
  locale: {
    type: Object as PropType<Locale>,
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
