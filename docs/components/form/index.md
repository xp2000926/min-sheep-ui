# 表单 Form

## 基础用法

传入 model 属性设置数据模型。

:::demo 传入 model 属性设置数据模型
```vue
<template>
  <s-form :model="model">
    <s-form-item label="用户名">
      <input v-model="model.user"/>
    </s-form-item>
  </s-form>
</template>
<script setup>
  import {ref} from 'vue'
  const model = ref({
    user: 'tom'
  })
</script>
```
:::

## 水平/垂直排列
设置layout属性可以设置标签和控件的排列方式为垂直方向。
:::demo layout默认为horizontal，即水平方向排列
```vue
<template>
  <p>
    <span>layout:</span>
    <label>
      <input type="radio" value="vertical" v-model="layout"/>
      vertical
    </label>
    <label>
      <input type="radio" value="horizontal" v-model="layout"/>
      horizontal
    </label>
  </p>
  <s-form :model="model" :layout="layout">
    <s-form-item label="用户名：">
      <input v-model="model.user"/>
    </s-form-item>
  </s-form>
</template>
<script setup>
import {ref} from 'vue'
const layout = ref('vertical')
const model = ref({
    user: 'tom'
  })
</script>
```
:::

## 表单样式

水平排列模式下，label-size 可以设置 label 的宽度；label-align 可以设置 label 的对齐方式。

:::demo label-size 提供 sm、md、lg 三种大小，分别对应 80px、100px、150px，默认为 md；label-align 可选值为 start、center、end，默认为 start。

```vue
<template>
  <p>
    <span>labelSize:</span>
    <label>
      <input type="radio" value="sm" v-model="labelSize" />
      sm
    </label>
    <label>
      <input type="radio" value="md" v-model="labelSize" />
      md
    </label>
    <label>
      <input type="radio" value="lg" v-model="labelSize" />
      lg
    </label>
  </p>
  <p>
    <span>labelAlign:</span>
    <label>
      <input type="radio" value="start" v-model="labelAlign" />
      start
    </label>
    <label>
      <input type="radio" value="center" v-model="labelAlign" />
      center
    </label>
    <label>
      <input type="radio" value="end" v-model="labelAlign" />
      end
    </label>
  </p>
  <s-form
    :model="model"
    layout="horizontal"
    :labelAlign="labelAlign"
    :labelSize="labelSize"
  >
    <s-form-item label="用户名：">
      <input />
    </s-form-item>
    <s-form-item label="密码：">
      <input type="password" />
    </s-form-item>
  </s-form>
</template>
<script setup>
import { ref } from 'vue'
const model = ref({
  user: 'tom',
  password: ''
})
const labelSize = ref('md')
const labelAlign = ref('start')
</script>
```
:::
