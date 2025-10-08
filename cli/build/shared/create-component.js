"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createComponent = void 0;
/**
 * ensureDir 这个返回 Promise
 * ensureDirSync 这个不返回,是一个同步的
 * writeFileSync 创建文件,此方法需要传入文件路径  writeFileSync(文件名 ，文件的数据)
 */
var fs_extra_1 = require("fs-extra");
var path_1 = require("path");
var kolorist_1 = require("kolorist"); //颜色库
var core_1 = require("../template/core");
var types_1 = require("../template/types");
var style_1 = require("../template/style");
var test_1 = require("../template/test");
var template_1 = require("../template");
var json_1 = require("../template/json");
var md_1 = require("../template/md");
var WRITE_FILE_OPTIONS = { encoding: 'utf-8' };
var createComponent = function (meta) {
    var name = meta.name;
    //拼接组件目录
    var componentDir = (0, path_1.resolve)('../packages', name); // 组件目录
    // TODO name  fromItem from-item
    var compSrcDir = (0, path_1.resolve)(componentDir, 'src'); //组件源文件
    var styleDir = (0, path_1.resolve)(componentDir, 'style'); //样式文件
    var testDir = (0, path_1.resolve)(componentDir, 'test'); //测试文件
    var docsDir = (0, path_1.resolve)('../docs/components', name); // 文档文件
    (0, fs_extra_1.ensureDirSync)(compSrcDir);
    (0, fs_extra_1.ensureDirSync)(styleDir);
    (0, fs_extra_1.ensureDirSync)(testDir);
    (0, fs_extra_1.ensureDirSync)(docsDir);
    // 文件和内容创建
    // 核心文件:组件文件
    var coreFilePath = (0, path_1.resolve)(compSrcDir, "".concat(name, ".tsx"));
    (0, fs_extra_1.writeFileSync)(coreFilePath, (0, core_1.genCoreTypesTemplate)(name), WRITE_FILE_OPTIONS);
    //  核心文件:组件属性类型文件
    var typesFilePath = (0, path_1.resolve)(compSrcDir, name + '-type.ts');
    (0, fs_extra_1.writeFileSync)(typesFilePath, (0, types_1.genTypesTemplate)(name), WRITE_FILE_OPTIONS);
    //核心文件:样式文件
    var styleFilePath = "".concat(styleDir, "/").concat(name, ".scss");
    (0, fs_extra_1.writeFileSync)(styleFilePath, (0, style_1.genStyleTemplate)(name), WRITE_FILE_OPTIONS);
    // 核心文件:测试文件
    var testFilePath = "".concat(testDir, "/").concat(name, ".test.tsx");
    (0, fs_extra_1.writeFileSync)(testFilePath, (0, test_1.genTestTemplate)(name), WRITE_FILE_OPTIONS);
    // 索引文件
    var indexFilePath = "".concat(componentDir, "/index.ts");
    (0, fs_extra_1.writeFileSync)(indexFilePath, (0, template_1.genIndexTemplate)(name), WRITE_FILE_OPTIONS);
    // dosc 文档目录
    var jsonFilePath = "".concat(componentDir, "/index.json");
    (0, fs_extra_1.writeFileSync)(jsonFilePath, (0, json_1.genJsonTemplate)(meta), WRITE_FILE_OPTIONS);
    // dosc 文档
    var mdFilePath = "".concat(docsDir, "/index.md");
    (0, fs_extra_1.writeFileSync)(mdFilePath, (0, md_1.genMdTemplate)(meta), WRITE_FILE_OPTIONS);
    // 创建成功通知
    console.log((0, kolorist_1.lightGreen)("\u2714 \u7EC4\u4EF6  ".concat(name, "\u521B\u5EFA\u5B8C\u6BD5\uFF0C\u76EE\u5F55\u521B\u5EFA\u6210\u529F")));
    console.log((0, kolorist_1.lightBlue)("\u2714 \u7EC4\u4EF6\u76EE\u5F55\uFF1A ".concat(componentDir)));
    console.log((0, kolorist_1.lightGreen)("\u2714 \u6587\u6863  ".concat(name, "\u521B\u5EFA\u5B8C\u6BD5\uFF0C\u76EE\u5F55\u521B\u5EFA\u6210\u529F")));
    console.log((0, kolorist_1.lightBlue)("\u2714 \u6587\u6863\u76EE\u5F55\uFF1A ".concat(docsDir)));
};
exports.createComponent = createComponent;
