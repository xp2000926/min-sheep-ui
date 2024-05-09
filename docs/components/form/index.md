# 表单 Form

## 基础用法

传入 model 属性设置数据模型。

:::demo 传入 model 属性设置数据模型
```vue
<template>
  <s-form :model="model">
    <s-form-item label="用户名">
      <s-input v-model="model.user" />
    </s-form-item>
  </s-form>
</template>
<script setup>
import { ref } from 'vue'
const model = ref({
  user: 'tom'
})
</script>
```
:::

## 水平/垂直排列

设置 layout 属性可以设置标签和控件的排列方式为垂直方向。

:::demo layout 默认为 horizontal，即水平方向排列
```vue
<template>
  <p>
    <span>layout:</span>
    <label>
      <input type="radio" value="vertical" v-model="layout" />
      vertical
    </label>
    <label>
      <input type="radio" value="horizontal" v-model="layout" />
      horizontal
    </label>
  </p>
  <s-form :model="model" :layout="layout">
    <s-form-item label="用户名：">
      <s-input v-model="model.user" />
    </s-form-item>
  </s-form>
</template>
<script setup>
import { ref } from 'vue'
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
      <s-input />
    </s-form-item>
    <s-form-item label="密码：">
      <s-input type="password" />
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

## 表单校验

:::demo
```vue
<template>
  <s-form
    :model="model"
    :rules="rules"
    layout="vertical"
    @submit="onLogin"
    ref="loginForm"
  >
    <s-form-item hidden  label="id">
      <s-input v-model="model.id" />
    </s-form-item>
    <s-form-item  label="用户名：" prop="user">
      <s-input v-model="model.user" />
    </s-form-item>
    <s-form-item label="密码：" prop="pwd">
      <s-input type="password" v-model="model.pwd" />
    </s-form-item>
    <s-form-item>
      <s-button></s-button>
    </s-form-item>
  </s-form>
</template>
<script setup>
import { ref } from 'vue'
const model = ref({
  id:'1111',
  user: '',
  pwd: ''
})
const rules = ref({
  user: [{ required: true, message: '用户名为必填项', trigger: 'blur' }],
  pwd: [{ required: true, message: '密码为必填项', trigger: 'blur' }]
})
const loginForm = ref()

const onLogin = () => {
  loginForm.value.validate(valid => {
    if (valid) {
      alert('登录成功')
    } else {
      alert('校验失败，请重试！')
    }
  })
}
</script>
```
:::

## Form API

### Form 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 | 备注 |
| --- | --- | --- | --- | --- | --- |
| model | 表单数据对象 | Object | — | — |  |
| rules | 表单验证规则 |  | — | — |  |
| label-width | 表单域标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item 会继承该值。支持 auto。 | `string` | — | — | 未实现 |

### Form 插槽

| 插槽名 | 说明           | 子标签   |
| ------ | -------------- | -------- |
| —      | 自定义默认内容 | FormItem |

## FormItem API

### FormItem 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 | 备注 |
| --- | --- | --- | --- | --- | --- |
| prop | 表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的 | `string` | 传入 Form 组件的 model 中的字段 | — |  |
| label | 标签文本 | `string` | — | — |  |
| label-width | 表单域标签的的宽度，例如 '50px'。支持 auto。 | `string` | — | — | 未实现 |
| error | 表单域验证错误信息, 设置该值会使表单验证状态变为 error，并显示该错误信息 | `string` | — | — | 未实现 |
| hidden | 影藏这个FormItem | `boolean` | — | false |  |

### Form-Item 插槽

| 插槽名 | 说明                                           | 备注   |
| ------ | ---------------------------------------------- | ------ |
| error  | 自定义表单校验信息的显示方式，参数为 { error } | 未实现 |
