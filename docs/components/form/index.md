# Form

## 基础用法

:::demo 传入 model 属性设置数据模型
```vue
<template>
<s-form :model="model" :inline="true" size="">
    <s-form-item label="用户名:" prop="user">
        <s-input v-model="model.user" />
    </s-form-item>
</s-form>
{{model}}
</template>
<script setup>
import { ref } from 'vue'
const model = ref({
    user:'tom'
})
</script>
```
:::

<!--
## 水平/垂直排列

设置 inline 属性可以设置标签和控件的排列方式为垂直方向。
:::demo inline 默认为 false,水平方向排列
```vue
<template>
    <p>
        <span>inline:</span>
        <label>
        <input type="radio" :value="true" v-model="inline"/>
        垂直
        </label>
        <label>
        <input type="radio" :value="false" v-model="inline"/>
        水平
        </label>
    </p>
<s-form :model="model" :inline="inline">
    <s-form-item label="用户名：">
    <s-input v-model="model.user"/>
    </s-form-item>
</s-form>
</template>
<script setup>
import {ref} from 'vue'
const inline = ref(true)
const model = ref({
    user: 'tom'
})
</script>
```
:::
-->