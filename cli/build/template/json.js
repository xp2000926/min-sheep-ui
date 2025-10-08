"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genJsonTemplate = void 0;
var utils_1 = require("./utils");
var genJsonTemplate = function (meta) {
    return "{\n    \"title\": \"".concat((0, utils_1.toPascalCase)(meta.name), " ").concat(meta.title, "\",\n    \"category\": \"").concat(meta.category, "\",\n    \"link\": \"/components/").concat(meta.name, "/\"\n}");
};
exports.genJsonTemplate = genJsonTemplate;
