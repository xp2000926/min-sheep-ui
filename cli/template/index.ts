import { upperFirst } from './utils';

export default function genIndexTemplate(name) {
  const compName = upperFirst(name);
  return `\
import { App } from 'vue'
import ${compName} from './src/${name}'
import '../index.scss';
import './style/${name}.scss';

// 具名导出
export { ${compName} }

// 导出插件
export default {
  install(app: App) {
    app.component(${compName}.name, ${compName})
  }
}
`;
}
