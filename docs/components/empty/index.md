# Empty 空状态

空状态时的占位提示。

## 基础用法

:::demo

```vue
<template>
  <s-empty description="description" />
</template>
```

:::

## 图片尺寸​

通过使用 image-size 属性来控制图片大小。

:::demo

```vue
<template>
  <s-empty :image-size="400" />
</template>
```

:::

## 自定义图片

通过设置 `image` 属性传入图片 URL。

:::demo

```vue
<template>
  <s-empty
    image="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
  />
</template>
```

:::

## 水平/垂直排列

layout 默认为 horizontal，即水平方向排列

:::demo

```vue
<template>
  <p>
    <span>layout:</span>
    <s-radio v-model="layout" label="vertical">vertical</s-radio>
    <s-radio v-model="layout" label="horizontal">horizontal</s-radio>
  </p>
  <s-empty :layout="layout"></s-empty>
</template>
<script setup>
import { ref } from 'vue';
const layout = ref('horizontal');
</script>
```

:::

## 底部内容

使用默认插槽可在底部插入内容。

:::demo

```vue
<template>
  <s-empty>
    <s-button type="primary">Button</s-button>
  </s-empty>
</template>
```

:::

## Empty API

### 属性

| 属性名      | 说明                         | 类型   | 默认值     |
| ----------- | ---------------------------- | ------ | ---------- |
| image       | empty 组件的图像地址 string  | string | ''         |
| image-size  | empty 组件的图像尺寸（宽度） | number | —          |
| description | empty 组件的描述信息         | string | ''         |
| layout      | empty 组件的水平/垂直排列    | string | 'vertical' |

### 插槽

| 插槽名      | 描述说明           |
| ----------- | ------------------ |
| default     | 作为底部内容的内容 |
| image       | 作为图像的内容     |
| description | 作为描述的内容     |
