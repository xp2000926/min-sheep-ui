import { ExtractPropTypes, PropType } from 'vue';
import { Hljs } from './composables/use-hljs';

export const codeProps = {
  code: {
    type: String,
    default: ''
  },
  language: {
    type: String,
    default: ''
  },
  showLineNumbers: {
    type: Boolean,
    default: false
  },
  wordWrap: {
    type: Boolean,
    default: false
  },
  inline: {
    type: Boolean,
    default: false
  },
  hljs: Object as PropType<Hljs>,
  internalNoHighlight: {
    type: Boolean,
    default: false
  }
} as const;
export type CodeProps = ExtractPropTypes<typeof codeProps>;
