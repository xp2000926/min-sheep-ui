//引入vite导出的build方法，用它来创建
const path = require('path')
const { defineConfig, build } = require('vite')
const vue = require('@vitejs/plugin-vue')
const vueJsx = require('@vitejs/plugin-vue-jsx')
const fsExtra = require('fs-extra')
// 基础配置
const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [vue(), vueJsx()]
})
// 入口文件
const entryFile = path.resolve(__dirname, './entry.ts')
// 输出目录
const outputDir = path.resolve(__dirname, '../build')

// rollup 配置
const rollupOptions = {
  // 外置
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue'
    }
  }
}
// 生成 package.json
const createPackageJson = () => {
  // 预设
  const fileStr = `{
    "name": "min-sheep-ui",
    "version": "0.0.0",
    "main": "min-sheep-ui.umd.js",
    "module": "min-sheep-ui.mjs",
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
  }`

  fsExtra.outputFile(path.resolve(outputDir, 'package.json'), fileStr, 'utf-8')
}
//全量构建
const buildAll = async () => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: entryFile,
          name: 'min-sheep-ui',
          fileName: 'min-sheep-ui',
          formats: ['es', 'umd']
        },
        outDir: outputDir
      }
    })
  )
}

// 执行创建
const buildLib = async () => {
  await buildAll()
  // 创建package.json
  createPackageJson()
}

buildLib()
