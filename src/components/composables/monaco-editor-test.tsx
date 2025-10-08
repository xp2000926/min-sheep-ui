import {
  defineComponent,
  useTemplateRef,
  ref,
  onMounted,
  onUnmounted,
  watch,
  Ref,
  toRefs,
  nextTick
} from 'vue';
import { codeEditorProps, CodeEditorProps } from './code-editor-type';
import * as monaco from 'monaco-editor';
export default defineComponent({
  name: 'monacoEditorTest',
  props: codeEditorProps,
  setup(props: CodeEditorProps) {
    const { modelValue, language, theme, height, width } = toRefs(props);
    const editorRef = useTemplateRef<HTMLElement>('editorRef');
    const monacoEditor = ref<monaco.editor.IStandaloneCodeEditor>();
    onMounted(() => {
      monacoEditor.value = monaco.editor.create(editorRef.value!, {
        value: modelValue.value,
        language: language.value,
        theme: theme.value,
        folding: true, // 是否折叠
        wordWrap: 'on', // 启用自动换行
        readOnly: false // 是否只读
      });
      // monaco.editor.setLocale('zh-CN');
      // monacoEditor.value!.setValue('');
    });
    watch(theme, newVal => {
      monaco.editor.setTheme(newVal);
    });
    watch(modelValue, newVal => {
      setTimeout(() => {
        console.log('newVal', newVal);
        console.log('_getValue', _getValue());
        _setValue(newVal);
      }, 100);
    });
    watch(language, newVal => {
      monaco.editor.setModelLanguage(monacoEditor.value!.getModel()!, newVal);
    });
    const _setValue = (value: string) => {
      let editor = _getEditor();
      if (editor) return editor.setValue(value);
    };
    const _getValue = () => {
      let editor = _getEditor();
      console.log('editor', editor);
      // console.log('editor', editor?.getValue());
      return '';
      if (!editor) return '';
      return editor.getValue();
    };
    const _getEditor = () => {
      if (!monacoEditor.value) return null;
      return monacoEditor.value;
    };

    return () => <div class="monaco-editor-test" ref="editorRef"></div>;
  }
});
