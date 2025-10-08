# Avatar 头像

用图标、图片或者字符的形式展示用户或事物信息。

## 基本用法

通过 shape 和 size 设置头像的形状和大小。

:::demo

```vue
<template>
  <div class="panel">
    <div class="circle-panel">
      <div class="title">circle</div>
      <div class="content">
        <div class="block">
          <s-avatar :size="50" :src="circleUrl" />
        </div>
        <div class="block" v-for="item in sizeList" :key="item">
          <s-avatar :size="item" :src="circleUrl" />
        </div>
      </div>
    </div>
    <div class="square-panel">
      <div class="title">square</div>
      <div class="content">
        <div class="block">
          <s-avatar shape="square" :size="50" :src="squareUrl" />
        </div>
        <div class="block" v-for="item in sizeList" :key="item">
          <s-avatar shape="square" :size="item" :src="circleUrl" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const circleUrl = ref(
  'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
);
const squareUrl = ref(
  'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'
);
const sizeList = ref(['large', 'default', 'small']);
</script>
<style lang="scss" scoped>
.panel {
  display: flex;
  gap: 10px;
  width: 100%;
}
.circle-panel,
.square-panel {
  flex: 1;
  .title {
    text-align: center;
    margin-bottom: 10px;
    font-size: 14px;
    color: #8492a6;
  }
}
.content {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  .block {
    flex: 1;
    border-right: 1px solid rgba(224, 230, 237, 0.5);
  }
}
</style>
```

:::

## 展示类型

:::demo

```vue
<template>
  <div class="panel">
    <div class="block">
      <s-avatar icon="user" />
    </div>
    <div class="block">
      <s-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
    </div>
    <div class="block">
      <s-avatar>user</s-avatar>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.panel {
  display: flex;
}
.block {
  flex: 1;
}
</style>
```

:::

### 图片如何适应容器框

:::demo

```vue
<template>
  <div class="demo-fit">
    <div class="block" v-for="fit in fits" :key="fit">
      <span class="title">{{ fit }}</span>
      <s-avatar shape="square" :size="100" :fit="fit" :src="url"></s-avatar>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const fits = ref(['fill', 'contain', 'cover', 'none', 'scale-down']);
const url = ref(
  'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
);
</script>
<style lang="scss" scoped>
.demo-fit {
  display: flex;
  text-align: center;
  justify-content: space-between;
  .block {
    flex: 1;
    display: flex;
    flex-direction: column;
    flex-grow: 0;
  }
}
</style>
```

:::

## 颜色

:::demo

```vue
<template>
  <s-avatar
    :style="{
      color: 'yellow',
      backgroundColor: 'red'
    }"
  >
    M
  </s-avatar>
</template>
```

:::

## 头像组

人多不一定是好事。

:::demo

```vue
<template>
  <div class="mb-4">
    <s-avatar-group :options="options" :max="3">
      <template #avatar="{ options: { color, text } }">
        <s-avatar :style="{ backgroundColor: color }">{{ text }}</s-avatar>
      </template>
      <template #rest="{ rest, options: restOptions }">
        <s-avatar>+{{ rest }}</s-avatar>
      </template>
    </s-avatar-group>
  </div>
  <div>
    <s-avatar-group :options="options">
      <template #avatar="{ options: { color, text } }">
        <s-avatar :style="{ backgroundColor: color }">{{ text }}</s-avatar>
      </template>
    </s-avatar-group>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const options = ref([
  {
    color: '#7BC616',
    text: 'A'
  },
  {
    color: '#14C9C9',
    text: 'B'
  },
  {
    color: '#168CFF',
    text: 'C'
  },
  {
    color: '#FF7D00',
    text: 'D'
  },
  {
    color: '#FFC72E',
    text: 'E'
  }
]);
</script>
```

:::
## 加载失败时显示的图像

:::demo
```vue
<template>
  <s-avatar src="empty.png" fallback-src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
</template>
```
:::



## API

### 属性

| 属性名 | 说明 | 类型 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| size | 头像的尺寸 | <!--^[enum]-->`'large' \| 'default' \| 'small'` | — |  |
| src | 头像的地址 | `string` | — |  |
| alt | 描述图像的替换文本 | `string` |  |  |
| shape | 设置头像的形状 | `'circle'\|'square'` | `circle` |  |
| icon | 设置头像的图标类型，参考 Icon 组件 | `string` |  |  |
| fit | 图片在容器内的的适应类型 | `boolean` | false |  |
| fallback-src | 头像加载失败时显示的图片的地址 | `string` | '' |  |
| lazy | 是否让图片进入视口再加载 | `boolean` | false | 开发中 |

### Avatar Events

| 属性名 | 说明 | 类型 |
| --- | --- | --- |
| error | 图片加载失败时触发 | `(e: Event) => void` |

### AvatarGroup

| 属性名 | 说明 | 类型 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| max | 组内头像显示的最大个数 | `number` | `undefined` |  |
| options | 头像组内头像的配置项，每一项都是一个对象 | `Array` | `[]` |  |

### Avatar Slots

| 名称    | 参数 | 说明               |
| ------- | ---- | ------------------ |
| default | `()` | 自定义头像展示内容 |

### AvatarGroup Slots

| 名称 | 参数 | 说明 |
| --- | --- | --- |
| avatar | `(info: { option: { [key: string]: any } })` | 头像组头像 |
| default | `()` | 头像组内填充的内容 |
| rest | `(info: { options: Array<{ [key: string]: any }>, rest: number })` | 头像组溢出容器 |

