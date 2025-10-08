import { toPascalCase, toCamelCase } from './utils';

// 创建组件核心文件模板
export const genCoreTypesTemplate = (name: string) => {
  const compName = `S${toPascalCase(name)}`; //组件名称
  const propsTypeName = `${toPascalCase(name)}Props`; //类型名
  const propsName = `${toCamelCase(name)}Props`; //属性名
  const propsFileName = `${name}-type`; //文件名称
  const className = `s-${name}`;
  return `import { defineComponent } from 'vue';
import { ${propsTypeName}, ${propsName} } from './${propsFileName}';

export default defineComponent({
  name: '${compName}',
  props: ${propsName},
  setup(props: ${propsTypeName}) {
    return () => <div class="${className}">${name}</div>
  }
});
`;
};
