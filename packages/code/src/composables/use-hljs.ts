import type { HLJSApi } from 'highlight.js';
// import { computed, ComputedRef, Ref } from 'vue';

// interface UseHljsProps {
//   hljs?: unknown;
//   [key: string]: unknown;
// }
export interface Hljs {
  highlight: HLJSApi['highlight'];
  getLanguage: HLJSApi['getLanguage'];
}
// eslint-disable-next-line @typescript-eslint/no-empty-function
const useHljs = () => {};

export default useHljs;
