import { ExtractPropTypes } from 'vue';

export const imagePreviewProps = {
  src: {
    type: String,
    default: ''
  },
  blobHandler: {
    type: Function,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    default: () => {}
  },
  withoutToolbar: {
    //是否不显示工具栏
    type: Boolean,
    default: true
  },
  operations: {
    type: String,
    default: 'scale,rotate,reset,close'
  }
} as const;
export type ImagePreviewProps = ExtractPropTypes<typeof imagePreviewProps>;
