# Input 输入框

## 基础用法

:::demo
```vue
<template>
  <s-input v-model="inputValue"  placeholder="Please input" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const inputValue = ref('')
</script>
```
:::

<!-- ## 禁用状态

:::demo 通过 `disabled` 属性指定是否禁用 input 组件
```vue
<template>
  <s-input
    v-model="inputValue"
    disabled
    placeholder="Please input"
  />
</template>

<script setup>
import { ref } from 'vue'
const inputValue = ref('')
</script>
```
::: -->


<!-- ## 禁用状态

:::demo
::: -->