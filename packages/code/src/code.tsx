import {
  // computed,
  defineComponent,
  // nextTick,
  // onMounted,
  // ref,
  toRefs
} from 'vue';
import { CodeProps, codeProps } from './code-type';
import classnames from 'classnames';

export default defineComponent({
  name: 'SCode',
  props: codeProps,
  setup(props: CodeProps, { slots }) {
    const { wordWrap, showLineNumbers, code } = toRefs(props);

    return () => (
      <code
        class={classnames('s-code', {
          's-code--word-wrap': wordWrap.value,
          's-code--show-line-numbers': showLineNumbers.value
        })}
        ref="codeRef"
      >
        {code.value}
        {slots.default?.()}
      </code>
    );
  }
});
