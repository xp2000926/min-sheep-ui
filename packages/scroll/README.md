# Scroll 滚动条组件

一个功能完整的自定义滚动条组件，支持垂直和水平滚动，提供流畅的拖拽体验和自定义样式。

## 功能特性

- ✅ 支持垂直和水平滚动
- ✅ 流畅的拖拽交互（优化横向滚动性能）
- ✅ 点击轨道快速跳转
- ✅ 悬停效果和视觉反馈
- ✅ 完全自定义样式
- ✅ 响应式尺寸更新
- ✅ 性能优化（requestAnimationFrame + 防抖处理）
- ✅ 精确的滚动条位置计算
- ✅ 滚动条显示时机控制（悬停显示/一直显示）
- ✅ TypeScript 支持

## 基本用法

```vue
<template>
  <div style="height: 300px; width: 400px; border: 1px solid #ccc;">
    <SScroll>
      <div style="padding: 20px;">
        <!-- 你的内容 -->
        <p v-for="i in 20" :key="i">这是第 {{ i }} 行内容</p>
      </div>
    </SScroll>
  </div>
</template>

<script setup>
import { SScroll } from 'min-sheep-ui';
</script>
```

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

## 高级用法

### 自定义样式

#### 基础样式自定义

```vue
<template>
  <SScroll
    :rail-size="8"
    :rail-color="'rgba(255, 0, 0, 0.3)'"
    :rail-hover-color="'rgba(255, 0, 0, 0.6)'"
    :y-placement="'left'"
    :x-placement="'top'"
  >
    <div>自定义样式的滚动条</div>
  </SScroll>
</template>
```

#### 高级样式自定义

```vue
<template>
  <SScroll
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
    <div>完全自定义样式的滚动条</div>
  </SScroll>
</template>

<style>
.my-custom-scroll {
  --scroll-rail-color: rgba(102, 126, 234, 0.3);
  --scroll-rail-hover-color: rgba(102, 126, 234, 0.6);
  --scroll-rail-size: 8px;
  --scroll-rail-border-radius: 6px;
}
</style>
```

### 只显示垂直滚动条

```vue
<template>
  <SScroll :show-x-scroll="false">
    <div>只显示垂直滚动条</div>
  </SScroll>
</template>
```

### 只显示水平滚动条

```vue
<template>
  <SScroll :show-y-scroll="false">
    <div>只显示水平滚动条</div>
  </SScroll>
</template>
```

### 滚动条显示时机

#### 悬停时显示（默认）

```vue
<template>
  <SScroll trigger="hover">
    <div>鼠标悬停时显示滚动条</div>
  </SScroll>
</template>
```

#### 一直显示滚动条

```vue
<template>
  <SScroll trigger="none">
    <div>滚动条一直显示</div>
  </SScroll>
</template>
```

## 样式定制

### CSS 变量定制

组件使用 SCSS 编写，支持通过 CSS 变量进行全局定制：

```scss
.s-scroll {
  // 滚动条基础颜色
  --scroll-rail-color: rgba(0, 0, 0, 0.25);
  
  // 滚动条悬停颜色
  --scroll-rail-hover-color: rgba(0, 0, 0, 0.4);
  
  // 滚动条激活颜色
  --scroll-rail-active-color: rgba(0, 0, 0, 0.6);
  
  // 滚动条尺寸
  --scroll-rail-size: 5px;
  
  // 滚动条圆角
  --scroll-rail-border-radius: 3px;
  
  // 滚动条过渡动画
  --scroll-rail-transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  
  // 滚动条透明度
  --scroll-rail-opacity: 1;
  
  // 滚动条透明度过渡
  --scroll-rail-opacity-transition: opacity 0.2s ease-in-out;
}
```

### 自定义样式类

通过 `customClass` 属性可以添加自定义样式类：

```vue
<template>
  <SScroll custom-class="my-theme-scroll">
    <div>内容</div>
  </SScroll>
</template>

<style>
.my-theme-scroll {
  --scroll-rail-color: #3b82f6;
  --scroll-rail-hover-color: #1d4ed8;
  --scroll-rail-size: 6px;
  --scroll-rail-border-radius: 4px;
}
</style>
```

### 内联样式定制

通过样式对象属性可以精确控制各个部分的样式：

```vue
<template>
  <SScroll
    :custom-rail-style="railStyle"
    :custom-bar-style="barStyle"
    :custom-container-style="containerStyle"
    :custom-content-style="contentStyle"
  >
    <div>内容</div>
  </SScroll>
</template>

<script setup>
const railStyle = {
  background: 'rgba(59, 130, 246, 0.1)',
  borderRadius: '8px'
};

const barStyle = {
  background: 'linear-gradient(45deg, #3b82f6, #1d4ed8)',
  borderRadius: '6px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
};

const containerStyle = {
  border: '1px solid #e5e7eb',
  borderRadius: '12px'
};

const contentStyle = {
  padding: '16px',
  background: '#f9fafb'
};
</script>
```

## 注意事项

1. 确保滚动容器有明确的高度和宽度
2. 内容需要超出容器尺寸才会显示滚动条
3. 组件会自动隐藏原生滚动条
4. 支持响应式更新，容器尺寸变化时会自动重新计算
5. 横向滚动已优化性能，使用 requestAnimationFrame 确保流畅体验
6. 滚动条位置计算已优化，确保精确触底
7. `trigger` 属性控制滚动条显示时机：`'hover'` 表示悬停时显示，`'none'` 表示一直显示

## 浏览器支持

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 更新日志

### v1.2.0
- ✨ 新增自定义样式功能
- ✨ 支持 `customClass` 自定义样式类名
- ✨ 支持 `customRailStyle` 自定义滚动条样式
- ✨ 支持 `customBarStyle` 自定义滚动条滑块样式
- ✨ 支持 `customContainerStyle` 自定义容器样式
- ✨ 支持 `customContentStyle` 自定义内容区域样式
- ✨ 新增 CSS 变量支持，提供更灵活的样式定制
- 📚 完善文档，添加详细的自定义样式使用示例

### v1.1.0
- 优化横向滚动性能，解决卡顿问题
- 使用 requestAnimationFrame 优化滚动更新
- 改进滚动条位置计算精度
- 优化拖拽交互体验
- 添加横向滚动性能测试用例

### v1.0.0
- 初始版本发布
- 支持垂直和水平滚动
- 支持拖拽交互
- 支持基础自定义样式
