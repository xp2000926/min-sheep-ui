"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = genTestTemplate;
var utils_1 = require("./utils");
function genTestTemplate(name) {
    return "import { render } from '@testing-library/vue'\nimport ".concat((0, utils_1.upperFirst)(name), " from '../src/").concat(name, "'\n\ndescribe('").concat(name, " \u6D4B\u8BD5', () => {\n  test('").concat(name, " init render', async () => {\n    const { getByRole } = render(").concat((0, utils_1.upperFirst)(name), ")\n    getByRole('").concat(name, "')\n  })\n})\n");
}
