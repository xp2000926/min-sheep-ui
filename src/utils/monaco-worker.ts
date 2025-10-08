// Monaco Editor Worker 配置
// 这个文件用于配置 Monaco Editor 的 Web Workers

import * as monaco from 'monaco-editor';

// 配置 Monaco Editor 的 worker 环境
export const setupMonacoWorkers = () => {
  // 设置全局 Monaco 环境
  (self as any).MonacoEnvironment = {
    getWorkerUrl: function (moduleId: string, label: string) {
      // 根据不同的语言标签返回对应的 worker 文件
      switch (label) {
        case 'json':
          return new URL(
            'monaco-editor/esm/vs/language/json/json.worker',
            import.meta.url
          ).href;
        case 'css':
        case 'scss':
        case 'less':
          return new URL(
            'monaco-editor/esm/vs/language/css/css.worker',
            import.meta.url
          ).href;
        case 'html':
        case 'handlebars':
        case 'razor':
          return new URL(
            'monaco-editor/esm/vs/language/html/html.worker',
            import.meta.url
          ).href;
        case 'typescript':
        case 'javascript':
          return new URL(
            'monaco-editor/esm/vs/language/typescript/ts.worker',
            import.meta.url
          ).href;
        default:
          return new URL(
            'monaco-editor/esm/vs/editor/editor.worker',
            import.meta.url
          ).href;
      }
    }
  };
};

// 备用配置方案 - 使用 CDN
export const setupMonacoWorkersCDN = () => {
  (self as any).MonacoEnvironment = {
    getWorkerUrl: function (moduleId: string, label: string) {
      const baseUrl =
        'https://cdn.jsdelivr.net/npm/monaco-editor@latest/esm/vs';

      switch (label) {
        case 'json':
          return `${baseUrl}/language/json/json.worker.js`;
        case 'css':
        case 'scss':
        case 'less':
          return `${baseUrl}/language/css/css.worker.js`;
        case 'html':
        case 'handlebars':
        case 'razor':
          return `${baseUrl}/language/html/html.worker.js`;
        case 'typescript':
        case 'javascript':
          return `${baseUrl}/language/typescript/ts.worker.js`;
        default:
          return `${baseUrl}/editor/editor.worker.js`;
      }
    }
  };
};

// 初始化 Monaco Editor workers
export const initMonacoWorkers = () => {
  try {
    setupMonacoWorkers();
  } catch (error) {
    console.warn(
      'Failed to setup Monaco workers with local files, falling back to CDN:',
      error
    );
    setupMonacoWorkersCDN();
  }
};
