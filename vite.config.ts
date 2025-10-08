/// <reference types="vitest" />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import monacoEditorPlugin from 'vite-plugin-monaco-editor';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({}),
    monacoEditorPlugin({
      languageWorkers: [
        'json',
        'css',
        'html',
        'typescript',
        'editorWorkerService'
      ]
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler' // 使用现代 Sass API
      }
    }
  },
  // resolve: {
  //   alias: {
  //     '@': '/src'
  //   }
  // },
  server: {
    port: 7777
  },
  test: {
    // jest like test apis
    globals: true,
    // 模拟dom环境
    environment: 'happy-dom',
    // 支持tsx组件，很关键
    transformMode: {
      web: [/.[tj]sx$/]
    },
    // 自动打开浏览器
    open: true,
    // 排除指定的组件测试
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/cypress/**',
      '**/.{idea,git,cache,output,temp}/**',
      '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*',
      'packages/code-editor/**',
      'packages/watermark/**',
      'packages/splitter/**'
    ],
    coverage: {
      include: ['packages/**/*.{js,ts,tsx}'], // 包含源码目录下的所有文件
      exclude: [
        'src/views',
        'src/**/e2e',
        'src/main.ts',
        'packages/**/index.ts',
        'packages/code-editor/**',
        'packages/watermark/**',
        'packages/splitter/**'
      ] // 不包含测试文件和依赖
    }
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  optimizedeps: {
    include: [
      // 'monaco-editor/esm/vs/editor/editor.worker.js',
      // 'monaco-editor/esm/vs/language/json/json.worker',
      // 'monaco-editor/esm/vs/language/css/css.worker',
      // 'monaco-editor/esm/vs/language/html/html.worker',
      // 'monaco-editor/esm/vs/language/typescript/ts.worker'
    ]
  }
});
