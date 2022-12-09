# 按钮-Button

:::demo 这是Helloworld组件，我们可以传递msg属性给它
```vue
<template>
<HelloWorld msg="你好" />
</template>
```
:::

<Test />

::: demo 这是Helloworld组件，我们可以传递msg属性给它
```vue
<SButton type="primary">确定</SButton>
<SButton>取消</SButton>
<SButton type="text">text</SButton>
<SButton size="mini">Mini</SButton>
<SButton size="small">Small</SButton>
<SButton type="primary" @click="confirm">Primary</SButton>
<SButton type="primary" size="small" disabled @click="confirm">Disabled</SButton>
<SButton>Medium</SButton>
<SButton size="large">Large</SButton>
<SButton size="large" block>block</SButton>
```
:::