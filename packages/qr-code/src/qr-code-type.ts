import { ExtractPropTypes } from 'vue';
import { definePropType } from '../../utils.utils';

export type QrType = 'canvas' | 'svg';
export type ErrorCorrectionLevelType = 'L' | 'M' | 'Q' | 'H';

export const qrCodeProps = {
  color: {
    type: String,
    default: '#000'
  },
  backgroundColor: {
    type: String,
    default: '#FFF'
  },
  iconSrc: {
    type: String,
    default: ''
  },
  errorCorrectionLevel: {
    type: definePropType<ErrorCorrectionLevelType>(String),
    default: 'M'
  },
  iconSize: {
    type: Number,
    default: 40
  },
  size: {
    type: Number,
    default: 100
  },
  type: {
    type: definePropType<QrType>(String),
    default: 'canvas'
  },
  padding: {
    type: Number,
    default: 12
  },
  modelValue: {
    type: String,
    default: ''
  },
  iconBackgroundColor: {
    type: String,
    default: '#FFF'
  },

  iconBorderRadius: {
    type: Number,
    default: 4
  }
} as const;
export type QrCodeProps = ExtractPropTypes<typeof qrCodeProps>;
