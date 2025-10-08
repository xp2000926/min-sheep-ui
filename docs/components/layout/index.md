# Layout 布局

> 通过基础的 24 分栏，迅速简便地创建布局。

## 基础布局

> 使用列创建基础网格布局。
>
> 通过 `row` 和 `col` 组件，并通过 `col` 组件的 `span` 属性我们就可以自由地组合布局。
:::demo

```vue
<template>
 <s-row>
    <s-col :span="24">
      <div class="grid-content ep-bg-purple-dark" />
    </s-col>
  </s-row>
  <s-row>
    <s-col :span="12">
      <div class="grid-content ep-bg-purple" />
    </s-col>
    <s-col :span="12">
      <div class="grid-content ep-bg-purple-light" />
    </s-col>
  </s-row>
  <s-row>
    <s-col :span="8">
      <div class="grid-content ep-bg-purple" />
    </s-col>
    <s-col :span="8">
      <div class="grid-content ep-bg-purple-light" />
    </s-col>
    <s-col :span="8">
      <div class="grid-content ep-bg-purple" />
    </s-col>
  </s-row>
  <s-row>
    <s-col :span="6">
      <div class="grid-content ep-bg-purple" />
    </s-col>
    <s-col :span="6">
      <div class="grid-content ep-bg-purple-light" />
    </s-col>
    <s-col :span="6">
      <div class="grid-content ep-bg-purple" />
    </s-col>
    <s-col :span="6">
      <div class="grid-content ep-bg-purple-light" />
    </s-col>
  </s-row>
  <s-row>
    <s-col :span="4">
      <div class="grid-content ep-bg-purple" />
    </s-col>
    <s-col :span="4">
      <div class="grid-content ep-bg-purple-light" />
    </s-col>
    <s-col :span="4">
      <div class="grid-content ep-bg-purple" />
    </s-col>
    <s-col :span="4">
      <div class="grid-content ep-bg-purple-light" />
    </s-col>
    <s-col :span="4">
      <div class="grid-content ep-bg-purple" />
    </s-col>
    <s-col :span="4">
      <div class="grid-content ep-bg-purple-light" />
    </s-col>
  </s-row>
</template>
<style lang="scss" scoped>
.s-row {
  margin-bottom: 20px;
}

.s-row:last-child {
  margin-bottom: 0;
}

.s-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.ep-bg-purple{
  background: #d3dce6;
}
.ep-bg-purple-dark {
    background: #99a9bf;
}
.ep-bg-purple-light {
    background: #e5e9f2;
}
</style>
```

:::

## 分栏间隔

> 支持列间距。
>
> 行提供 `gutter` 属性来指定列之间的间距，其默认值为0。

:::demo
```vue
<template>
  <s-row :gutter="20">
    <s-col :span="6"><div class="grid-content ep-bg-purple" /></s-col>
    <s-col :span="6"><div class="grid-content ep-bg-purple" /></s-col>
    <s-col :span="6"><div class="grid-content ep-bg-purple" /></s-col>
    <s-col :span="6"><div class="grid-content ep-bg-purple" /></s-col>
  </s-row>
</template>

<style lang="scss" scoped>
.s-row {
  margin-bottom: 20px;
}
.s-row:last-child {
  margin-bottom: 0;
}
.s-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.ep-bg-purple{
  background: #d3dce6;
}
</style>
```
:::

## 混合布局

> 通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。

:::demo
```vue
<template>
  <s-row :gutter="20">
    <s-col :span="16"><div class="grid-content ep-bg-purple" /></s-col>
    <s-col :span="8"><div class="grid-content ep-bg-purple" /></s-col>
  </s-row>
  <s-row :gutter="20">
    <s-col :span="8"><div class="grid-content ep-bg-purple" /></s-col>
    <s-col :span="8"><div class="grid-content ep-bg-purple" /></s-col>
    <s-col :span="4"><div class="grid-content ep-bg-purple" /></s-col>
    <s-col :span="4"><div class="grid-content ep-bg-purple" /></s-col>
  </s-row>
  <s-row :gutter="20">
    <s-col :span="4"><div class="grid-content ep-bg-purple" /></s-col>
    <s-col :span="16"><div class="grid-content ep-bg-purple" /></s-col>
    <s-col :span="4"><div class="grid-content ep-bg-purple" /></s-col>
  </s-row>
</template>

<style lang="scss" scoped>
.s-row {
  margin-bottom: 20px;
}
.s-row:last-child {
  margin-bottom: 0;
}
.s-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.ep-bg-purple{
  background: #d3dce6;
}
</style>
```
:::

## 列偏移

> 您可以指定列偏移量。
>
> 通过制定 col 组件的 offset 属性可以指定分栏偏移的栏数。

:::demo
```vue
<template>
  <s-row :gutter="20">
    <s-col :span="6"><div class="grid-content ep-bg-purple" /></s-col>
    <s-col :span="6" :offset="6">
      <div class="grid-content ep-bg-purple" />
    </s-col>
  </s-row>
  <s-row :gutter="20">
    <s-col :span="6" :offset="6">
      <div class="grid-content ep-bg-purple" />
    </s-col>
    <s-col :span="6" :offset="6">
      <div class="grid-content ep-bg-purple" />
    </s-col>
  </s-row>
  <s-row :gutter="20">
    <s-col :span="12" :offset="6">
      <div class="grid-content ep-bg-purple" />
    </s-col>
  </s-row>
</template>

<style lang="scss" scoped>
.s-row {
  margin-bottom: 20px;
}
.s-row:last-child {
  margin-bottom: 0;
}
.s-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.ep-bg-purple{
  background: #d3dce6;
}
</style>

```
:::

## 对齐方式

> 您可以指定列偏移量。
>
> 通过制定 col 组件的 offset 属性可以指定分栏偏移的栏数。

:::demo
```vue
<template>
  <s-row class="row-bg">
    <s-col :span="6"><div class="grid-content ep-bg-purple" /></s-col>
    <s-col :span="6"><div class="grid-content ep-bg-purple-light" /></s-col>
    <s-col :span="6"><div class="grid-content ep-bg-purple" /></s-col>
  </s-row>
  <s-row class="row-bg" justify="center">
    <s-col :span="6"><div class="grid-content ep-bg-purple" /></s-col>
    <s-col :span="6"><div class="grid-content ep-bg-purple-light" /></s-col>
    <s-col :span="6"><div class="grid-content ep-bg-purple" /></s-col>
  </s-row>
  <s-row class="row-bg" justify="end">
    <s-col :span="6"><div class="grid-content ep-bg-purple" /></s-col>
    <s-col :span="6"><div class="grid-content ep-bg-purple-light" /></s-col>
    <s-col :span="6"><div class="grid-content ep-bg-purple" /></s-col>
  </s-row>
  <s-row class="row-bg" justify="space-between">
    <s-col :span="6"><div class="grid-content ep-bg-purple" /></s-col>
    <s-col :span="6"><div class="grid-content ep-bg-purple-light" /></s-col>
    <s-col :span="6"><div class="grid-content ep-bg-purple" /></s-col>
  </s-row>
  <s-row class="row-bg" justify="space-around">
    <s-col :span="6"><div class="grid-content ep-bg-purple" /></s-col>
    <s-col :span="6"><div class="grid-content ep-bg-purple-light" /></s-col>
    <s-col :span="6"><div class="grid-content ep-bg-purple" /></s-col>
  </s-row>
  <s-row class="row-bg" justify="space-evenly">
    <s-col :span="6"><div class="grid-content ep-bg-purple" /></s-col>
    <s-col :span="6"><div class="grid-content ep-bg-purple-light" /></s-col>
    <s-col :span="6"><div class="grid-content ep-bg-purple" /></s-col>
  </s-row>
</template>

<style lang="scss" scoped>
.s-row {
  margin-bottom: 20px;
}
.s-row:last-child {
  margin-bottom: 0;
}
.s-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.ep-bg-purple{
  background: #d3dce6;
}
.ep-bg-purple-light {
    background: #e5e9f2;
}
</style>

```
:::

## 响应式布局​

> 参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：xs、sm、md、lg 和 xl。

:::demo
```vue
<template>
  <s-row :gutter="10">
    <s-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
      <div class="grid-content ep-bg-purple" />
    </s-col>
    <s-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
      <div class="grid-content ep-bg-purple-light" />
    </s-col>
    <s-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
      <div class="grid-content ep-bg-purple" />
    </s-col>
    <s-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
      <div class="grid-content ep-bg-purple-light" />
    </s-col>
  </s-row>
</template>

<style lang="scss" scoped>
.s-col {
  border-radius: 4px;
}
.ep-bg-purple{
  background: #d3dce6;
}
.ep-bg-purple-light {
    background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
```
:::