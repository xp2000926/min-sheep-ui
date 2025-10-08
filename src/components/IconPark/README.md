# IconPark 图标组件

基于 `@icon-park/svg` 的 Vue 3 图标组件，支持中文使用。

## 特性

- 🎨 支持 4 种主题：outline、filled、two-tone、multi-color
- 📏 支持自定义尺寸
- 🎯 支持多种颜色类型和自定义颜色
- 🔄 支持旋转、翻转等动画效果
- 🌈 支持双色填充和自定义描边
- 📱 响应式设计
- 🎪 完整的 TypeScript 支持

## 安装

确保项目中已安装 `@icon-park/svg`：

```bash
npm install @icon-park/svg
```

## 基础用法

```vue
<template>
  <!-- 基础用法 -->
  <SIconPark name="home" />
  
  <!-- 指定主题 -->
  <SIconPark name="user" theme="filled" />
  
  <!-- 指定尺寸 -->
  <SIconPark name="settings" size="24" />
  
  <!-- 指定颜色类型 -->
  <SIconPark name="check" type="success" />
  
  <!-- 自定义颜色 -->
  <SIconPark name="heart" color="#ff6b6b" />
  
  <!-- 自定义 SVG 图标 -->
  <SIconPark name="users" size="32" color="#409eff" />
</template>

<script setup>
import { SIconPark } from '@/components/IconPark'
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| name | 图标名称 | `string` | - |
| theme | 图标主题 | `'outline' \| 'filled' \| 'two-tone' \| 'multi-color'` | `'outline'` |
| size | 图标大小 | `string \| number` | `'1em'` |
| fill | 图标填充颜色 | `string \| string[]` | - |
| stroke | 图标描边颜色 | `string` | - |
| strokeWidth | 图标描边宽度 | `number` | - |
| strokeLinejoin | 图标描边连接方式 | `'miter' \| 'round' \| 'bevel'` | - |
| strokeLinecap | 图标描边端点样式 | `'butt' \| 'round' \| 'square'` | - |
| type | 图标类型（用于样式主题） | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | - |
| color | 自定义颜色 | `string` | - |
| spin | 是否旋转 | `boolean` | `false` |
| rotation | 旋转角度 | `number` | - |
| flip | 是否翻转 | `'horizontal' \| 'vertical' \| 'both'` | - |
| class | 自定义类名 | `string` | - |
| style | 自定义样式 | `Record<string, any>` | - |

## 主题示例

### 基础主题

```vue
<template>
  <SIconPark name="heart" theme="outline" />
  <SIconPark name="heart" theme="filled" />
  <SIconPark name="heart" theme="two-tone" />
  <SIconPark name="heart" theme="multi-color" />
</template>
```

### 尺寸示例

```vue
<template>
  <SIconPark name="star" size="16" />
  <SIconPark name="star" size="24" />
  <SIconPark name="star" size="32" />
  <SIconPark name="star" size="48" />
</template>
```

### 颜色类型示例

```vue
<template>
  <SIconPark name="check" type="primary" />
  <SIconPark name="check" type="success" />
  <SIconPark name="check" type="warning" />
  <SIconPark name="check" type="danger" />
  <SIconPark name="check" type="info" />
</template>
```

### 动画效果示例

```vue
<template>
  <!-- 旋转动画 -->
  <SIconPark name="loading" spin />
  
  <!-- 旋转角度 -->
  <SIconPark name="refresh" rotation="45" />
  
  <!-- 翻转 -->
  <SIconPark name="arrow-right" flip="horizontal" />
  <SIconPark name="arrow-up" flip="vertical" />
</template>
```

### 高级用法示例

```vue
<template>
  <!-- 双色填充 -->
  <SIconPark 
    name="heart" 
    theme="two-tone" 
    :fill="['#ff6b6b', '#ffd93d']"
    size="32"
  />
  
  <!-- 自定义描边 -->
  <SIconPark 
    name="star" 
    theme="outline" 
    stroke="#ff6b6b"
    :strokeWidth="2"
    size="32"
  />
</template>
```

## 可用图标

IconPark 提供了丰富的图标库，包括：

- 基础图标：home、user、settings、search 等
- 箭头图标：arrow-up、arrow-down、arrow-left、arrow-right 等
- 状态图标：check、close、loading、warning 等
- 媒体图标：play、pause、stop、volume 等
- 文件图标：file、folder、image、video 等
- 社交图标：wechat、qq、weibo、github 等

更多图标请参考 [IconPark 官网](https://iconpark.oceanengine.com/)

## 自定义 SVG 图标

组件支持使用自定义 SVG 图标。你可以在 `iconpark.tsx` 文件中的 `customSvgMap` 对象中添加你的自定义 SVG：

```typescript
const customSvgMap: Record<string, string> = {
  'users': `<svg data-icon="users" role="img" viewBox="0 0 640 512" aria-hidden="true">
    <path class="" fill="currentColor" d="M320 16a104 104 0 1 1 0 208 104 104 0 1 1 0-208zM96 88a72 72 0 1 1 0 144 72 72 0 1 1 0-144zM0 416c0-70.7 57.3-128 128-128 12.8 0 25.2 1.9 36.9 5.4-32.9 36.8-52.9 85.4-52.9 138.6l0 16c0 11.4 2.4 22.2 6.7 32L32 480c-17.7 0-32-14.3-32-32l0-32zm521.3 64c4.3-9.8 6.7-20.6 6.7-32l0-16c0-53.2-20-101.8-52.9-138.6 11.7-3.5 24.1-5.4 36.9-5.4 70.7 0 128 57.3 128 128l0 32c0 17.7-14.3 32-32 32l-86.7 0zM472 160a72 72 0 1 1 144 0 72 72 0 1 1 -144 0zM160 432c0-88.4 71.6-160 160-160s160 71.6 160 160l0 16c0 17.7-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32l0-16z"></path>
  </svg>`
};
```

然后就可以像使用普通图标一样使用：

```vue
<template>
  <SIconPark name="users" size="32" color="#409eff" />
</template>
```

## 注意事项

1. 图标名称需要使用 kebab-case 格式（如：`user-setting`）
2. 组件会自动将图标名称转换为 PascalCase 格式来匹配 `@icon-park/svg` 的导出
3. 如果图标不存在，会在控制台输出警告信息
4. 建议在使用前先确认图标名称是否正确
5. 自定义 SVG 图标会优先于 IconPark 图标进行渲染
6. 自定义 SVG 中的 `fill="currentColor"` 会继承组件的 `color` 属性

## 样式定制

组件使用 CSS 变量来支持主题定制：

```css
.s-iconpark {
  --s-iconpark-color: inherit;
}

.s-iconpark--primary {
  --s-iconpark-color: var(--s-color-primary);
}
```

你可以通过覆盖这些 CSS 变量来定制组件的样式。
