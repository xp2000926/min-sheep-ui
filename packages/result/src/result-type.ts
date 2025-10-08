import { ExtractPropTypes } from 'vue';
import { definePropType } from '../../utils.utils';

type IconType = 'primary' | 'success' | 'warning' | 'info' | 'error';

export const resultProps = {
  title: {
    type: String,
    default: ''
  },
  subTitle: {
    type: String,
    default: ''
  },
  icon: {
    type: definePropType<IconType>(String),
    default: ''
  }
} as const;
export type ResultProps = ExtractPropTypes<typeof resultProps>;
