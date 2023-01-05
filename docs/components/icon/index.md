#  图标 Icon

## 基础用法

:::demo
```vue
<template>
    <s-icon name="vuejs" />
    <s-icon name="https://vitejs.dev/logo.svg" width="30" />
</template>
```
:::

## 尺寸

设置 size 可以设置图标尺寸 
:::demo 设置 size 可以设置图标尺寸
```vue
<template>
  <s-icon name="vuejs" size="30px" />
  <s-icon name="react" :size="30" />
  <s-icon name="angular" :size="30" />
</template>
```
:::

## 颜色

设置 color 可以设置图标颜色 
:::demo 设置为合法的颜色字符串即可
```vue
<template>
  <s-icon name="vuejs" size="30px" color="green" />
  <s-icon name="react" :size="30" color="blue" />
  <s-icon name="angular" :size="30" color="red" />
</template>
```
:::

## svg 图标
设置component可以显示svg图标。
:::demo component设置为symbolId即可
```vue
<template>
  <s-icon component="vuejs" size="30px" color="green" />
  <s-icon component="react" :size="30" color="blue" />
  <s-icon component="angular" :size="30" color="red" />
</template>
```
:::