# Scroll 滚动条

下方展示了滚动条组件的基本使用

:::demo

```vue
<template>
    <s-scroll style="max-height: 120px">
      我们在田野上面找猪<br>
      想象中已找到了三只<br>
      小鸟在白云上面追逐<br>
      它们在树底下跳舞<br>
      啦啦啦啦啦啦啦啦咧<br>
      啦啦啦啦咧<br>
      我们在想象中度过了许多年<br>
      想象中我们是如此的疯狂<br>
      我们在城市里面找猪<br>
      想象中已找到了几百万只<br>
      小鸟在公园里面唱歌<br>
      它们独自在想象里跳舞<br>
      啦啦啦啦啦啦啦啦咧<br>
      啦啦啦啦咧<br>
      我们在想象中度过了许多年<br>
      许多年之后我们又开始想象<br>
      啦啦啦啦啦啦啦啦咧
    </s-scroll>
</template>
```

:::

## 水平滚动

:::demo
```vue
<template>
  <s-scroll x-scrollable>
    <div style="white-space: nowrap; padding: 12px">
      我们在田野上面找猪 想象中已找到了三只 小鸟在白云上面追逐 它们在树底下跳舞
      啦啦啦啦啦啦啦啦咧 啦啦啦啦咧 我们在想象中度过了许多年
      想象中我们是如此的疯狂 我们在城市里面找猪 想象中已找到了几百万只
      小鸟在公园里面唱歌 它们独自在想象里跳舞 啦啦啦啦啦啦啦啦咧 啦啦啦啦咧
      我们在想象中度过了许多年 许多年之后我们又开始想象 啦啦啦啦啦啦啦啦咧
    </div>
  </s-scroll>
</template>
```
:::

## 触发方式

> 你可以设定不同的触发方式，trigger="none" 会让滚动条一直显示，trigger="hover" 会让滚动条在鼠标悬浮的时候显示。

:::demo
```vue
<template>
  <s-scroll style="max-height: 120px" trigger="none">
    我们在田野上面找猪<br>
    想象中已找到了三只<br>
    小鸟在白云上面追逐<br>
    它们在树底下跳舞<br>
    啦啦啦啦啦啦啦啦咧<br>
    啦啦啦啦咧<br>
    我们在想象中度过了许多年<br>
    想象中我们是如此的疯狂<br>
    我们在城市里面找猪<br>
    想象中已找到了几百万只<br>
    小鸟在公园里面唱歌<br>
    它们独自在想象里跳舞<br>
    啦啦啦啦啦啦啦啦咧<br>
    啦啦啦啦咧<br>
    我们在想象中度过了许多年<br>
    许多年之后我们又开始想象<br>
    啦啦啦啦啦啦啦啦咧
  </s-scroll>
</template>
```
:::

## 自定义样式

:::demo
```vue
<template>
  <s-scroll style="max-height: 120px"
    custom-class="my-custom-scroll"
    :custom-rail-style="{
      background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
      borderRadius: '10px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }"
    :custom-bar-style="{
      background: 'linear-gradient(45deg, #667eea, #764ba2)',
      borderRadius: '8px',
      boxShadow: '0 1px 4px rgba(0,0,0,0.2)'
    }"
    :custom-container-style="{
      border: '2px solid #e0e0e0',
      borderRadius: '12px'
    }"
    :custom-content-style="{
      padding: '20px',
      background: '#f8f9fa'
    }"
  >
    <div>
      <p v-for="i in 15" :key="i">这是第 {{ i }} 行内容，用于测试高级自定义样式</p>
    </div>
  </s-scroll>
</template>\
```
:::

## 滚动条位置

> 通过 y-placement 和 x-placement 去控制滚动条的位置。

:::demo
```vue
<template>
    <s-scroll style="max-height: 120px" y-placement="left">
      我们在田野上面找猪<br>
      想象中已找到了三只<br>
      小鸟在白云上面追逐<br>
      它们在树底下跳舞<br>
      啦啦啦啦啦啦啦啦咧<br>
      啦啦啦啦咧<br>
      我们在想象中度过了许多年<br>
      想象中我们是如此的疯狂<br>
      我们在城市里面找猪<br>
      想象中已找到了几百万只<br>
      小鸟在公园里面唱歌<br>
      它们独自在想象里跳舞<br>
      啦啦啦啦啦啦啦啦咧<br>
      啦啦啦啦咧<br>
      我们在想象中度过了许多年<br>
      许多年之后我们又开始想象<br>
      啦啦啦啦啦啦啦啦咧
    </s-scroll>
    <s-scroll x-scrollable x-placement="top" style="white-space: nowrap">
      我们在田野上面找猪 想象中已找到了三只 小鸟在白云上面追逐 它们在树底下跳舞
      啦啦啦啦啦啦啦啦咧 啦啦啦啦咧 我们在想象中度过了许多年
      想象中我们是如此的疯狂 我们在城市里面找猪 想象中已找到了几百万只
      小鸟在公园里面唱歌 它们独自在想象里跳舞 啦啦啦啦啦啦啦啦咧 啦啦啦啦咧
      我们在想象中度过了许多年 许多年之后我们又开始想象 啦啦啦啦啦啦啦啦咧
    </s-scroll>
</template>
```
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| yPlacement | 垂直滚动条位置 | `'left' \| 'right'` | `'right'` |
| xPlacement | 水平滚动条位置 | `'top' \| 'bottom'` | `'bottom'` |
| scrollable | 是否可滚动 | `boolean` | `true` |
| useUnifiedContainer | 是否使用统一容器 | `boolean` | - |
| railSize | 滚动条大小 | `number` | `5` |
| minRailSize | 滚动条最小大小 | `number` | `20` |
| showXScroll | 是否显示水平滚动条 | `boolean` | `true` |
| showYScroll | 是否显示垂直滚动条 | `boolean` | `true` |
| railColor | 滚动条颜色 | `string` | `'rgba(0, 0, 0, 0.25)'` |
| railHoverColor | 滚动条悬停颜色 | `string` | `'rgba(0, 0, 0, 0.4)'` |
| trigger | 滚动条显示时机 | `'hover' \| 'none'` | `'hover'` |
| customClass | 自定义样式类名 | `string` | `''` |
| customRailStyle | 自定义滚动条样式 | `Record<string, any>` | `{}` |
| customBarStyle | 自定义滚动条滑块样式 | `Record<string, any>` | `{}` |
| customContainerStyle | 自定义容器样式 | `Record<string, any>` | `{}` |
| customContentStyle | 自定义内容区域样式 | `Record<string, any>` | `{}` |

### 事件

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| scroll | 滚动时触发 | `{ scrollLeft: number, scrollTop: number }` |