// const fs = require('fs').promises;
// const path = require('path');

// /**
//  * 读取CodeMirror主题目录下的所有文件名
//  * @returns {Promise<string[]>} 主题文件名数组（不含路径）
//  */
// async function getCodemirrorThemeFiles() {
//   try {
//     // 构建codemirror主题目录的绝对路径
//     const themeDir = path.resolve(
//       __dirname,
//       '..',
//       'node_modules',
//       'codemirror',
//       'theme'
//     );

//     // 读取目录下的所有文件
//     const files = await fs.readdir(themeDir);

//     // 过滤出.css文件，并且排除可能的目录
//     const cssFiles = files.filter(file => {
//       return file.endsWith('.css') && !file.startsWith('.');
//     });

//     // 去除文件名中的.css后缀
//     const themeNames = cssFiles.map(file => file.replace('.css', ''));

//     return themeNames;
//   } catch (error) {
//     console.error('读取CodeMirror主题文件失败：', error.message);
//     // 如果目录不存在或读取失败，返回空数组
//     return [];
//   }
// }

// // 使用示例
// async function main() {
//   const themes = await getCodemirrorThemeFiles();
//   themes
//     .map(theme => `import 'codemirror/theme/${theme}.css';`)
//     .forEach(it => console.log(it));
// }
// // 执行示例
// main();

// // const fs = require('fs').promises;
// // const path = require('path');

// // /**
// //  * 读取CodeMirror mode目录并生成对应的import语句
// //  * @returns {Promise<string[]>} 包含所有import语句的数组
// //  */
// // async function generateCodemirrorModeImports() {
// //   try {
// //     // 构建mode目录的绝对路径
// //     const modeDir = path.resolve(
// //       __dirname,
// //       '..',
// //       'node_modules',
// //       'codemirror',
// //       'mode'
// //     );

// //     // 读取mode目录下的所有条目
// //     const entries = await fs.readdir(modeDir, { withFileTypes: true });
// //     const importStatements = [];

// //     // 遍历所有条目
// //     for (const entry of entries) {
// //       // 只处理目录
// //       if (entry.isDirectory()) {
// //         const modeName = entry.name;
// //         const modeFilePath = path.join(modeDir, modeName, `${modeName}.js`);

// //         try {
// //           // 检查模式文件是否存在
// //           await fs.access(modeFilePath);
// //           // 生成import语句
// //           importStatements.push(`import 'codemirror/mode/${modeName}/${modeName}.js';`);
// //         } catch (err) {
// //           // 如果不存在对应的.js文件，尝试查找其他可能的文件
// //           const dirFiles = await fs.readdir(path.join(modeDir, modeName));
// //           const jsFiles = dirFiles.filter(file => file.endsWith('.js') && file !== `${modeName}.js`);

// //           // 导入目录下所有的.js文件
// //           for (const file of jsFiles) {
// //             importStatements.push(`import 'codemirror/mode/${modeName}/${file}';`);
// //           }
// //         }
// //       }
// //     }

// //     return importStatements;
// //   } catch (error) {
// //     console.error('读取CodeMirror mode目录失败：', error.message);
// //     return [];
// //   }
// // }

// // // 使用示例
// // async function main() {
// //   const imports = await generateCodemirrorModeImports();

// //   // 打印生成的import语句
// //   console.log('生成的CodeMirror模式导入语句：');
// //   imports.forEach(imp => console.log(imp));

// //   // 也可以将结果写入文件
// //   // await fs.writeFile('codemirror-modes-imports.js', imports.join('\n'));
// // }

// // // 执行示例
// // main();
