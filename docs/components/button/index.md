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

## 按钮尺寸 size

:::demo 通过 size 属性设置按钮样式，可选：mini|small | medium | large
```vue
<template>
  <s-button size="mini">mini</s-button>
  <s-button size="small">Small</s-button>
  <s-button>Medium</s-button>
  <s-button size="large">Large</s-button>
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