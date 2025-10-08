import { toPascalCase, upperFirst } from './utils';

export const genIndexTemplate = name => {
  const compName = upperFirst(name);

  return `import type { App } from 'vue';
import ${toPascalCase(compName)} from './src/${name}';
import '../index.scss';
import './style/${name}.scss';

// 具名导出
export { ${toPascalCase(compName)} };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(${toPascalCase(compName)}.name!, ${toPascalCase(compName)});
  }
};
`;
};
