"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genIndexTemplate = void 0;
var utils_1 = require("./utils");
var genIndexTemplate = function (name) {
    var compName = (0, utils_1.upperFirst)(name);
    return "import type { App } from 'vue';\nimport ".concat((0, utils_1.toPascalCase)(compName), " from './src/").concat(name, "';\nimport '../index.scss';\nimport './style/").concat(name, ".scss';\n\n// \u5177\u540D\u5BFC\u51FA\nexport { ").concat((0, utils_1.toPascalCase)(compName), " };\n\n// \u5BFC\u51FA\u63D2\u4EF6\nexport default {\n  install(app: App) {\n    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion\n    app.component(").concat((0, utils_1.toPascalCase)(compName), ".name!, ").concat((0, utils_1.toPascalCase)(compName), ");\n  }\n};\n");
};
exports.genIndexTemplate = genIndexTemplate;
