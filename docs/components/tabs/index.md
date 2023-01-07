# Tabs 标签页

## 基础用法

s-tabs包裹若干s-tab即可，设置`v-model`控制激活页签id
:::demo
```vue
<template>
  <s-tabs v-model="activeTab">
    <s-tab id="tab1" title="Tab1">Tab1 Content</s-tab>
    <s-tab id="tab2" title="Tab2">Tab2 Content</s-tab>
    <s-tab id="tab3" title="Tab3">Tab3 Content</s-tab>
  </s-tabs>
</template>
<script setup>
import { ref } from 'vue'
const activeTab = ref('tab1')
</script>
<style>
.vp-doc li + li {
  margin-top: 0;
}
</style>
```
:::

## 关闭、新增标签
添加closable和addable课关闭、新增标签。
:::demo 添加closable和addable课关闭、新增标签。
```vue
<template>
  <s-tabs v-model="activeTab" closable addable>
    <s-tab id="tab1" title="Tab1">Tab1 Content</s-tab>
    <s-tab id="tab2" title="Tab2">Tab2 Content</s-tab>
    <s-tab id="tab3" title="Tab3">Tab3 Content</s-tab>
  </s-tabs>
</template>
<script setup>
import { ref } from 'vue'
const activeTab = ref('tab1')
</script>
```
:::

## Tabs API
### Tabs 属性

| 属性名       | 说明           | 类型    | 可选值                           | 默认值 | 备注   |
| ------------ | -------------- | ------- | -------------------------------- | ------ | ------ |
| closable     | 标签是否可关闭 | boolean | —                                | false  |        |
| addable      | 标签是否可增加 | boolean | —                                | false  |        |
| tab-position | 选项卡所在位置 | string  | `top`、`right`、`bottom`、`left` | top    | 未实现 |
| type         | 风格类型       | string  | `card`、`border-card`、          | —      | 未实现 |
