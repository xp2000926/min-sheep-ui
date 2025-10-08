"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUpperKebabCase = exports.toKebabCase = exports.toPackageName = exports.toUpperSnakeCase = exports.toSnakeCase = exports.toPascalCase = exports.toCamelCase = exports.upperFirst = void 0;
var upperFirst = function (str) {
    return str[0].toUpperCase() + str.slice(1);
};
exports.upperFirst = upperFirst;
var _preprocess = function (name) {
    if (!name)
        return '';
    // 替换中横线为下划线
    var processed = name.replace(/-/g, '_');
    // 处理驼峰命名和帕斯卡命名，在大写字母前添加下划线
    var result = [];
    for (var i = 0; i < processed.length; i++) {
        var char = processed[i];
        if (char === char.toUpperCase() && char !== char.toLowerCase()) {
            // 如果是大写字母且不是第一个字符且前一个字符不是下划线，则添加下划线
            if (i > 0 && processed[i - 1] !== '_') {
                result.push('_');
            }
            result.push(char);
        }
        else {
            result.push(char);
        }
    }
    processed = result.join('');
    // 确保只有字母、数字和下划线，移除其他字符
    processed = processed.replace(/[^a-zA-Z0-9_]/g, '_');
    // 处理连续的下划线
    while (processed.includes('__')) {
        processed = processed.replace(/__/g, '_');
    }
    // 移除首尾的下划线
    return processed.replace(/^_+|_+$/g, '');
};
/**
 * @description 转换为驼峰命名法（首字母小写，后续单词首字母大写）
 * @param {string} name
 * @returns {string}
 * @example
 *  toCamelCase("hello world") // helloWorld
 *  toCamelCase("hello-world") // helloWorld
 */
var toCamelCase = function (name) {
    var processed = _preprocess(name);
    var words = processed.split('_');
    if (words.length === 0)
        return '';
    return (words[0].toLowerCase() +
        words
            .slice(1)
            .map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); })
            .join(''));
};
exports.toCamelCase = toCamelCase;
/**
 * @description 转换为帕斯卡命名法（每个单词首字母大写，无分隔符）
 * @param {string} name
 * @returns {string}
 * @example
 *  toPascalCase("hello world") // HelloWorld
 */
var toPascalCase = function (name) {
    var processed = _preprocess(name);
    var words = processed.split('_');
    return words
        .filter(function (word) { return word; })
        .map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); })
        .join('');
};
exports.toPascalCase = toPascalCase;
/**
 * @description 转换为下划线+小写字母命名法
 * @param {string} name
 * @returns
 * @example
 *  toSnakeCase("hello world") // hello_world
 */
var toSnakeCase = function (name) {
    var processed = _preprocess(name);
    return processed.toLowerCase();
};
exports.toSnakeCase = toSnakeCase;
/**
 * @description  转换为下划线+大写字母命名法
 * @param {string} name
 * @returns {string}
 * @example
 *  toUpperSnakeCase("hello world") // HELLO_WORLD
 */
var toUpperSnakeCase = function (name) {
    var processed = _preprocess(name);
    return processed.toUpperCase();
};
exports.toUpperSnakeCase = toUpperSnakeCase;
/**
 * @description 转换为包名格式（点分隔，全小写）
 * @param {string} name
 * @returns {string}
 * @example
 *  toPackageName("hello world") // hello.world
 */
var toPackageName = function (name) {
    var processed = _preprocess(name);
    // 将下划线替换为点，并转为小写
    return processed.replace(/_/g, '.').toLowerCase();
};
exports.toPackageName = toPackageName;
/**
 * @description 转换为中横线+小写字母命名法
 * @param {string} name
 * @returns {string}
 * @example
 *  toKebabCase("hello world") // hello-world
 */
var toKebabCase = function (name) {
    var processed = _preprocess(name);
    return processed.replace(/_/g, '-').toLowerCase();
};
exports.toKebabCase = toKebabCase;
/**
 * 转换为中横线+大写字母命名法
 * @param {string} name
 * @returns {string}
 * @example
 *  toUpperKebabCase("hello world") // HELLO-WORLD
 */
var toUpperKebabCase = function (name) {
    var processed = _preprocess(name);
    return processed.replace(/_/g, '-').toUpperCase();
};
exports.toUpperKebabCase = toUpperKebabCase;
