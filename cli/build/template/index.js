"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = genIndexTemplate;
var utils_1 = require("./utils");
function genIndexTemplate(name) {
    var compName = (0, utils_1.upperFirst)(name);
    return "import { App } from 'vue'\nimport ".concat(compName, " from './src/").concat(name, "'\nimport '../index.scss';\nimport './style/").concat(name, ".scss';\n\n// \u5177\u540D\u5BFC\u51FA\nexport { ").concat(compName, " }\n\n// \u5BFC\u51FA\u63D2\u4EF6\nexport default {\n  install(app: App) {\n    app.component(").concat(compName, ".name, ").concat(compName, ")\n  }\n}\n");
}