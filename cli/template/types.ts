import { upperFirst } from './utils';

// 创建组件属性类型文件模板
export default function genTypesTemplate(name: string) {
  // 属性类型声明和属性类型
  const propsTypeName = upperFirst(name) + 'Props'; //类型名
  const propsName = name + 'Props'; //属性名

  return `\
import { ExtractPropTypes } from 'vue'

export const ${propsName} = {} as const
export type ${propsTypeName} = ExtractPropTypes<typeof ${propsName}>`;
}
