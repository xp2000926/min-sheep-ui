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
    return "import { defineComponent } from 'vue'\nimport { ".concat(propsTypeName, ", ").concat(propsName, " } from './").concat(propsFileName, "'\nimport '../../index.scss'\nimport '../style/").concat(name, ".scss'\n\nexport default defineComponent({\n  name: '").concat(compName, "',\n  props: ").concat(propsName, ",\n  setup(props: ").concat(propsTypeName, ") {\n    return () => <div class=\"").concat(className, "\">").concat(name, "</div>\n  }\n})\n");
}
exports["default"] = genCoreTypesTemplate;
