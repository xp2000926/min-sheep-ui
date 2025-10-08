import { ExtractPropTypes } from 'vue';
import { definePropType } from '../../utils.utils';
import { AvatarSize } from './avatar-type';

export const avatarGroupProps = {
  options: {
    type: Array,
    default: () => []
  },
  max: {
    type: Number,
    default: 0
  },
  size: {
    type: definePropType<AvatarSize | number>([String, Number]),
    default: ''
  }
} as const;
export type AvatarGroupProps = ExtractPropTypes<typeof avatarGroupProps>;
