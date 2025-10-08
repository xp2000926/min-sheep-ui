# Badge 徽章

展示新消息数量。

## 基本用法

定义`value`属性，它接受`Number`或者`String`。

:::demo

```vue
<template>
  <s-badge :value="12" class="item">
    <s-button size="small">评论</s-button>
  </s-badge>
  <s-badge :value="3" class="item">
    <s-button size="small">回复</s-button>
  </s-badge>
  <s-badge :value="1" class="item" type="primary">
    <s-button size="small">评论</s-button>
  </s-badge>
  <s-badge :value="2" class="item" type="warning">
    <s-button size="small">回复</s-button>
  </s-badge>
</template>
<style scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```

:::

## 独立使用

:::demo

```vue
<template>
  <s-badge :value="2" independent />
  <s-badge :value="2" independent text-color="#86909C" color="#E5E6EB"  />
  <s-badge :value="200" :max="99" independent/>
  <s-badge :value="16" independent />
</template>
```

:::

## 最大值

可自定义最大值。

设置`max`属性可以定义角标显示的最大值。

:::demo

```vue
<template>
  <s-badge :value="200" :max="99" class="item">
    <s-button size="small">评论</s-button>
  </s-badge>
</template>
```

:::

## 自定义内容

可以显示数字以外的文本内容。

定义value为String类型是时可以用于显示自定义文本。

:::demo

```vue
<template>
  <s-badge value="new" class="item">
    <s-button size="small">评论</s-button>
  </s-badge>
  <s-badge value="hot" class="item">
    <s-button size="small">回复</s-button>
  </s-badge>
  <s-badge value="99" class="item">
    <s-button>分享</s-button>
    <template #content="{ value }">
      11
      {{ value }}
    </template>
  </s-badge>
</template>
<style scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```

:::

## 小红点

除了数字外，设置`is-dot`属性，它接受一个 `Boolean`。

:::demo

```vue
<template>
  <s-badge is-dot class="item">数据查询</s-badge>
  <s-badge is-dot class="item">
    <s-button class="share-button" icon="s-icon-share" type="primary">
    </s-button>
  </s-badge>
</template>
<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```

:::

## 状态点

> 设置 is-status，可以得到不同的状态点。

:::demo

```vue
<template>
  <div class="mb-4">
    <s-badge is-status />
    <s-badge type="primary" is-status />
    <s-badge type="success" is-status />
    <s-badge type="warning" is-status />
    <s-badge type="danger" is-status />
    <s-badge type="info" is-status />
    <s-badge color="#42b983" is-status />
  </div>
  <div class="mb-4">
    <s-badge is-status text="Normal" />
    <s-badge type="primary" is-status text="primary" />
    <s-badge type="success" is-status text="success" />
    <s-badge type="warning" is-status text="warning" />
    <s-badge type="danger" is-status text="danger" />
    <s-badge type="info" is-status text="info" />
  </div>
</template>
```

:::

## 自定义颜色

设置`color`属性可以自定义颜色。

:::demo

```vue
<template>
  <s-badge is-dot color="#42b983" class="item">数据查询 </s-badge>
  <s-badge :value="1" color="#42b983" class="item">
    <s-button class="share-button" icon="s-icon-share" type="primary">
      数据查询
    </s-button>
  </s-badge>
  <s-badge
    :value="1"
    color="linear-gradient(to right, red 0%, orange 50%, yellow 100%)"
    class="item"
  >
    <s-button class="share-button" icon="s-icon-share" type="primary">
      数据查询
    </s-button>
  </s-badge>
  <s-badge
    is-dot
    color="linear-gradient(to right, red 0%, orange 50%, yellow 100%)"
    class="item"
    >数据查询
  </s-badge>
  <div class="mb-4">
    <s-badge
      v-for="color in colors"
      :key="color"
      :color="color"
      is-status
      :text="color"
    />
  </div>
  <div class="mb-4">
    <s-badge
      v-for="color in customColors"
      :key="color"
      :color="color"
      is-status
      :text="color"
    />
  </div>
</template>
<script setup>
const colors = [
  'red',
  'orangered',
  'orange',
  'gold',
  'lime',
  'green',
  'cyan',
  'arcoblue',
  'purple',
  'pinkpurple',
  'magenta',
  'gray',
];

const customColors = [
  '#F53F3F',
  '#7816FF',
  '#00B42A',
  '#165DFF',
  '#FF7D00',
  '#EB0AA4',
  '#7BC616',
  '#86909C',
  '#B71DE8',
  '#0FC6C2',
  '#FFB400',
  '#168CFF',
  '#FF5722',
];
</script>
```

:::

## Badge API

### 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| value | 显示值 | `string`,`number` | -- | -- |
| max | 最大值，超过最大值会显示 '{max}+'，要求 value 是 Number 类型 | `number` | -- | -- |
| is-dot | 小圆点 | `boolean` | -- | false |
| hidden | 隐藏 badge | `boolean` | -- | false |
| type | 类型 | `'string'\| 'primary'\|'success' \|'warning'\|'danger'\|'info'` |  |  |
| is-status | 状态点 | `boolean` | -- | false |
| text | 自定义提示内容(必须和is-status一起使用) | `string` | -- | -- |
| text-color |  Badge的文字样式| `string` | -- | -- |
| color | Badge 的背景样式（支持渐变色，背景图片["url(图片地址)"]） | `string` | -- | -- |
| independent | 独立使用  | `boolean` | -- | false |

### 插槽

| 插槽名  | 参数 | 说明           | 类型                          |
| ------- | ---- | -------------- | ----------------------------- |
| default | `()` | 自定义默认内容 | -                             |
| content | `()` | 自定义显示内容 | `{ value: string \| number }` |
