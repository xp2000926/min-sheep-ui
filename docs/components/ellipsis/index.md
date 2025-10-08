# Ellipsis 文本省略

> 复杂度不会消失，只会转移。
>
> 当你听到一些人对于精致的概念模型侃侃而谈，请保持清醒。

## 基础用法

:::demo

```vue
<template>
  <s-ellipsis style="max-width: 240px">
    住在我心里孤独的 孤独的海怪 痛苦之王 开始厌倦 深海的光 停滞的海浪
  </s-ellipsis>
</template>
```

:::

## 最大行数

> 提供基于 `-webkit-line-clamp` 的多行省略。兼容性参见 [caniuse](https://caniuse.com/?search=line-clamp)

:::demo

```vue
<template>
  <s-ellipsis :line-clamp="2">
    电灯熄灭 物换星移 泥牛入海<br>黑暗好像 一颗巨石 按在胸口<br>独脚大盗
    百万富翁 摸爬滚打<br>黑暗好像 一颗巨石 按在胸口
  </s-ellipsis>
</template>
```

:::

## 展开方式

> 使用 `expand-trigger="click"` 搭配 `line-clamp` 参数可以实现点击缩略文本展开完整文本的功能。

:::demo

```vue
<template>
  <s-ellipsis expand-trigger="click" line-clamp="2" :tooltip="false">
    电灯熄灭 物换星移 泥牛入海<br>
    黑暗好像 一颗巨石 按在胸口<br>
    独脚大盗 百万富翁 摸爬滚打<br>
    黑暗好像 一颗巨石 按在胸口
  </s-ellipsis>
</template>
```
