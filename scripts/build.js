// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defineConfig, build } = require('vite');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const vue = require('@vitejs/plugin-vue');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const vueJsx = require('@vitejs/plugin-vue-jsx');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { default: dts } = require('vite-plugin-dts');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fsExtra = require('fs-extra');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const inquirer = require('inquirer');

const pathConfig = {
  entryFile: path.resolve(__dirname, './entry.ts'),
  componentsDir: path.resolve(__dirname, '../packages'),
  outputDir: path.resolve(__dirname, '../build'),
  tsconfigPath: path.resolve(__dirname, '../tsconfig.json')
};

const calculateFolderSize = folderPath => {
  let totalSize = 0;
  try {
    const files = fs.readdirSync(folderPath);
    for (const file of files) {
      const filePath = path.join(folderPath, file);
      const stats = fs.statSync(filePath);
      totalSize += stats.isFile() ? stats.size : calculateFolderSize(filePath);
    }
  } catch (error) {
    console.error(`❌ 计算目录大小出错: ${error.message}`);
  }
  return totalSize;
};

const formatFileSize = bytes => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

// const checkModuleExists = moduleName => {
//   try {
//     require.resolve(moduleName);
//     return true;
//   } catch (error) {
//     try {
//       const modulePath = path.resolve(
//         process.cwd(),
//         'node_modules',
//         moduleName
//       );
//       return fs.existsSync(modulePath);
//     } catch (e) {
//       return false;
//     }
//   }
// };

// const getModuleEntryPath = moduleName => {
//   try {
//     return require.resolve(moduleName);
//   } catch (error) {
//     try {
//       const packageJsonPath = require.resolve(`${moduleName}/package.json`);
//       // eslint-disable-next-line @typescript-eslint/no-var-requires
//       const packageJson = require(packageJsonPath);

//       if (moduleName === 'monaco-editor') {
//         const possibleEntries = [
//           packageJson.module,
//           packageJson.main,
//           'esm/vs/editor/editor.main.js',
//           'esm/vs/editor/editor.api.js',
//           'min/vs/editor/editor.main.js'
//         ];

//         for (const entry of possibleEntries) {
//           if (!entry) continue;
//           try {
//             return require.resolve(`${moduleName}/${entry}`);
//           } catch (e) {
//             continue;
//           }
//         }
//       } else {
//         const mainEntry = packageJson.module || packageJson.main || 'index.js';
//         return require.resolve(`${moduleName}/${mainEntry}`);
//       }
//     } catch (packageError) {}

//     const possibleEntries = [
//       'index.js',
//       'src/index.js',
//       'dist/index.js',
//       'lib/index.js',
//       'index.mjs',
//       'src/index.ts',
//       'index.vue',
//       'esm/vs/editor/editor.main.js',
//       'min/vs/editor/editor.main.js'
//     ];

//     for (const entry of possibleEntries) {
//       try {
//         return require.resolve(`${moduleName}/${entry}`);
//       } catch (err) {
//         continue;
//       }
//     }

//     throw new Error(`无法找到模块 ${moduleName} 的入口文件`);
//   }
// };

// const getExternalDepsConfig = () => {
//   const deps = {};

//   if (checkModuleExists('monaco-editor')) {
//     try {
//       const entryPath = getModuleEntryPath('monaco-editor');
//       deps['monaco-editor'] = {
//         entry: entryPath,
//         outputDir: path.resolve(pathConfig.outputDir, 'monaco-editor'),
//         packageName: 'monaco-editor',
//         globals: { 'monaco-editor': 'monaco' }
//       };
//     } catch (error) {
//       console.log(`⚠️ 无法获取 monaco-editor 入口文件: ${error.message}\n`);
//     }
//   }

//   if (checkModuleExists('@icon-park/svg')) {
//     try {
//       const entryPath = getModuleEntryPath('@icon-park/svg');
//       deps['@icon-park/svg'] = {
//         entry: entryPath,
//         outputDir: path.resolve(pathConfig.outputDir, '@icon-park/svg'),
//         packageName: '@icon-park/svg',
//         globals: { '@icon-park/svg': '@icon-park/svg' }
//       };
//     } catch (error) {
//       console.log(`⚠️ 无法获取 @icon-park/svg 入口文件: ${error.message}\n`);
//     }
//   }

//   return deps;
// };

// const buildExternalDependency = async (depName, config, version) => {
//   console.log(`\n📦 构建外部依赖: ${depName}`);
//   const startTime = Date.now();

//   fsExtra.ensureDirSync(config.outputDir);

//   try {
//     await build(
//       defineConfig({
//         configFile: false,
//         publicDir: false,
//         build: {
//           minify: false,
//           sourcemap: false,
//           lib: {
//             entry: config.entry,
//             name: config.packageName.replace(/[@/-]/g, '_'),
//             fileName: 'index',
//             formats: ['es', 'umd', 'cjs']
//           },
//           outDir: config.outputDir,
//           rollupOptions: {
//             external: [],
//             output: {
//               exports: 'named',
//               globals: config.globals || {}
//             }
//           }
//         },
//         plugins: [vue(), vueJsx()]
//       })
//     );

//     const typeContent = `declare module '${config.packageName}' {
//   export * from '${config.packageName}';
// }`;
//     fsExtra.outputFileSync(
//       path.resolve(config.outputDir, 'index.d.ts'),
//       typeContent,
//       'utf-8'
//     );

//     const packageJsonContent = {
//       name: config.packageName,
//       version: version,
//       main: 'index.umd.js',
//       module: 'index.esm.js',
//       unpkg: 'index.umd.js',
//       types: 'index.d.ts',
//       author: 'xp2000926',
//       description: `打包后的 ${config.packageName} 依赖`,
//       license: 'ISC'
//     };

//     fsExtra.outputFileSync(
//       path.resolve(config.outputDir, 'package.json'),
//       JSON.stringify(packageJsonContent, null, 2),
//       'utf-8'
//     );

//     const depSize = calculateFolderSize(config.outputDir);
//     const duration = ((Date.now() - startTime) / 1000).toFixed(1);
//     console.log(
//       `✅ ${depName} 构建完成 (${duration}s) - 体积: ${formatFileSize(depSize)}\n`
//     );
//     return depSize;
//   } catch (error) {
//     console.error(`❌ ${depName} 构建失败: ${error.message}\n`);

//     const fallbackContent = `console.warn('${depName} 依赖包构建失败，请手动处理');`;
//     try {
//       fsExtra.outputFileSync(
//         path.resolve(config.outputDir, 'index.umd.js'),
//         fallbackContent,
//         'utf-8'
//       );
//       fsExtra.outputFileSync(
//         path.resolve(config.outputDir, 'index.esm.js'),
//         fallbackContent,
//         'utf-8'
//       );
//       fsExtra.outputFileSync(
//         path.resolve(config.outputDir, 'index.d.ts'),
//         `declare module '${config.packageName}';`,
//         'utf-8'
//       );

//       const fallbackPackageJson = {
//         name: config.packageName,
//         version: version || '0.1.1',
//         main: 'index.umd.js',
//         unpkg: 'index.umd.js',
//         module: 'index.esm.js',
//         types: '.ndex.d.ts',
//         author: 'xp2000926',
//         description: `打包后的 ${config.packageName} 依赖（构建失败回退）`,
//         license: 'ISC'
//       };

//       fsExtra.outputFileSync(
//         path.resolve(config.outputDir, 'package.json'),
//         JSON.stringify(fallbackPackageJson, null, 2),
//         'utf-8'
//       );

//       console.log(`⚠️ 已为 ${depName} 创建回退文件\n`);
//     } catch (fallbackError) {
//       console.error(`❌ 创建回退文件失败: ${fallbackError.message}\n`);
//     }

//     return 0;
//   }
// };

// const buildAllExternalDeps = async version => {
//   const externalDeps = getExternalDepsConfig();
//   const depNames = Object.keys(externalDeps);

//   if (depNames.length === 0) {
//     console.log('ℹ️ 没有检测到需要单独打包的外部依赖\n');
//     return {};
//   }

//   console.log(`🚀 开始构建 ${depNames.length} 个外部依赖...\n`);
//   const startTime = Date.now();
//   const depSizes = {};

//   for (const [depName, config] of Object.entries(externalDeps)) {
//     try {
//       depSizes[depName] = await buildExternalDependency(
//         depName,
//         config,
//         version
//       );
//     } catch (error) {
//       console.error(`❌ 依赖 ${depName} 构建失败，跳过后续处理\n`);
//       depSizes[depName] = 0;
//     }
//   }

//   const duration = ((Date.now() - startTime) / 1000).toFixed(1);
//   console.log(`✅ 外部依赖构建完成 (总耗时: ${duration}s)\n`);
//   return depSizes;
// };

// const getRollupOptions = (isExternalDeps = false) => {
//   const external = ['vue', 'vue-router'];
//   if (!isExternalDeps) {
//     const externalDeps = getExternalDepsConfig();
//     external.push(...Object.keys(externalDeps));
//   }
//   return {
//     external,
//     output: {
//       exports: 'named',
//       globals: {
//         vue: 'Vue',
//         ...(isExternalDeps
//           ? {}
//           : {
//               'monaco-editor': 'monaco',
//               '@icon-park/svg': '@icon-park/svg'
//             })
//       }
//     }
//   };
// };

const getRollupOptions = (isExternalDeps = false) => {
  // 直接将 monaco-editor 和 @icon-park/svg 加入外部依赖列表
  const external = ['vue', 'vue-router', 'monaco-editor', '@icon-park/svg'];
  return {
    external,
    output: {
      exports: 'named',
      globals: {
        vue: 'Vue',
        // 保持 globals 配置不变，确保运行时能正确找到全局变量
        'monaco-editor': 'monaco',
        '@icon-park/svg': '@icon-park/svg'
      }
    }
  };
};

const createBaseConfig = (isExternalDeps = false) =>
  defineConfig({
    configFile: false,
    publicDir: false,
    build: {
      minify: false,
      sourcemap: false,
      rollupOptions: getRollupOptions(isExternalDeps)
    },
    css: {
      preprocessorOptions: {
        scss: { api: 'modern-compiler' }
      }
    },
    plugins: [vue(), vueJsx()]
  });

const createPackageJson = (name, version, isComponent = false) => {
  const baseConfig = {
    name: name || 'min-sheep-ui',
    version: version || '0.1.1',
    homepage: isComponent
      ? `https://min-sheep-ui.vercel.app/components/${name}/`
      : 'https://min-sheep-ui.vercel.app/',
    main: isComponent ? 'index.umd.js' : 'min-sheep-ui.umd.js',
    module: isComponent ? 'index.esm.js' : 'min-sheep-ui.esm.js',
    unpkg: isComponent ? 'index.umd.js' : 'min-sheep-ui.umd.js',
    types: isComponent ? 'index.d.ts' : 'min-sheep-ui.d.ts',
    author: 'xp2000926',
    description:
      '羊村第一个组件库min-Sheep-UI，以后村里羊圈能不能建好就看它了！',
    repository: {
      type: 'git',
      url: 'https://github.com/xp2000926/min-sheep-ui.git'
    },
    keywords: ['vue3', '组件库', 'tsx', 'UI'],
    license: 'ISC',
    bugs: { url: 'https://github.com/xp2000926/min-sheep-ui/issues' },
    dependencies: {
      '@icon-park/svg': '^1.4.2',
      'monaco-editor': '^0.53.0'
    }
  };

  const targetPath = isComponent
    ? path.resolve(pathConfig.outputDir, `${name}/package.json`)
    : path.resolve(pathConfig.outputDir, 'package.json');

  fsExtra.outputFileSync(
    targetPath,
    JSON.stringify(baseConfig, null, 2),
    'utf-8'
  );
};

const buildAll = async version => {
  console.log('\n📦 开始全量构建...');
  const startTime = Date.now();

  try {
    await build(
      defineConfig({
        ...createBaseConfig(false),
        plugins: [
          vue(),
          vueJsx(),
          dts({
            entryRoot: pathConfig.componentsDir,
            outDir: pathConfig.outputDir,
            insertTypesEntry: true,
            copyDtsFiles: true,
            skipDiagnostics: true,
            tsconfigPath: pathConfig.tsconfigPath
          })
        ],
        build: {
          ...createBaseConfig(false).build,
          lib: {
            entry: pathConfig.entryFile,
            name: 'min-sheep-ui',
            fileName: 'min-sheep-ui',
            formats: ['es', 'umd', 'cjs']
          },
          outDir: pathConfig.outputDir,
          emptyOutDir: false // 不清理输出目录
        }
      })
    );

    createPackageJson(null, version, false);

    const totalSize = calculateFolderSize(pathConfig.outputDir);
    const duration = ((Date.now() - startTime) / 1000).toFixed(1);
    console.log(
      `✅ 全量构建完成 (${duration}s) - 体积: ${formatFileSize(totalSize)}\n`
    );
    return totalSize;
  } catch (error) {
    console.error('❌ 全量构建失败:', error.message);
    process.exit(1);
  }
};

const getComponentList = () => {
  return fs.readdirSync(pathConfig.componentsDir).filter(name => {
    if (name === 'date-picker-copy') return false;
    const componentDir = path.resolve(pathConfig.componentsDir, name);
    return (
      fs.lstatSync(componentDir).isDirectory() &&
      fs.readdirSync(componentDir).includes('index.ts')
    );
  });
};

const buildSingleComponent = async (name, version) => {
  const startTime = Date.now();
  const outDir = path.resolve(pathConfig.outputDir, name);

  try {
    await build(
      defineConfig({
        ...createBaseConfig(false),
        build: {
          ...createBaseConfig(false).build,
          lib: {
            entry: path.resolve(pathConfig.componentsDir, name),
            name: 'index',
            fileName: 'index',
            formats: ['es', 'umd', 'cjs']
          },
          outDir,
          emptyOutDir: false // 不清理输出目录
        }
      })
    );

    createPackageJson(name, version, true);

    if (name === 'tree') {
      const src = path.resolve(
        pathConfig.componentsDir,
        'tree/src/composables/use-tree-type.ts'
      );
      const dest = path.resolve(outDir, 'src/composables/use-tree-type.ts');
      fsExtra.ensureDirSync(path.dirname(dest));
      fsExtra.copySync(src, dest, { overwrite: true });
    }

    const componentSize = calculateFolderSize(outDir);
    const duration = ((Date.now() - startTime) / 1000).toFixed(1);
    console.log(
      `✅ ${name} JS (${duration}s) - 体积: ${formatFileSize(componentSize)}\n`
    );
    return componentSize;
  } catch (err) {
    console.error(`❌ ${name} JS 构建失败: ${err.message}\n`);
    return 0;
  }
};

const buildAllComponents = async version => {
  const componentList = getComponentList();
  if (componentList.length === 0) {
    console.log('ℹ️ 未检测到可构建的组件\n');
    return {};
  }

  console.log(`🚀 开始构建 ${componentList.length} 个组件...\n`);
  const startTime = Date.now();
  const componentSizes = {};

  for (const name of componentList) {
    console.log(`📦 构建组件 JS: ${name}`);
    componentSizes[name] = await buildSingleComponent(name, version);
  }

  const duration = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log(`✅ 所有组件 JS 构建完成 (总耗时: ${duration}s)\n`);
  return componentSizes;
};

const generateSingleComponentType = async name => {
  const startTime = Date.now();
  const componentEntry = path.resolve(pathConfig.componentsDir, name);
  const componentOutDir = path.resolve(pathConfig.outputDir, name);
  fsExtra.ensureDirSync(componentOutDir);

  try {
    await build(
      defineConfig({
        ...createBaseConfig(false),
        plugins: [
          vue(),
          vueJsx(),
          dts({
            entryRoot: path.dirname(componentEntry),
            outDir: componentOutDir,
            insertTypesEntry: true,
            copyDtsFiles: true,
            skipDiagnostics: true,
            tsconfigPath: pathConfig.tsconfigPath,
            include: [path.resolve(componentEntry, '**/*')],
            exclude: ['**/*.test.*', '**/*.spec.*', '**/*.stories.*']
          })
        ],
        build: {
          ...createBaseConfig(false).build,
          lib: {
            entry: componentEntry,
            name: 'index',
            fileName: 'index',
            formats: ['es', 'umd', 'cjs']
          },
          outDir: componentOutDir,
          emptyOutDir: false // 不清理输出目录
        }
      })
    );

    const totalSize = calculateFolderSize(componentOutDir);
    const duration = ((Date.now() - startTime) / 1000).toFixed(1);
    console.log(
      `✅ ${name} 类型 (${duration}s) - 包含类型总大小: ${formatFileSize(totalSize)}\n`
    );
    return totalSize;
  } catch (err) {
    console.error(`❌ ${name} 类型生成失败: ${err.message}\n`);
    return 0;
  }
};

const generateAllComponentTypes = async componentList => {
  if (componentList.length === 0) return {};

  console.log(`\n🔧 开始生成 ${componentList.length} 个组件的类型文件...\n`);
  const startTime = Date.now();
  const componentSizes = {};

  for (const name of componentList) {
    console.log(`📝 生成类型文件: ${name}`);
    componentSizes[name] = await generateSingleComponentType(name);
  }

  const duration = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log(`✅ 所有组件类型生成完成 (总耗时: ${duration}s)\n`);
  return componentSizes;
};

const createVersionPrompt = () => {
  // 版本号验证正则表达式
  const versionRegex = /^\d+\.\d+\.\d+(?:-(alpha|beta|rc|csp)(?:\.\d+)?)?$/;

  // 构建提示信息
  const message = '📌 （必填）请输入版本号，遵循语义化版本规范：';
  const description = `------------------------------------------------
支持格式：
• 正式版：0.0.0
• 预发布版：0.0.0-[alpha|beta|rc|csp][.序号]（如1.0.0-beta.3）

版本标签说明：
• 🔍 alpha：最早期开发版本，内部测试用，bug较多
• 🔍 beta：功能基本完成，公开测试阶段，较alpha稳定
• 🔍 rc：发布候选版本，功能冻结，仅修复bug，接近正式版
• 🔍 csp：特定场景自定义标签，可能表示内容安全策略兼容版

稳定性排序：alpha < beta < rc < 正式版
------------------------------------------------`;

  // 返回inquirer配置对象
  return {
    name: 'version',
    type: 'input',
    message: `${message}\n${description}:`,
    validate: value => {
      if (value.trim() === '') {
        return '❌ 版本号不能为空';
      }
      if (!versionRegex.test(value)) {
        return `❌ 版本号格式不正确，支持：
• 正式版：0.0.0
• 预发布版：0.0.0-alpha、0.0.0-beta.1等`;
      }
      return true;
    }
  };
};

// 使用示例
const handleVersionInput = async () => {
  const args = process.argv.slice(2);
  const versionRegex = /^\d+\.\d+\.\d+(?:-(alpha|beta|rc|csp)(?:\.\d+)?)?$/;

  // 处理命令行参数
  if (versionRegex.test(args[0])) return args[0];

  if (
    (args[0] === '--v' || args[0] === '--version') &&
    versionRegex.test(args[1])
  ) {
    return args[1];
  }

  // 使用高阶函数生成的配置
  const { version } = await inquirer.prompt(createVersionPrompt());
  return version;
};

const cleanOutputDir = () => {
  console.log('\n🧹 清理输出目录...');
  if (fs.existsSync(pathConfig.outputDir)) {
    fs.rmSync(pathConfig.outputDir, { recursive: true, force: true });
    console.log('🗑️  已清空输出目录\n');
  }
  // 重新创建输出目录
  fsExtra.ensureDirSync(pathConfig.outputDir);
};

const validateTsConfig = () => {
  console.log('\n🔍 验证 TypeScript 配置...');
  if (fs.existsSync(pathConfig.tsconfigPath)) {
    console.log(`✅ 找到 TS 配置文件: ${pathConfig.tsconfigPath}\n`);
    return true;
  }
  console.error(`❌ 未找到 TS 配置文件: ${pathConfig.tsconfigPath}\n`);
  process.exit(1);
};

const validateComponentTypeFiles = componentList => {
  console.log('\n📋 类型文件验证:');
  const missingTypes = [];

  for (const name of componentList) {
    const dtsPath = path.resolve(pathConfig.outputDir, name, 'index.d.ts');
    if (!fs.existsSync(dtsPath)) {
      console.log(`❌ build/${name}/index.d.ts - 缺失`);
      missingTypes.push(name);
      continue;
    }

    const content = fs.readFileSync(dtsPath, 'utf-8');
    if (content.trim() === 'export {};') {
      console.log(`⚠️ build/${name}/index.d.ts - 内容为空`);
      missingTypes.push(name);
    } else {
      console.log(`✅ build/${name}/index.d.ts`);
    }
  }

  if (missingTypes.length > 0) {
    console.log(`\n⚠️ 以下组件类型文件有问题: ${missingTypes.join(', ')}\n`);
    process.exit(1);
  }
  console.log('\n✅ 所有组件类型文件验证通过！\n');
};

const printBuildSummary = (
  version,
  // depSizes,
  componentSizes,
  totalBuildSize
) => {
  console.log(`🎉 构建完成！版本号: ${version}`);
  console.log(`📊 构建产物总大小: ${formatFileSize(totalBuildSize)}\n`);

  // if (Object.keys(depSizes).length > 0) {
  //   console.log(`📦 外部依赖体积详情:`);
  //   Object.entries(depSizes).forEach(([depName, size]) => {
  //     console.log(`  - ${depName}: ${formatFileSize(size)}`);
  //   });
  //   console.log('');
  // }

  if (Object.keys(componentSizes).length > 0) {
    console.log(`📋 组件体积详情（按大小排序）:`);
    console.log('┌' + '─'.repeat(40) + '┐');

    const sortedComponents = Object.entries(componentSizes).sort(
      (a, b) => b[1] - a[1]
    );

    // 按体积大小分类
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const largeComponents = sortedComponents.filter(
      ([_, size]) => size > 80 * 1024
    ); // > 80KB
    const mediumComponents = sortedComponents.filter(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ([_, size]) => size > 30 * 1024 && size <= 80 * 1024
    ); // 30KB - 80KB
    const smallComponents = sortedComponents.filter(
      ([_, size]) => size <= 30 * 1024
    ); // <= 30KB

    if (largeComponents.length > 0) {
      console.log(`│ ${'🔴 大型组件 (> 80KB)'.padEnd(38)} │`);
      console.log('├' + '─'.repeat(40) + '┤');
      largeComponents.forEach(([name, size]) => {
        const sizeStr = formatFileSize(size).padStart(12);
        const nameStr = name.padEnd(25);
        console.log(`│ ${nameStr} ${sizeStr} │`);
      });
      console.log('├' + '─'.repeat(40) + '┤');
    }

    if (mediumComponents.length > 0) {
      console.log(`│ ${'🟡 中型组件 (30KB - 80KB)'.padEnd(38)} │`);
      console.log('├' + '─'.repeat(40) + '┤');
      mediumComponents.forEach(([name, size]) => {
        const sizeStr = formatFileSize(size).padStart(12);
        const nameStr = name.padEnd(25);
        console.log(`│ ${nameStr} ${sizeStr} │`);
      });
      console.log('├' + '─'.repeat(40) + '┤');
    }

    if (smallComponents.length > 0) {
      console.log(`│ ${'🟢 小型组件 (≤ 30KB)'.padEnd(38)} │`);
      console.log('├' + '─'.repeat(40) + '┤');
      smallComponents.forEach(([name, size]) => {
        const sizeStr = formatFileSize(size).padStart(12);
        const nameStr = name.padEnd(25);
        console.log(`│ ${nameStr} ${sizeStr} │`);
      });
    }

    console.log('└' + '─'.repeat(40) + '┘');

    // 统计信息
    console.log(`\n📈 组件统计:`);
    console.log(`   🔴 大型组件: ${largeComponents.length} 个`);
    console.log(`   🟡 中型组件: ${mediumComponents.length} 个`);
    console.log(`   🟢 小型组件: ${smallComponents.length} 个`);
    console.log(`   📦 总计: ${sortedComponents.length} 个组件`);

    // 体积最大的前3个组件
    if (sortedComponents.length > 0) {
      console.log(`\n🏆 体积最大的组件:`);
      sortedComponents.slice(0, 3).forEach(([name, size], index) => {
        const medals = ['🥇', '🥈', '🥉'];
        console.log(`   ${medals[index]} ${name}: ${formatFileSize(size)}`);
      });
    }
  }
};

const buildLib = async () => {
  try {
    console.log('🚀 开始构建流程...\n');

    const version = await handleVersionInput();
    console.log(`\n📝 使用版本号: ${version}\n`);

    const totalStartTime = Date.now();
    const timeStats = {};

    cleanOutputDir();
    validateTsConfig();

    // 先构建外部依赖
    const externalDepsStart = Date.now();
    // const depSizes = await buildAllExternalDeps(version);
    timeStats.externalDeps = Date.now() - externalDepsStart;

    // 再构建全量包
    const buildAllStart = Date.now();
    await buildAll(version);
    timeStats.buildAll = Date.now() - buildAllStart;

    // 最后构建组件
    const componentList = getComponentList();

    const buildComponentsStart = Date.now();
    const componentSizes = await buildAllComponents(version);
    timeStats.buildComponents = Date.now() - buildComponentsStart;

    const generateTypesStart = Date.now();
    const componentSizesWithTypes =
      await generateAllComponentTypes(componentList);
    timeStats.generateTypes = Date.now() - generateTypesStart;

    const totalBuildSize = calculateFolderSize(pathConfig.outputDir);
    validateComponentTypeFiles(componentList);

    // 原有的打印总结保持不变
    printBuildSummary(
      version,
      // depSizes,
      componentSizesWithTypes,
      totalBuildSize
    );

    // 在最后统一输出耗时统计
    const totalDuration = ((Date.now() - totalStartTime) / 1000).toFixed(1);
    console.log(`📈 构建耗时统计:`);
    console.log(
      `├── 外部依赖构建: ${(timeStats.externalDeps / 1000).toFixed(1)}s`
    );
    console.log(`├── 全量包构建: ${(timeStats.buildAll / 1000).toFixed(1)}s`);
    console.log(
      `├── 组件JS构建: ${(timeStats.buildComponents / 1000).toFixed(1)}s`
    );
    console.log(
      `├── 类型文件生成: ${(timeStats.generateTypes / 1000).toFixed(1)}s`
    );
    console.log(`└── 总耗时: ${totalDuration}s\n`);

    console.log('🎉 所有构建任务全部完成！\n');
  } catch (error) {
    console.error(`\n❌ 构建流程异常终止: ${error.message}\n`);
    process.exit(1);
  }
};

buildLib();
