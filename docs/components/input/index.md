# Input 输入框

## 基础用法

:::demo

```vue
<template>
  <s-input v-model="input" placeholder="请输入内容" />
</template>
<script setup lang="ts">
import { ref } from 'vue';
const input = ref('');
</script>
```

:::

## 禁用状态

通过 `disabled` 属性指定是否禁用 input 组件

:::demo

```vue
<template>
  <s-input v-model="input" disabled placeholder="请输入内容" />
</template>
<script setup lang="ts">
import { ref } from 'vue';
const input = ref('');
</script>
```

:::

## 密码框

:::demo

```vue
<template>
  <s-input placeholder="请输入密码" v-model="input" show-password />
  <s-input placeholder="自定义密码图标" v-model="input1" show-password>
    <template #password-visible-icon> 1 </template>
    <template #password-invisible-icon> 2 </template>
  </s-input>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const input = ref('');
const input1 = ref('');
</script>
```

:::

## 输入长度限制

>

## API

### 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 | 备注 |
| --- | --- | --- | --- | --- | --- |
| type | 类型 | string | — | text |  |
| v-model | 绑定值 | `'string'\|'number'` | — | — |  |
| placeholder | 输入框占位文本 | string | — | — |  |
| maxlength | 最大输入长度 | number | — | undefined |  |
| minlength | 最小输入长度 | number | — | undefined |  |
| showCount | 是否显示字数统计, 只在 type 为 'text' 或 'textarea' 的时候生效 | `boolean` | — | false | 开发中 |
| status | 验证状态	 | `'success' \| 'warning'\| 'error'` | — | undefined | 开发中 |
| clearable | 是否可清空 | boolean | — | false | 开发中 |
| prefix-icon | 输入框头部图标 | string | — | — | 开发中 |
| suffix-icon | 输入框尾部图标 | string | — | — | 开发中 |

### 槽口

| 属性名                  | 参数 | 说明                     |
| ----------------------- | ---- | ------------------------ |
| password-visible-icon   | `()` | 密码显示时的密码开关图标 |
| password-invisible-icon | `()` | 密码关闭时的密码开关图标 |
| prefix                  | `()` | 输入框头部内容           |
| suffix                  | `()` | 输入框尾部内容           |
