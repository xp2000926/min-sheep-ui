"use strict";
exports.__esModule = true;
var utils_1 = require("./utils");
// 创建组件核心文件模板
function genCoreTypesTemplate(name) {
    var compName = 'S' + (0, utils_1.upperFirst)(name); //组件名称
    var propsTypeName = (0, utils_1.upperFirst)(name) + 'Props'; //类型名
    var propsName = name + 'Props'; //属性名
    var propsFileName = name + '-type'; //文件名称
    var className = 's-' + name;
    return "import { defineComponent, toRefs } from 'vue'\nimport { ".concat(propsTypeName, ", ").concat(propsName, " } from './").concat(propsFileName, "'\n\nexport default defineComponent({\n  name: '").concat(compName, "',\n  props: ").concat(propsName, ",\n  setup(props: ").concat(propsTypeName, ") {\n    return () => {\n      return (\n        <div class=\"").concat(className, "\"></div>\n      )\n    }\n  }\n})\n");
}
exports["default"] = genCoreTypesTemplate;