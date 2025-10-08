<template>
  <div ref="editorRef" class="editor-container"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// 只从必要的包导入，避免间接依赖引入多个版本
import { EditorView } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { javascript } from '@codemirror/lang-javascript';
import { foldGutter, foldAll, unfoldAll } from '@codemirror/fold';
import { defaultKeymap } from '@codemirror/commands';
import { keymap } from '@codemirror/view';
import { highlightActiveLineGutter, lineNumbers } from '@codemirror/view';
import { highlightSpecialChars, drawSelection, dropCursor } from '@codemirror/view';
import { rectangularSelection } from '@codemirror/rectangular-selection';
// import { crosshairCursor } from '@codemirror/crosshair-cursor';
import { highlightActiveLine } from '@codemirror/view';
import { syntaxHighlighting, defaultHighlightStyle } from '@codemirror/language';
import { history, historyKeymap } from '@codemirror/history';
import { completionKeymap,autocompletion } from '@codemirror/autocomplete';
import { closeBrackets, closeBracketsKeymap } from '@codemirror/closebrackets';

const editorRef = ref(null);
let editor = null;

onMounted(() => {
  if (!editorRef.value) return;

  const code = `function calculateSum(a, b) {
  if (a > 0 && b > 0) {
    return a + b;
  } else {
    return 0;
  }
}

// 另一个可折叠块
const data = [
  { id: 1, name: 'CodeMirror' },
  { id: 2, name: 'Folding' }
];`;

  // 手动组合基础功能，避免使用basicSetup可能带来的版本问题
  const extensions = [
    lineNumbers(),
    highlightActiveLineGutter(),
    highlightSpecialChars(),
    history(),
    foldGutter({
      markerDOM: (isFolded) => {
        const div = document.createElement('div');
        div.style.color = '#666';
        div.textContent = isFolded ? '▼' : '▶';
        return div;
      }
    }),
    drawSelection(),
    dropCursor(),
    EditorState.allowMultipleSelections.of(true),
    rectangularSelection(),
    // crosshairCursor(),
    highlightActiveLine(),
    syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
    javascript(),
    autocompletion(),
    closeBrackets(),
    keymap.of([
      ...defaultKeymap,
      ...historyKeymap,
      ...completionKeymap,
      ...closeBracketsKeymap
    ])
  ];

  // 创建编辑器
  const state = EditorState.create({
    doc: code,
    extensions: extensions
  });

  editor = new EditorView({
    state,
    parent: editorRef.value
  });

  setTimeout(() => {
    foldAll(editor);
  }, 100);
});

onUnmounted(() => {
  if (editor) {
    editor.destroy();
    editor = null;
  }
});

// 暴露折叠/展开方法
const handleFoldAll = () => editor && foldAll(editor);
const handleUnfoldAll = () => editor && unfoldAll(editor);

defineExpose({
  handleFoldAll,
  handleUnfoldAll
});
</script>

<style scoped>
.editor-container {
  width: 100%;
  height: 400px;
  border: 1px solid #eee;
  border-radius: 4px;
}
</style>
