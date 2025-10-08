# Alert 提示

> 用于页面中展示重要的提示信息。

## 基础用法

> Alert 组件不属于浮层元素，不会自动消失或关闭。
>
> Alert 组件提供5种类型，由 type 属性指定，默认值为 info。

:::demo

```vue
<template>
    <div style="max-width: 600px">
      <s-alert title="Primary alert" type="primary" />
      <s-alert title="Success alert" type="success" />
      <s-alert title="Info alert" type="info" />
      <s-alert title="Warning alert" type="warning" />
      <s-alert title="Error alert" type="error" />
  </div>
</template>
<style lang="scss" scoped>
.s-alert {
  margin: 20px 0 0;
}
.s-alert:first-child {
  margin: 0;
}
</style>
```

:::

## 主题​

> Alert 组件提供了两个不同的主题：light 和 dark。
>
> 通过设置 effect 属性来改变主题，默认为 light。

:::demo
```vue
<template>
  <div style="max-width: 600px">
    <s-alert title="Primary alert" type="primary" effect="dark" />
    <s-alert title="Success alert" type="success" effect="dark" />
    <s-alert title="Info alert" type="info" effect="dark" />
    <s-alert title="Warning alert" type="warning" effect="dark" />
    <s-alert title="Error alert" type="error" effect="dark" />
  </div>
</template>

<style lang="scss" scoped>
.s-alert {
  margin: 20px 0 0;
}
.s-alert:first-child {
  margin: 0;
}
</style>
```
:::

## 文字居中​

> 使用 center 属性来让文字水平居中。

:::demo
```vue
<template>
  <div style="max-width: 600px">
    <s-alert title="Primary alert" type="primary" center show-icon />
    <s-alert title="Success alert" type="success" center show-icon />
    <s-alert title="Info alert" type="info" center show-icon />
    <s-alert title="Warning alert" type="warning" center show-icon />
    <s-alert title="Error alert" type="error" center show-icon />
  </div>
</template>

<style lang="scss" scoped>
.s-alert {
  margin: 20px 0 0;
}
.s-alert:first-child {
  margin: 0;
}
</style>
```
:::


## 文字描述

> 为 Alert 组件添加一个更加详细的描述来使用户了解更多信息。
>
> 除了必填的 title 属性外，你可以设置 description 属性来帮助你更好地介绍，我们称之为辅助性文字。 辅助性文字只能存放文本内容，当内容超出长度限制时会自动换行显示。

:::demo
```vue
<template>
  <div style="max-width: 600px">
    <s-alert
      title="With description"
      type="success"
      description="This is a description."
    />
  </div>
</template>
```
:::

<!-- 参考 element plus -->