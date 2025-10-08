import {
  defineComponent,
  computed,
  watch,
  onMounted,
  onBeforeUnmount,
  toRefs
} from 'vue';
import * as monaco from 'monaco-editor';
import { parseTmTheme } from 'monaco-themes';

// 配置 Monaco Editor workers
self.MonacoEnvironment = {
  getWorkerUrl: function (moduleId, label) {
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

export interface MonacoEditorProps {
  diffEditor?: boolean;
  width?: string | number;
  height?: string | number;
  original?: string;
  modelValue?: string;
  language?: string;
  theme?: string;
  options?: Record<string, any>;
}


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
    if (options.value) {
      watch(
        options,
        newOptions => {
          if (newOptions) {
            editor?.updateOptions(newOptions);
          }
        },
        { deep: true }
      );
    }

    if (modelValue.value !== undefined) {
      watch(modelValue, newValue => {
        if (newValue !== getValue()) {
          setValue(newValue || '');
        }
      });
    }

    if (language.value) {
      watch(language, () => {
        if (!editor || !language.value) return;

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
    }

    if (theme.value) {
      watch(theme, () => {
        if (theme.value) {
          monaco.editor.setTheme(theme.value);
        }
      });
    }

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
/*
monaco-editor 主题插件
Monaco Editor 支持丰富的主题系统，以下是一些常用的主题插件和自定义主题方法：

1. 官方内置主题
Monaco Editor 自带 4 个官方主题：

javascript
// 内置主题
const builtInThemes = [
  'vs',        // 浅色主题
  'vs-dark',   // 深色主题
  'hc-black',  // 高对比度黑色
  'hc-light'   // 高对比度浅色
]

// 设置主题
monaco.editor.setTheme('vs-dark')
2. 第三方主题插件
monaco-themes
bash
npm install monaco-themes
javascript
import { loadTheme } from 'monaco-themes'

// 加载主题
loadTheme('Solarized Dark').then(themeData => {
  monaco.editor.defineTheme('solarized-dark', themeData)
  monaco.editor.setTheme('solarized-dark')
})

// 可用主题列表
const availableThemes = [
  'Active4D', 'AllHallowsEve', 'Amy', 'BirdsOfParadise', 'Blackboard',
  'BrillianceBlack', 'BrillianceDull', 'ChromeDevTools', 'CloudsMidnight',
  'Clouds', 'Cobalt', 'Dawn', 'DominionDay', 'Dracula', 'Dreamweaver',
  'Eiffel', 'EspressoLibre', 'GitHub', 'IDLE', 'Katzenmilch',
  'KuroirTheme', 'LAZY', 'MagicWBAmiga', 'MerbivoreSoft', 'Merbivore',
  'MonokaiBright', 'Monokai', 'NightOwl', 'OceanicNext', 'PastelsOnDark',
  'SlushAndPoppies', 'SolarizedDark', 'SolarizedLight', 'SpaceCadet',
  'Sunburst', 'TextmateMacClassic', 'TomorrowNightBlue', 'TomorrowNightBright',
  'TomorrowNightEighties', 'TomorrowNight', 'Tomorrow', 'Twilight',
  'UpstreamSunburst', 'VibrantInk', 'XcodeDefault', 'Zenburnesque',
  'iplastic', 'idleFingers', 'krTheme', 'monoindustrial'
]
monaco-theme-manager
bash
npm install monaco-theme-manager
javascript
import { ThemeManager } from 'monaco-theme-manager'

const themeManager = new ThemeManager(monaco)

// 添加主题
themeManager.addTheme('my-theme', {
  base: 'vs-dark',
  inherit: true,
  rules: [
    { token: 'comment', foreground: '6A9955', fontStyle: 'italic' },
    { token: 'keyword', foreground: 'C586C0' },
    { token: 'string', foreground: 'CE9178' }
  ],
  colors: {
    'editor.background': '#1E1E1E',
    'editor.foreground': '#D4D4D4'
  }
})

// 应用主题
themeManager.setTheme('my-theme')
3. 自定义主题
基础自定义主题
javascript
// 定义自定义主题
monaco.editor.defineTheme('my-custom-theme', {
  base: 'vs-dark', // 可以继承 vs, vs-dark, hc-black, hc-light
  inherit: true,   // 是否继承基础主题
  rules: [
    // 语法高亮规则
    { token: 'comment', foreground: '6A9955', fontStyle: 'italic' },
    { token: 'keyword', foreground: 'C586C0' },
    { token: 'string', foreground: 'CE9178' },
    { token: 'number', foreground: 'B5CEA8' },
    { token: 'type', foreground: '4EC9B0' },
    { token: 'function', foreground: 'DCDCAA' },
    { token: 'variable', foreground: '9CDCFE' }
  ],
  colors: {
    // 编辑器颜色配置
    'editor.background': '#1E1E1E',
    'editor.foreground': '#D4D4D4',
    'editor.lineHighlightBackground': '#2D2D30',
    'editor.selectionBackground': '#264F78',
    'editor.inactiveSelectionBackground': '#3A3D41',
    'editorCursor.foreground': '#AEAFAD',
    'editorWhitespace.foreground': '#404040',
    'editorIndentGuide.background': '#404040',
    'editorIndentGuide.activeBackground': '#707070'
  }
})

// 应用主题
monaco.editor.setTheme('my-custom-theme')
完整主题配置示例
javascript
const createCustomTheme = (name, isDark = true) => {
  const baseTheme = isDark ? 'vs-dark' : 'vs'

  monaco.editor.defineTheme(name, {
    base: baseTheme,
    inherit: true,
    rules: [
      { token: '', foreground: isDark ? 'D4D4D4' : '000000' },
      { token: 'comment', foreground: isDark ? '6A9955' : '008000', fontStyle: 'italic' },
      { token: 'keyword', foreground: isDark ? 'C586C0' : '0000FF' },
      { token: 'string', foreground: isDark ? 'CE9178' : 'A31515' },
      { token: 'number', foreground: isDark ? 'B5CEA8' : '098658' },
      { token: 'type', foreground: isDark ? '4EC9B0' : '267F99' },
      { token: 'function', foreground: isDark ? 'DCDCAA' : '795E26' },
      { token: 'variable', foreground: isDark ? '9CDCFE' : '001080' },
      { token: 'operator', foreground: isDark ? 'D4D4D4' : '000000' },
      { token: 'delimiter', foreground: isDark ? 'D4D4D4' : '000000' }
    ],
    colors: {
      'editor.background': isDark ? '#1E1E1E' : '#FFFFFF',
      'editor.foreground': isDark ? '#D4D4D4' : '#000000',
      'editor.lineHighlightBackground': isDark ? '#2D2D30' : '#F5F5F5',
      'editor.selectionBackground': isDark ? '#264F78' : '#ADD6FF',
      'editor.inactiveSelectionBackground': isDark ? '#3A3D41' : '#E5E5E5',
      'editorCursor.foreground': isDark ? '#AEAFAD' : '#000000',
      'editorWhitespace.foreground': isDark ? '#404040' : '#D4D4D4',
      'editorIndentGuide.background': isDark ? '#404040' : '#D3D3D3',
      'editorIndentGuide.activeBackground': isDark ? '#707070' : '#939393',
      'editor.lineNumber.foreground': isDark ? '#858585' : '#2B91AF',
      'editorGutter.background': isDark ? '#1E1E1E' : '#FFFFFF'
    }
  })
}

// 创建多个主题
createCustomTheme('my-dark-theme', true)
createCustomTheme('my-light-theme', false)
4. 流行的第三方主题
One Dark Pro
javascript
monaco.editor.defineTheme('one-dark-pro', {
  base: 'vs-dark',
  inherit: true,
  rules: [
    { token: 'comment', foreground: '5C6370', fontStyle: 'italic' },
    { token: 'keyword', foreground: 'C678DD' },
    { token: 'string', foreground: '98C379' },
    { token: 'number', foreground: 'D19A66' },
    { token: 'type', foreground: 'E5C07B' },
    { token: 'function', foreground: '61AFEF' },
    { token: 'variable', foreground: 'E06C75' }
  ],
  colors: {
    'editor.background': '#282C34',
    'editor.foreground': '#ABB2BF',
    'editor.lineHighlightBackground': '#2C313C',
    'editor.selectionBackground': '#3E4451'
  }
})
Material Theme
javascript
monaco.editor.defineTheme('material-dark', {
  base: 'vs-dark',
  inherit: true,
  rules: [
    { token: 'comment', foreground: '546E7A' },
    { token: 'keyword', foreground: 'C792EA' },
    { token: 'string', foreground: 'C3E88D' },
    { token: 'number', foreground: 'F78C6C' },
    { token: 'type', foreground: '82AAFF' },
    { token: 'function', foreground: '82AAFF' }
  ],
  colors: {
    'editor.background': '#263238',
    'editor.foreground': '#EEFFFF',
    'editor.lineHighlightBackground': '#1E272C'
  }
})
5. Vue 组件集成示例
vue
<template>
  <div>
    <el-select v-model="currentTheme" @change="handleThemeChange">
      <el-option
        v-for="theme in themeList"
        :key="theme.value"
        :label="theme.label"
        :value="theme.value"
      />
    </el-select>

    <MonacoEditor
      v-model="code"
      :theme="currentTheme"
      :language="language"
      :style="{ height: '500px' }"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as monaco from 'monaco-editor'
import MonacoEditor from './MonacoEditor.vue'

const code = ref('')
const language = ref('javascript')
const currentTheme = ref('vs-dark')

const themeList = ref([
  { label: 'VS Light', value: 'vs' },
  { label: 'VS Dark', value: 'vs-dark' },
  { label: 'High Contrast Dark', value: 'hc-black' },
  { label: 'High Contrast Light', value: 'hc-light' },
  { label: 'One Dark Pro', value: 'one-dark-pro' },
  { label: 'Material Dark', value: 'material-dark' },
  { label: 'Solarized Dark', value: 'solarized-dark' },
  { label: 'Dracula', value: 'dracula' }
])

// 初始化自定义主题
const initCustomThemes = () => {
  // One Dark Pro
  monaco.editor.defineTheme('one-dark-pro', {
    base: 'vs-dark',
    inherit: true,
    rules: [
      { token: 'comment', foreground: '5C6370', fontStyle: 'italic' },
      { token: 'keyword', foreground: 'C678DD' },
      { token: 'string', foreground: '98C379' },
      { token: 'number', foreground: 'D19A66' },
      { token: 'type', foreground: 'E5C07B' },
      { token: 'function', foreground: '61AFEF' },
      { token: 'variable', foreground: 'E06C75' }
    ],
    colors: {
      'editor.background': '#282C34',
      'editor.foreground': '#ABB2BF',
      'editor.lineHighlightBackground': '#2C313C',
      'editor.selectionBackground': '#3E4451'
    }
  })

  // Material Dark
  monaco.editor.defineTheme('material-dark', {
    base: 'vs-dark',
    inherit: true,
    rules: [
      { token: 'comment', foreground: '546E7A' },
      { token: 'keyword', foreground: 'C792EA' },
      { token: 'string', foreground: 'C3E88D' },
      { token: 'number', foreground: 'F78C6C' },
      { token: 'type', foreground: '82AAFF' },
      { token: 'function', foreground: '82AAFF' }
    ],
    colors: {
      'editor.background': '#263238',
      'editor.foreground': '#EEFFFF',
      'editor.lineHighlightBackground': '#1E272C'
    }
  })

  // Dracula
  monaco.editor.defineTheme('dracula', {
    base: 'vs-dark',
    inherit: true,
    rules: [
      { token: 'comment', foreground: '6272A4' },
      { token: 'keyword', foreground: 'FF79C6' },
      { token: 'string', foreground: 'F1FA8C' },
      { token: 'number', foreground: 'BD93F9' },
      { token: 'type', foreground: '8BE9FD' },
      { token: 'function', foreground: '50FA7B' }
    ],
    colors: {
      'editor.background': '#282A36',
      'editor.foreground': '#F8F8F2',
      'editor.lineHighlightBackground': '#44475A'
    }
  })

  // Solarized Dark
  monaco.editor.defineTheme('solarized-dark', {
    base: 'vs-dark',
    inherit: true,
    rules: [
      { token: 'comment', foreground: '657B83' },
      { token: 'keyword', foreground: '859900' },
      { token: 'string', foreground: '2AA198' },
      { token: 'number', foreground: 'D33682' },
      { token: 'type', foreground: 'B58900' },
      { token: 'function', foreground: '268BD2' }
    ],
    colors: {
      'editor.background': '#002B36',
      'editor.foreground': '#839496',
      'editor.lineHighlightBackground': '#073642'
    }
  })
}

const handleThemeChange = (theme: string) => {
  monaco.editor.setTheme(theme)
}

onMounted(() => {
  initCustomThemes()
})
</script>
6. 动态主题切换
typescript
// 主题管理器
class ThemeManager {
  private themes: Map<string, any> = new Map()

  constructor(private monaco: any) {}

  // 注册主题
  registerTheme(name: string, themeConfig: any) {
    this.themes.set(name, themeConfig)
    this.monaco.editor.defineTheme(name, themeConfig)
  }

  // 切换主题
  setTheme(name: string) {
    if (this.themes.has(name)) {
      this.monaco.editor.setTheme(name)
    }
  }

  // 获取所有主题
  getThemes() {
    return Array.from(this.themes.keys())
  }
}

// 使用
const themeManager = new ThemeManager(monaco)
这些主题插件和自定义方法可以让你为 Monaco Editor 创建丰富多样的外观体验。你可以根据项目需求选择合适的主题方案。


*/
