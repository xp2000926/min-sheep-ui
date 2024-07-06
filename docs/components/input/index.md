# Input 输入框

## 基础用法

:::demo
```vue
<template>
  <s-input class="mb-4" v-model="input"  placeholder="请输入" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
</script>
```
:::

## 禁用状态

:::demo 通过 `disabled` 属性指定是否禁用 input 组件
```vue
<template>
  <s-input
    v-model="inputValue"
    disabled
    placeholder="请输入"
  />
</template>

<script setup>
import { ref } from 'vue'
const inputValue = ref('')
</script>
```
:::


## 尺寸

:::demo
```vue
<template>
  <s-input class="mb-4" placeholder="小"  size="small" v-model="smallInput"  />
  <s-input class="mb-4" placeholder="中"   v-model="defaultInput"  />
  <s-input size="large" placeholder="大"  v-model="largeInput"  />
</template>
<script setup>
import { ref } from 'vue'
const smallInput = ref('')
const defaultInput = ref('')
const largeInput = ref('')
</script>
```
:::

## 一键清空

:::demo 使用clearable属性即可得到一个可一键清空的输入框
```vue
<template>
  <s-input
    v-model="input"
    style="width: 240px"
    placeholder="请输入"
    clearable
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
</script>
```
:::

## 密码框

:::demo 使用 show-password 属性即可得到一个可切换显示隐藏的密码框
```vue
<template>
  <s-input
    v-model="input"
    style="width: 240px"
    type="password"
    placeholder="请输入密码"
    show-password
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
</script>
```
:::
## 圆角

:::demo 文本输入可以是圆角的。
```vue
<template>
  <s-input class="mb-4" size="small" round placeholder="小" />
  <s-input class="mb-4" round placeholder="中" />
  <s-input size="large" round placeholder="大" />
</template>
```
:::

## 验证状态

:::demo 输入的验证状态可以脱离表单使用。
```vue
<template>
  <s-input class="mb-4" v-model="defaultInput"  />
  <s-input class="mb-4" status="warning" v-model="warningInput"  />
  <s-input class="mb-4"  status="error" v-model="errorInput"  />
  <s-input status="success" v-model="successInput"  />
</template>
<script setup>
import { ref } from 'vue'
const defaultInput = ref('')
const warningInput = ref('')
const errorInput = ref('')
const successInput = ref('')
</script>
```
:::