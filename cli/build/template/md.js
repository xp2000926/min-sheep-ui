"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genMdTemplate = void 0;
var utils_1 = require("./utils");
var genMdTemplate = function (meta) {
    return "# ".concat((0, utils_1.toPascalCase)(meta.name), " ").concat(meta.title, "\n");
};
exports.genMdTemplate = genMdTemplate;
