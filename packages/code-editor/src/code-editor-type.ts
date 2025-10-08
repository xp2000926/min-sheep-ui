import { ExtractPropTypes } from 'vue';

export const monacoEditorProps = {
  diffEditor: { type: Boolean, default: false },
  width: { type: [String, Number] as any, default: '100%' },
  height: { type: [String, Number] as any, default: '100%' },
  original: String,
  modelValue: String,
  language: { type: String, default: 'javascript' },
  theme: { type: String, default: 'vs' },
  options: {
    type: Object as any,
    default: () => ({})
  }
} as const;

export type MonacoEditorProps = ExtractPropTypes<typeof monacoEditorProps>;
