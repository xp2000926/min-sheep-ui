import { ExtractPropTypes } from 'vue';
import { definePropType } from '../../utils.utils';
export type Layout = 'horizontal' | 'vertical';

export const emptyProps = {
  //自定义图片
  image: {
    type: String,
    default: ''
  },
  //图片尺寸
  imageSize: {
    type: Number,
    default: 160
  },
  description: {
    type: String,
    default: '没有数据'
  },
  layout: {
    type: definePropType<Layout>(String),
    default: ''
  }
} as const;
export type EmptyProps = ExtractPropTypes<typeof emptyProps>;
