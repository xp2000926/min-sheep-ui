<h1 align="center">min-sheep-ui</h1>

[![](https://data.jsdelivr.com/v1/package/npm/min-sheep-ui/badge)](https://www.jsdelivr.com/package/npm/min-sheep-ui) [![](https://img.shields.io/npm/v/min-sheep-ui?color=c95f8b&label=NPM)](https://www.npmjs.com/package/min-sheep-ui) [![](https://flat.badgen.net/bundlephobia/minzip/min-sheep-ui)](https://bundlephobia.com/result?p=min-sheep-ui)

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
createApp(App).use(MinSheepUI).mount('#app')
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

## 参考 UI 库

> [Naive UI](https://www.naiveui.com/zh-CN/dark/docs/installation)
>
> [AT-UI](https://at-ui.github.io/at-ui/#/zh)
>
> [Vue-Blu](https://chenz24.github.io/vue-blu/#/)
>
> [vue-beauty](https://fe-driver.github.io/vue-beauty/#/components/button)
>
> [element UI](https://element.eleme.cn/#/zh-CN)
>
> [Element Plus](https://element-plus.gitee.io/zh-CN/)
>
> [layUI](https://layui.itze.cn/)
>
> [ant-design-vue UI](https://www.antdv.com/components/overview-cn)
>
> [formily UI](https://antd.formilyjs.org/zh-CN/components/upload)
>
> [formkit UI](https://formkit.com/)

## 准备开发 UI 的基本目录

```md
const sidebar = [ { text: '快速开始', items: [ { text: '安装', link: '/guide/install' } <!-- /guide/install.md --> ] }, { text: '通用', items: [ { text: 'Button 按钮', link: '/components/button/' }, <!--完成基本构建，目前可以使用，但后续要补充--> { text: 'Icon 图标', link: '/components/icon/' }, <!--完成基本构建，目前可以使用，但后续要补充--> { text: 'Link 文字链接', link: '/components/link/' }, ] }, { text: '导航', items: [ { text: 'Tabs 标签页', link: '/components/tabs/' },<!--完成基本构建，目前可以使用，但后续要补充--> { text: 'Anchor 锚点', link: '/components/anchor/' }, { text: 'Steps 步骤条', link: '/components/steps/' }, { text: 'Menu 导航菜单', link: '/components/menu/' }, { text: 'Dropdown 下拉菜单', link: '/components/dropdown/' }, { text: 'Breadcrumb 面包屑', link: '/components/breadcrumb/' }, { text: 'Affix 固钉', link: '/components/affix/' }, ] }, { text: '反馈', items: [ { text: 'Modal 对话框', link: '/components/modal/' },<!--完成基本构建，目前可以使用，但后续要补充--> { text: 'Drawer 抽屉', link: '/components/drawer/' }, { text: 'Popover 气泡卡片', link: '/components/popover/' },<!--完成基本构建，目前可以使用，但后续要补充--> { text: 'Alert 警告提示', link: '/components/alert/' }, { text: 'Message 消息提示', link: '/components/message/' }, { text: 'MessageBox 弹框', link: '/components/messageBox/' }, { text: 'Notification 通知提醒框', link: '/components/notification/' }, { text: 'BubbleConfirmationBox 气泡确认框', link: '/components/bubbleConfirmationBox/' }, { text: 'Progress 进度条', link: '/components/progress/' }, { text: 'Watermark 水印', link: '/components/watermark/' }, ] }, { text: '数据录入', items: [ { text: 'Input 输入框', link: '/components/input/' },<!--完成基本构建，目前可以使用，但后续要补充--> { text: 'Form 表单', link: '/components/form/' },<!--完成基本构建，目前可以使用，但后续要补充--> { text: 'AutoComplete 自动填充', link: '/components/autoComplete/' }, { text: 'InputNumber 数字输入框', link: '/components/inputNumber/' }, { text: 'Radio 单选框', link: '/components/radio/' }, { text: 'Checkbox 多选框', link: '/components/checkbox/' }, { text: 'Rate 评分', link: '/components/rate/' }, { text: 'Select 选择器', link: '/components/select/' }, { text: 'CascadeSelector 级联选择器', link: '/components/cascadeSelector/' }, { text: 'Switch 开关', link: '/components/switch/' }, { text: 'TimePicker 时间选择器', link: '/components/timePicker/' }, { text: 'DatePicker 日期选择器', link: '/components/datePicker/' }, { text: 'DateTimePicker 日期时间选择器', link: '/components/dateTimePicker/' }, { text: 'Transfer 穿梭框', link: '/components/transfer/' }, { text: 'Upload 上传', link: '/components/upload/' }, { text: 'Slider 滑块', link: '/components/slider/' }, { text: 'ColorPicker 颜色选择器', link: '/components/colorPicker/' }, ] }, { text: '数据展示', items: [ { text: 'Tree 树', link: '/components/tree/' },<!--完成基本构建，目前可以使用，但后续要补充--> { text: 'Pagination 分页', link: '/components/pagination/' },<!--完成基本构建，目前可以使用，但后续要补充--> { text: 'Avatar 头像', link: '/components/avatar/' }, { text: 'Card 卡片', link: '/components/card/' }, { text: 'Carousel 走马灯', link: '/components/carousel/' }, { text: 'Collapse 折叠面板', link: '/components/collapse/' }, { text: 'Table 表格', link: '/components/table/' }, { text: 'Timeline 时间轴', link: '/components/timeline/' }, { text: 'Tag 标签', link: '/components/tag/' }, { text: 'Badge 标记', link: '/components/badge/' }, { text: 'Skeleton 骨架屏', link: '/components/skeleton/' }, { text: 'Empty 空状态', link: '/components/empty/' }, { text: 'Result 结果', link: '/components/result/' }, { text: 'Image 图片', link: '/components/image/' }, { text: 'Calendar 日历', link: '/components/calendar/' }, ] }, { text: '布局', items: [ { text: 'Space 间距', link: '/components/space/' }, { text: 'Container 布局', link: '/components/container/' }, { text: 'Grid 栅格', link: '/components/Grid/' }, ] } ]
```

## 联系作者

### 微信

<img src="./src/assets/QQ%E6%88%AA%E5%9B%BE20230109183547.png" width="200"/>

## QQ

<img src="./src/assets/QQ%E6%88%AA%E5%9B%BE20230109183816.png" width="200"/>
