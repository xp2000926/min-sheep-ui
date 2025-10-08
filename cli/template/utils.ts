export const upperFirst = (str: string) => {
  return str[0].toUpperCase() + str.slice(1);
};
const _preprocess = (name: string) => {
  if (!name) return '';

  // 替换中横线为下划线
  let processed = name.replace(/-/g, '_');

  // 处理驼峰命名和帕斯卡命名，在大写字母前添加下划线
  const result = [];
  for (let i = 0; i < processed.length; i++) {
    const char = processed[i];
    if (char === char.toUpperCase() && char !== char.toLowerCase()) {
      // 如果是大写字母且不是第一个字符且前一个字符不是下划线，则添加下划线
      if (i > 0 && processed[i - 1] !== '_') {
        result.push('_');
      }
      result.push(char);
    } else {
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
export const toCamelCase = (name: string) => {
  const processed = _preprocess(name);
  const words = processed.split('_');
  if (words.length === 0) return '';

  return (
    words[0].toLowerCase() +
    words
      .slice(1)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join('')
  );
};
/**
 * @description 转换为帕斯卡命名法（每个单词首字母大写，无分隔符）
 * @param {string} name
 * @returns {string}
 * @example
 *  toPascalCase("hello world") // HelloWorld
 */
export const toPascalCase = (name: string) => {
  const processed = _preprocess(name);
  const words = processed.split('_');

  return words
    .filter(word => word)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
};
/**
 * @description 转换为下划线+小写字母命名法
 * @param {string} name
 * @returns
 * @example
 *  toSnakeCase("hello world") // hello_world
 */
export const toSnakeCase = (name: string) => {
  const processed = _preprocess(name);
  return processed.toLowerCase();
};

/**
 * @description  转换为下划线+大写字母命名法
 * @param {string} name
 * @returns {string}
 * @example
 *  toUpperSnakeCase("hello world") // HELLO_WORLD
 */
export const toUpperSnakeCase = (name: string) => {
  const processed = _preprocess(name);
  return processed.toUpperCase();
};

/**
 * @description 转换为包名格式（点分隔，全小写）
 * @param {string} name
 * @returns {string}
 * @example
 *  toPackageName("hello world") // hello.world
 */
export const toPackageName = (name: string) => {
  const processed = _preprocess(name);
  // 将下划线替换为点，并转为小写
  return processed.replace(/_/g, '.').toLowerCase();
};

/**
 * @description 转换为中横线+小写字母命名法
 * @param {string} name
 * @returns {string}
 * @example
 *  toKebabCase("hello world") // hello-world
 */
export const toKebabCase = (name: string) => {
  const processed = _preprocess(name);
  return processed.replace(/_/g, '-').toLowerCase();
};

/**
 * 转换为中横线+大写字母命名法
 * @param {string} name
 * @returns {string}
 * @example
 *  toUpperKebabCase("hello world") // HELLO-WORLD
 */
export const toUpperKebabCase = (name: string) => {
  const processed = _preprocess(name);
  return processed.replace(/_/g, '-').toUpperCase();
};
