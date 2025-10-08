# Breadcrumb 面包屑

## 基础用法

:::demo
```vue
<template>
  <s-breadcrumb separator="/">
    <s-breadcrumb-item to="/">首页</s-breadcrumb-item>
    <s-breadcrumb-item>活动管理</s-breadcrumb-item>
    <s-breadcrumb-item>活动列表</s-breadcrumb-item>
    <s-breadcrumb-item>活动详情</s-breadcrumb-item>
  </s-breadcrumb>
</template>
```
:::


## API

### Breadcrumb 属性

| 属性名          | 说明             | 类型   | 可选值 | 默认值 |
| --------------- | ---------------- | ------ | ------ | ------ |
| separator       | 分隔符           | string | —      | `/`    |
| is-icon       | 是否使有icon图标         |boolean | —      | false |
| separator-class | 图标分隔符 class | string | —      | —    |

### BreadcrumbItem 属性

| 属性名 | 说明     | 类型   | 可选值 | 默认值 |
| ------ | -------- | ------ | ------ | ------ |
| to     | 路由跳转对象，同 vue-router 的 to | string | —      | —      |
| replace | 在使用 to 进行路由跳转时，启用 replace 将不会向 history 添加新记录 | boolean | —      | false |