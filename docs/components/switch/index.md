# Switch 开关

> 表示两种相互对立的状态间的切换，多用于触发「开/关」。

## 基础用法

:::demo 绑定 v-model 到一个 Boolean 类型的变量。 可以使用 --s-switch-on-color 属性与 --s-switch-off-color 属性来设置开关的背景色。
```vue
<template>
  <s-switch v-model="value1" />
  <s-switch
    v-model="value2"
    class="ml-2"
    style="--s-switch-on-color: #13ce66; --s-switch-off-color: #ff4949"
  />
</template>
<script setup>
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(true)
</script>
```
:::

## 尺寸

:::demo
```vue
<template>
  <s-switch
    v-model="value"
    size="large"
    active-text="Open"
    inactive-text="Close"
  />
  <br />
  <s-switch v-model="value" active-text="Open" inactive-text="Close" />
  <br />
  <s-switch
    v-model="value"
    size="small"
    active-text="Open"
    inactive-text="Close"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(true)
</script>
```
:::

## 自定义操作图标

:::demo 使用 active-action 和 inactive-action 属性来添加图标。
```vue
<template>
  <s-switch v-model="value1">
    <template #activeAction>
      <span class="custom-active-action">T</span>
    </template>
    <template #inactiveAction>
      <span class="custom-inactive-action">F</span>
    </template>
  </s-switch>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref(true)
</script>
```
:::