import {
  defineComponent,
  computed,
  watch,
  onMounted,
  onBeforeUnmount,
  toRefs
} from 'vue';
import * as monaco from 'monaco-editor';
import { monacoEditorProps, MonacoEditorProps } from './code-editor-type';
self.MonacoEnvironment = {
  getWorkerUrl: function (moduleId, label) {
    // 使用本地 node_modules 中的 worker 文件
    if (label === 'json') {
      return './node_modules/monaco-editor/esm/vs/language/json/json.worker.js';
    }
    if (label === 'css' || label === 'scss' || label === 'less') {
      return './node_modules/monaco-editor/esm/vs/language/css/css.worker.js';
    }
    if (label === 'html' || label === 'handlebars' || label === 'razor') {
      return './node_modules/monaco-editor/esm/vs/language/html/html.worker.js';
    }
    if (label === 'typescript' || label === 'javascript') {
      return './node_modules/monaco-editor/esm/vs/language/typescript/ts.worker.js';
    }
    return './node_modules/monaco-editor/esm/vs/editor/editor.worker.js';
  }
};
export default defineComponent({
  name: 'MonacoEditor',
  props: monacoEditorProps,
  emits: ['editorWillMount', 'editorDidMount', 'change', 'update:modelValue'],
  setup(props: MonacoEditorProps, { emit, expose }) {
    const {
      width,
      height,
      diffEditor,
      modelValue,
      language,
      theme,
      options,
      original
    } = toRefs(props);

    let editor:
      | monaco.editor.IStandaloneCodeEditor
      | monaco.editor.IStandaloneDiffEditor
      | null = null;
    let container: HTMLDivElement | null = null;

    // 计算样式
    const style = computed(() => {
      const fixedWidth = width.value?.toString().includes('%')
        ? width.value
        : `${width.value}px`;
      const fixedHeight = height.value?.toString().includes('%')
        ? height.value
        : `${height.value}px`;
      return {
        width: fixedWidth,
        height: fixedHeight,
        textAlign: 'left' as const
      };
    });

    // 获取编辑器实例
    const getEditor = (): monaco.editor.IStandaloneCodeEditor | null => {
      if (!editor) return null;
      return diffEditor.value
        ? (editor as monaco.editor.IStandaloneDiffEditor).modifiedEditor
        : (editor as monaco.editor.IStandaloneCodeEditor);
    };

    // 设置值
    const setValue = (value: string) => {
      const currentEditor = getEditor();
      if (currentEditor) {
        currentEditor.setValue(value);
      }
    };

    // 获取值
    const getValue = (): string => {
      const currentEditor = getEditor();
      if (!currentEditor) return '';
      return currentEditor.getValue();
    };

    // 初始化 Monaco Editor
    const initMonaco = () => {
      try {
        emit('editorWillMount', monaco);

        if (!container) return;

        container.innerHTML = '';

        editor = monaco.editor[
          diffEditor.value ? 'createDiffEditor' : 'create'
        ](container, {
          value: modelValue.value || '',
          language: language.value,
          theme: theme.value,
          ...options.value
        });

        // 监听内容变化
        const currentEditor = getEditor();
        currentEditor?.onDidChangeModelContent(event => {
          const value = currentEditor.getValue();
          if (modelValue.value !== value) {
            emit('change', value, event);
            emit('update:modelValue', value);
          }
        });

        emit('editorDidMount', editor);
      } catch (error) {
        console.error('Failed to initialize Monaco Editor:', error);
      }
    };

    // 监听器
    watch(
      options,
      newOptions => {
        editor?.updateOptions(newOptions);
      },
      { deep: true }
    );

    watch(modelValue, newValue => {
      if (newValue !== getValue()) {
        setValue(newValue || '');
      }
    });

    watch(language, () => {
      if (!editor) return;

      if (diffEditor.value) {
        const diffEditorInstance =
          editor as monaco.editor.IStandaloneDiffEditor;
        const model = diffEditorInstance.getModel();
        if (model) {
          const { original: originalModel, modified } = model;
          monaco.editor.setModelLanguage(originalModel, language.value);
          monaco.editor.setModelLanguage(modified, language.value);
        }
      } else {
        const codeEditor = editor as monaco.editor.IStandaloneCodeEditor;
        const model = codeEditor.getModel();
        if (model) {
          monaco.editor.setModelLanguage(model, language.value);
        }
      }
    });

    watch(theme, () => {
      if (theme.value) {
        monaco.editor.setTheme(theme.value);
      }
    });

    // 生命周期
    onMounted(() => {
      setTimeout(() => {
        initMonaco();
      }, 0);
    });

    onBeforeUnmount(() => {
      editor?.dispose();
      editor = null;
    });

    // 暴露方法给父组件
    expose({
      getEditor: () => editor,
      getValue,
      setValue
    });

    return () => (
      <div
        class="monaco-editor-vue3"
        style={style.value}
        ref={el => {
          container = el as HTMLDivElement;
        }}
      ></div>
    );
  }
});
