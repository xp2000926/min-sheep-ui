import { ExtractPropTypes } from 'vue'

export const emptyProps = {
  image: String, //自定义图片
  imageSize: Number, //图片尺寸
  description: String
} as const
export type EmptyProps = ExtractPropTypes<typeof emptyProps>
