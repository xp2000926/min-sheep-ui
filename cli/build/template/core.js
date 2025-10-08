"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genCoreTypesTemplate = void 0;
var utils_1 = require("./utils");
// 创建组件核心文件模板
var genCoreTypesTemplate = function (name) {
    var compName = "S".concat((0, utils_1.toPascalCase)(name)); //组件名称
    var propsTypeName = "".concat((0, utils_1.toPascalCase)(name), "Props"); //类型名
    var propsName = "".concat((0, utils_1.toCamelCase)(name), "Props"); //属性名
    var propsFileName = "".concat(name, "-type"); //文件名称
    var className = "s-".concat(name);
    return "import { defineComponent } from 'vue';\nimport { ".concat(propsTypeName, ", ").concat(propsName, " } from './").concat(propsFileName, "';\n\nexport default defineComponent({\n  name: '").concat(compName, "',\n  props: ").concat(propsName, ",\n  setup(props: ").concat(propsTypeName, ") {\n    return () => <div class=\"").concat(className, "\">").concat(name, "</div>\n  }\n});\n");
};
exports.genCoreTypesTemplate = genCoreTypesTemplate;
