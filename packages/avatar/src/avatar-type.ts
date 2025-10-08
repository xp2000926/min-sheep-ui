import { ExtractPropTypes } from 'vue';
import { definePropType } from '../../utils.utils';

export type ShapeType = 'circle' | 'square';
export type AvatarSize = '' | 'small' | 'large' | 'default';
export type FitType = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down' | '';

export const avatarProps = {
  size: {
    type: definePropType<AvatarSize | number>([String, Number]),
    default: ''
  },
  src: {
    type: String,
    default: '',
    validator: (val: string) => {
      if (val === '') return true;
      return (
        val.startsWith('http') ||
        val.startsWith('https') ||
        val.startsWith('//')
      );
    }
  },
  alt: {
    type: String,
    default: ''
  },
  shape: {
    tyep: definePropType<ShapeType>(String),
    default: 'circle'
  },
  icon: {
    type: String,
    default: ''
  },
  fit: {
    type: definePropType<FitType>(String),
    default: ''
  },
  lazy: {
    type: Boolean,
    default: false
  },
  fallbackSrc: {
    type: String,
    default: ''
  }
} as const;
export type AvatarProps = ExtractPropTypes<typeof avatarProps>;
