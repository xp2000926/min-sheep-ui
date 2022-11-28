'use strict'
exports.__esModule = true
var utils_1 = require('./utils')
// 创建组件属性类型文件模板
function genTypesTemplate(name) {
  // 属性类型声明和属性类型
  var propsTypeName = (0, utils_1.upperFirst)(name) + 'Props' //类型名
  var propsName = name + 'Props' //属性名
  return "import { ExtractPropTypes, PropType } from 'vue'\n\nexport const "
    .concat(propsName, ' = {} as const\nexport type ')
    .concat(propsTypeName, ' = ExtractPropTypes<typeof ')
    .concat(propsName, '>\n')
}
exports['default'] = genTypesTemplate
