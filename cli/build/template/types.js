"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = genTypesTemplate;
var utils_1 = require("./utils");
// 创建组件属性类型文件模板
function genTypesTemplate(name) {
    // 属性类型声明和属性类型
    var propsTypeName = (0, utils_1.upperFirst)(name) + 'Props'; //类型名
    var propsName = name + 'Props'; //属性名
    return "import { ExtractPropTypes } from 'vue'\n\nexport const ".concat(propsName, " = {} as const\nexport type ").concat(propsTypeName, " = ExtractPropTypes<typeof ").concat(propsName, ">");
}
