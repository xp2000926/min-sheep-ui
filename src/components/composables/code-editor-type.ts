import { ExtractPropTypes } from 'vue';

export const codeEditorProps = {
  modelValue: {
    type: String,
    default: ''
  },
  language: {
    type: String,
    default: 'javascript'
  },
  theme: {
    type: String,
    default: 'dracula'
  },
  width: {
    type: String,
    default: '100%' // 默认宽度
  },
  height: {
    type: String,
    default: '400px' // 默认高度
  },
  minimap: { type: Boolean, default: true }, // 默认启用小地图
  minimapOptions: {
    type: Object,
    default: () => ({
      width: 100,
      heightRatio: 1,
      follow: true,
      showSlider: true
    })
  },
  locale: {
    type: String,
    default: 'zh-cn'
  }
} as const;

export type CodeEditorProps = ExtractPropTypes<typeof codeEditorProps>;
