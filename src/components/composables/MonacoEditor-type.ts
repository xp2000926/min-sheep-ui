import { ExtractPropTypes } from 'vue';

export const monacoEditorProps = {
  diffEditor: { type: Boolean, default: false },
  width: { type: [String, Number], default: '100%' },
  height: { type: [String, Number], default: '100%' },
  original: String,
  // 将 value 改为 modelValue
  modelValue: String,
  language: { type: String, default: 'javascript' },
  theme: { type: String, default: 'vs' },
  options: {
    type: Object,
    default() {
      return {};
    },
  },
} as const;

export type MonacoEditorProps = ExtractPropTypes<typeof monacoEditorProps>;
