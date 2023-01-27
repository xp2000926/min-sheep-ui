# Button 按钮

## 基础按钮

:::demo 基础按钮

```vue
<template>
  <s-button></s-button>
</template>
```

:::

## 按钮类型 type

:::demo 通过 type 属性设置按钮样式，可选：primary | secondary | text

```vue
<template>
  <s-button></s-button>
  <s-button type="primary"></s-button>
  <s-button type="text"></s-button>
</template>
```

:::

## 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。
:::demo 额外的尺寸：`large`,`medium`、`small`、`mini`，通过设置size属性来配置它们。
```vue
<template>
  <s-button size="large">Large</s-button>
  <s-button>Medium</s-button>
  <s-button size="small">Small</s-button>
  <s-button size="mini">mini</s-button>
  <br>
  <s-button size="large" round>Large</s-button>
  <s-button round>Medium</s-button>
  <s-button size="small" round>Small</s-button>
  <s-button size="mini" round>mini</s-button>
</template>
```
:::


## 禁用按钮 disabled

:::demo 通过 disabled 属性禁用按钮
```vue
<template>
    <s-button type="primary"          
      @click="confirm">Primary</s-button>
    <s-button type="primary" disabled 
      @click="confirm">Disabled</s-button>
</template>
<script setup>
const confirm = () => console.log('confirm')
</script>
```
:::

## 块级按钮 block

:::demo 通过 block 属性设置按钮为块级
```vue
<template>
  <s-button type="primary" block>Confirm</s-button>
  <s-button block>Cancel</s-button>
</template>
```
:::

## Button API
### Button 属性

| 属性名          | 说明                  | 类型      | 可选值                          | 默认值      | 备注   |
| --------------- | --------------------- | --------- | ------------------------------- | ----------- | ------ |
| size            | 尺寸                  | `enum`    | `mini`,`small`,`medium`,`large` | `medium`    |        |
| type            | 类型                  | `enum`    | `primary` `secondary` `text`    | `secondary` |        |
| block           | 块级                  | `boolean` |                                 | false       |        |
| disabled        | 是否禁用状态          | `boolean` |                                 | false       |        |
| round           | 是否圆角按钮          | `boolean` |                                 | false       |        |
| loading         | 是否为加载中状态      | `boolean` |                                 | false       | 未实现 |
| icon            | 图标组件              | `string`  |                                 |             | 未实现 |
| backgroundColor | 设置按钮的背景色      | `string`  | —                               | —           | 未实现 |
| borderColor     | 设置按钮的边框色      | `string`  | —                               | —           | 未实现 |
| hoverColor      | 设置按钮的hover的颜色 | `string`  | —                               | —           | 未实现 |

### Button 插槽

| 插槽名 | 说明           | 备注   |
| ------ | -------------- | ------ |
| —      | 自定义默认内容 |        |
| icon   | 自定义图标组件 | 未实现 |