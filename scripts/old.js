// 引入vite导出的build方法，用他来创建
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
let version;

// 入口文件
const entryFile = path.resolve(__dirname, './entry.ts');
// 组件目录
const componentsDir = path.resolve(__dirname, '../packages');
// 输出目录
const outputDir = path.resolve(__dirname, '../build');
// tsconfig 文件路径
const tsconfigPath = path.resolve(__dirname, '../tsconfig.json');

// rollup 配置
const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    exports: 'named',
    globals: { vue: 'Vue' }
  }
};

// 创建基础配置
const createBaseConfig = () =>
  defineConfig({
    configFile: false,
    publicDir: false,
    build: {
      minify: false,
      sourcemap: false,
      rollupOptions
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      }
    },
    plugins: [vue(), vueJsx()]
  });

const createPackageJson = name => {
  const fileStr = `{
  "name":"${name ? name : 'min-sheep-ui'}",
  "version":"0.1.1",
  "main": "${name ? 'index.umd.js' : 'min-sheep-ui.umd.js'}",
  "module": "${name ? 'index.esm.js' : 'min-sheep-ui.esm.js'}",
  "types":"${name ? 'index.d.ts' : 'min-sheep-ui.d.ts'}",
  "author": "xp2000926",
  "github": "",
  "description": "羊村第一个组件库min-Sheep-UI，以后村里羊圈能不能建好就看它了！",
  "repository": {
    "type": "git",
    "url": "https://github.com/xp2000926/min-sheep-ui.git"
  },
  "keywords": ["vue3", "组件库", "tsx", "UI"],
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/xp2000926/min-sheep-ui/issues"
  }
}`;

  const targetPath = name
    ? path.resolve(outputDir, `${name}/package.json`)
    : path.resolve(outputDir, 'package.json');

  fsExtra.outputFileSync(targetPath, fileStr, 'utf-8');
};

// 单组件构建（不生成类型文件，后面单独处理）
const buildSingle = async (name, outDir) => {
  await build(
    defineConfig({
      ...createBaseConfig(),
      build: {
        ...createBaseConfig().build,
        lib: {
          entry: path.resolve(componentsDir, name),
          name: 'index',
          fileName: 'index',
          formats: ['es', 'umd', 'cjs']
        },
        outDir
      }
    })
  );
  createPackageJson(name);
};

// 全量构建（包含类型文件）
const buildAll = async () => {
  await build(
    defineConfig({
      ...createBaseConfig(),
      plugins: [
        vue(),
        vueJsx(),
        dts({
          entryRoot: componentsDir,
          outDir: outputDir,
          insertTypesEntry: true,
          copyDtsFiles: true,
          skipDiagnostics: true,
          tsconfigPath: tsconfigPath
        })
      ],
      build: {
        ...createBaseConfig().build,
        lib: {
          entry: entryFile,
          name: 'min-sheep-ui',
          fileName: 'min-sheep-ui',
          formats: ['es', 'umd', 'cjs']
        },
        outDir: outputDir
      }
    })
  );
  createPackageJson();
};

// 单独为每个组件生成类型文件
const generateSingleComponentTypes = async (name, outDir) => {
  const componentEntry = path.resolve(componentsDir, name);
  const componentOutDir = path.resolve(outDir, name);

  // 确保输出目录存在
  fsExtra.ensureDirSync(componentOutDir);

  await build(
    defineConfig({
      ...createBaseConfig(),
      plugins: [
        vue(),
        vueJsx(),
        dts({
          entryRoot: path.dirname(componentEntry), // 组件目录作为根目录
          outDir: componentOutDir, // 输出到组件目录
          insertTypesEntry: true,
          copyDtsFiles: true,
          skipDiagnostics: true,
          tsconfigPath: tsconfigPath,
          // 只包含当前组件的文件
          include: [path.resolve(componentEntry, '**/*')],
          exclude: ['**/*.test.*', '**/*.spec.*', '**/*.stories.*']
        })
      ],
      build: {
        ...createBaseConfig().build,
        lib: {
          entry: componentEntry,
          name: 'index',
          fileName: 'index',
          formats: ['es'] // 只生成 ESM 用于类型检查
        },
        outDir: componentOutDir,
        emptyOutDir: false // 不清理输出目录，保留之前的构建结果
      }
    })
  );
};

// eslint-disable-next-line complexity
const buildLib = async () => {
  // 版本号处理
  if (/^\d+(?:\.\d+){2}$/.test(process.argv.slice(2)[0])) {
    version = process.argv.slice(2)[0];
  } else if (
    process.argv.slice(2)[0] == '--v' ||
    process.argv.slice(2)[0] == '--version'
  ) {
    version = process.argv.slice(2)[1];
  } else if (!/^\d+(?:\.\d+){2}$/.test(version)) {
    let { version: res } = await inquirer.prompt({
      name: 'version',
      type: 'input',
      message: '（必填）请输入版本号 ，将用min-sheep-ui发布于使用：',
      validate: value => {
        if (value.trim() === '') return '版本号不能为空';
        if (!/^\d+(?:\.\d+){2}$/.test(value)) {
          return '版本号格式不正确，版本号一个为 0.0.0 这种格式';
        }
        return true;
      }
    });
    version = res;
  }

  console.log('🧹 清理输出目录...');
  if (fs.existsSync(outputDir)) {
    fs.rmdirSync(outputDir, { recursive: true });
  }

  // 验证 tsconfig 文件
  console.log('🔍 验证 TypeScript 配置...');
  if (!fs.existsSync(tsconfigPath)) {
    console.error(`❌ TypeScript 配置文件不存在: ${tsconfigPath}`);
    process.exit(1);
  }
  console.log(`✅ TypeScript 配置文件: ${tsconfigPath}`);

  console.log('📦 开始全量构建...');
  const fullBuildStart = Date.now();
  try {
    await buildAll();
    const fullBuildDuration = ((Date.now() - fullBuildStart) / 1000).toFixed(1);
    console.log(`✅ 全量构建完成 (${fullBuildDuration}s)`);
  } catch (error) {
    console.error('❌ 全量构建失败:', error.message);
    process.exit(1);
  }

  // 获取组件列表
  const componentDirs = fs.readdirSync(componentsDir).filter(name => {
    if (name === 'date-picker-copy') return false;
    const componentDir = path.resolve(componentsDir, name);
    return (
      fs.lstatSync(componentDir).isDirectory() &&
      fs.readdirSync(componentDir).includes('index.ts')
    );
  });

  console.log(`🚀 开始构建 ${componentDirs.length} 个组件...`);
  const componentsStart = Date.now();

  // 先构建所有组件的 JS 文件
  for (const name of componentDirs) {
    const startTime = Date.now();
    try {
      console.log(`📦 构建组件 JS: ${name}`);
      const finalDir = path.resolve(outputDir, name);
      await buildSingle(name, finalDir);

      // 特殊处理 tree 组件
      if (name === 'tree') {
        const src = path.resolve(
          componentsDir,
          'tree/src/composables/use-tree-type.ts'
        );
        const dest = path.resolve(finalDir, 'src/composables/use-tree-type.ts');
        fsExtra.ensureDirSync(path.dirname(dest));
        fsExtra.copySync(src, dest, { overwrite: true });
      }

      const duration = ((Date.now() - startTime) / 1000).toFixed(1);
      console.log(`✅ ${name} JS (${duration}s)`);
    } catch (err) {
      console.error(`❌ ${name} JS: ${err.message}`);
    }
  }

  console.log(`\n🔧 开始生成组件类型文件...`);
  const typesStart = Date.now();

  // 再为每个组件生成类型文件
  for (const name of componentDirs) {
    const startTime = Date.now();
    try {
      console.log(`📝 生成类型文件: ${name}`);
      await generateSingleComponentTypes(name, outputDir);

      const duration = ((Date.now() - startTime) / 1000).toFixed(1);
      console.log(`✅ ${name} 类型 (${duration}s)`);
    } catch (err) {
      console.error(`❌ ${name} 类型: ${err.message}`);
    }
  }

  const componentsDuration = ((Date.now() - componentsStart) / 1000).toFixed(1);
  const typesDuration = ((Date.now() - typesStart) / 1000).toFixed(1);

  console.log(`\n🎉 构建完成！`);
  console.log(`📈 组件构建耗时: ${componentsDuration}s`);
  console.log(`📈 类型生成耗时: ${typesDuration}s`);

  // 最终验证所有组件的类型文件
  console.log('\n📋 类型文件验证:');
  const missingTypes = [];
  for (const name of componentDirs) {
    const dtsPath = path.resolve(outputDir, name, 'index.d.ts');
    if (fs.existsSync(dtsPath)) {
      const content = fs.readFileSync(dtsPath, 'utf-8');
      if (content.trim() === 'export {};') {
        console.log(`⚠️  build/${name}/index.d.ts - 内容为空`);
        missingTypes.push(name);
      } else {
        console.log(`✅ build/${name}/index.d.ts`);
      }
    } else {
      console.log(`❌ build/${name}/index.d.ts - 缺失`);
      missingTypes.push(name);
    }
  }

  if (missingTypes.length > 0) {
    console.log(`\n⚠️  以下组件类型文件有问题: ${missingTypes.join(', ')}`);
    process.exit(1);
  } else {
    console.log('\n🎉 所有组件类型文件生成成功！');
  }
};

buildLib();
