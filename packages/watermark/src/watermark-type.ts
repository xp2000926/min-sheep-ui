import { ExtractPropTypes } from 'vue';

export const watermarkProps = {
  text: {
    type: String,
    required: true,
    default: 'watermark'
  },
  fontSize: {
    type: Number,
    default: 14
  },
  gap: {
    type: Number,
    default: 20
  },
  color: {
    type: String,
    default: 'rgba(0, 0, 0, .5)'
  },
  rotation: {
    type: Number,
    default: -45
  }
} as const;
export type WatermarkProps = ExtractPropTypes<typeof watermarkProps>;
