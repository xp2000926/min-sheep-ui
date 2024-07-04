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

<script setup>
import { ref } from 'vue'

const value = ref(true)
</script>
```
:::

## 文字描述

:::demo 使用active-text属性与inactive-text属性来设置开关的文字描述。 使用 inline-prompt 属性来控制文本是否显示在点内。<br><br>使用active-text属性与inactive-text属性来设置开关的文字描述。
```vue
<template>
  <s-switch
    v-model="value1"
    class="mb-2"
    active-text="Pay by month"
    inactive-text="Pay by year"
  />
  <br />
  <s-switch
    v-model="value2"
    class="mb-2"
    style="--s-switch-on-color: #13ce66; --s-switch-off-color: #ff4949"
    active-text="Pay by month"
    inactive-text="Pay by year"
  />
  <br />
  <s-switch
    v-model="value3"
    inlinePrompt
    active-text="是"
    inactive-text="否"
  />
  <s-switch
    v-model="value4"
    class="ml-2"
    inlinePrompt
    style="--s-switch-on-color: #13ce66; --s-switch-off-color: #ff4949"
    active-text="Y"
    inactive-text="N"
  />
  <s-switch
    v-model="value6"
    class="ml-2"
    width="60"
    inlinePrompt
    active-text="超出省略"
    inactive-text="超出省略"
  />
  <s-switch
    v-model="value5"
    class="ml-2"
    inlinePrompt
    style="--s-switch-on-color: #13ce66; --s-switch-off-color: #ff4949"
    active-text="完整展示多个内容"
    inactive-text="多个内容"
  />
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(true)
const value3 = ref(true)
const value4 = ref(true)
const value5 = ref(true)
const value6 = ref(true)
</script>
```
:::

## 形状

:::demo 开关可以设为方形。
```vue
<template>
  <s-switch v-model="value1" class="ml-2"  :round="false" />
  <s-switch v-model="value1"/>
</template>
<script setup>
import { ref } from 'vue'

const value1 = ref(true)
</script>
```
:::

## 禁用状态

:::demo 设置disabled属性，接受一个Boolean，设置true即可禁用。
```vue
<template>
  <s-switch v-model="value1" disabled />
  <s-switch v-model="value2" class="ml-2" disabled :round="false" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(true)
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
<script setup>
import { ref } from 'vue'

const value1 = ref(true)
</script>
```
:::