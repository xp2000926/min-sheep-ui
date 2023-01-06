<h1 align="center">min-sheep-ui</h1>

[![](https://data.jsdelivr.com/v1/package/npm/min-sheep-ui/badge)](https://www.jsdelivr.com/package/npm/min-sheep-ui)
[![](https://img.shields.io/npm/v/min-sheep-ui?color=c95f8b&amp;label=NPM)](https://www.npmjs.com/package/min-sheep-ui)

## csdn

```bash
https://cdn.jsdelivr.net/npm/min-sheep-ui/min-sheep-ui.umd.js 
https://cdn.jsdelivr.net/npm/min-sheep-ui/style.css
```

## Install
```bash
npm i min-sheep-ui
```


## Quick Start

```js
import Vue from 'vue'
import App from './App.vue'
import MinSheepUI from 'min-sheep-ui'
import 'min-sheep-ui/style.css'
createApp(App).use(MinSheepUI).mount("#app")
```
```json
"scripts": {
    "dev": "vite --host", // vite 运行
    "dist": "vue-tsc --noEmit && vite build", //vite 打包
    "preview": "vite preview", // 暂未研究
    "clear-dist": "rimraf dist",//删除 dist
    "clear-build": "rimraf build",//删除 build
    "clear-node_modules": "rimraf node_modules", //删除 node_modules
    "lint": "eslint . --ext .js,.ts,.tsx,.vue",//  eslint
    "prepare": "husky install", //提交 husky 钩子初始化
    "docs:dev": "vitepress dev docs --host",//文档运行
    "docs:build": "vitepress build docs",//文档打包
    "docs:serve": "vitepress serve docs",//运行打包后的dist
    "test": "vitest",//单元测试
    "build": "node ./scripts/build.js",// ui 库打包
    "cli": "cd cli && npm run cli" // ui库目录创建
  },
```


>[Naive UI](https://www.naiveui.com/zh-CN/dark/docs/installation)
>
>[AT-UI](https://at-ui.github.io/at-ui/#/zh)
>
>[Vue-Blu](https://chenz24.github.io/vue-blu/#/)
>
>[vue-beauty](https://fe-driver.github.io/vue-beauty/#/components/button)
>
>[element UI](https://element.eleme.cn/#/zh-CN)
>
>[Element Plus](https://element-plus.gitee.io/zh-CN/)
>
>[layui](https://layui.itze.cn/)
>
> [ant-design-vue UI](https://www.antdv.com/components/overview-cn)
>
> [formily-ui](https://antd.formilyjs.org/zh-CN/components/upload)