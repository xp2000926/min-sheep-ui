# 按钮-Button

## 基础用法

::: demo 使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式。
```vue
<div class="mb-4">
  <s-button>Default</s-button>
  <s-button type="primary">Primary</s-button>
  <s-button type="success">Success</s-button>
  <s-button type="info">Info</s-button>
  <s-button type="warning">Warning</s-button>
  <s-button type="danger">Danger</s-button>
</div>
<div class="mb-4">
  <s-button plain>Default</s-button>
  <s-button type="primary" plain>Primary</s-button>
  <s-button type="success" plain>Success</s-button>
  <s-button type="info" plain>Info</s-button>
  <s-button type="warning" plain>Warning</s-button>
  <s-button type="danger" plain>Danger</s-button>
</div>
<div class="mb-4">
  <s-button round>Default</s-button>
  <s-button type="primary" round>Primary</s-button>
  <s-button type="success" round>Success</s-button>
  <s-button type="info" round>Info</s-button>
  <s-button type="warning" round>Warning</s-button>
  <s-button type="danger" round>Danger</s-button>
</div>
<div class="mb-4">
  <s-button circle></s-button>
  <s-button type="primary" circle></s-button>
  <s-button type="success" circle></s-button>
  <s-button type="info" circle></s-button>
  <s-button type="warning" circle></s-button>
  <s-button type="danger" circle></s-button>
</div>
```
:::

## 禁用状态

:::demo 你可以使用 `disabled` 属性来定义按钮是否被禁用。<br> 使用 `disabled` 属性来控制按钮是否为禁用状态。 该属性接受一个 Boolean 类型的值。
```vue
<div class="mb-4">
  <s-button disabled>Default</s-button>
  <s-button type="primary" disabled>Primary</s-button>
  <s-button type="success" disabled>Success</s-button>
  <s-button type="info" disabled>Info</s-button>
  <s-button type="warning" disabled>Warning</s-button>
  <s-button type="danger" disabled>Danger</s-button>
</div>
<div class="mb-4">
  <s-button plain disabled>Default</s-button>
  <s-button type="primary" plain disabled>Primary</s-button>
  <s-button type="success" plain disabled>Success</s-button>
  <s-button type="info" plain disabled>Info</s-button>
  <s-button type="warning" plain disabled>Warning</s-button>
  <s-button type="danger" plain disabled>Danger</s-button>
</div>
```
:::

## 调整尺寸

:::demo 你可以使用 `block` 属性来定义按钮是否被禁用
```vue
<div class="mb-4">
  <s-button size="large">Large</s-button>
  <s-button>Default</s-button>
  <s-button size="small">Small</s-button>
</div>
<div class="mb-4">
  <s-button round size="large">Large</s-button>
  <s-button round>Default</s-button>
  <s-button round size="small">Small</s-button>
</div>
<div class="mb-4">
  <s-button circle size="large"></s-button>
  <s-button circle></s-button>
  <s-button circle size="small"></s-button>
</div>
```
:::
## 块级按钮

:::demo 你可以使用 `block` 属性来定义按钮是否被禁用
```vue
<div class="mb-4">
  <s-button block>Default</s-button>
  <s-button block type="primary">Primary</s-button>
  <s-button block type="success">Success</s-button>
  <s-button block type="info">Info</s-button>
  <s-button block type="warning">Warning</s-button>
  <s-button block type="danger">Danger</s-button>
</div>
<div class="mb-4">
  <s-button block plain>Default</s-button>
  <s-button block plain type="primary">Primary</s-button>
  <s-button block plain type="success">Success</s-button>
  <s-button block plain type="info">Info</s-button>
  <s-button block plain type="warning">Warning</s-button>
  <s-button block plain type="danger">Danger</s-button>
</div>
```
:::

## Button API

### Button 属性

| 属性         | 说明                           | 类型                                                  | 默认值  | 备注   |
| ------------ | ------------------------------ | ----------------------------------------------------- | ------- | ------ |
| size         | 尺寸                           | `large`,`default`,`small`                             | —       |        |
| type         | 类型                           | `primary`, `success`,`warning`,`danger`,`info`,`text` | —       |        |
| plain        | 是否为朴素按钮                 | `boolean`                                             | `false` |        |
| round        | 是否为圆角按钮                 | `boolean`                                             | `false` |        |
| circle       | 是否为圆形按钮                 | `boolean`                                             | `false` |        |
| loading      | 是否为加载中状态               | `boolean`                                             | `false` | 开发中 |
| loading-icon | 自定义加载中状态图标组件       | `string` /`Component`                                 | `false` | 开发中 |
| block        | 将按钮宽度调整为其父宽度的选项 | `boolean`                                             | `false` |        |
| disabled     | 按钮失效状态                   | `boolean`                                             | `false` |        |