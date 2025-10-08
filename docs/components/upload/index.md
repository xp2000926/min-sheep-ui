# Upload 上传

## 基础用法

:::demo

```vue
<template>
    <s-upload :file-list="fileList"></s-upload>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const fileList = ref([
    
])
</script>
```

:::

## API

### 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 | 备注 |
| --- | --- | --- | --- | --- | --- |
| action |  请求 URL | `string` | — | `#` | — |
| headers | 设置上传的请求头部 | `object`<!--Headers \| Record<string, any>--> |—  |— | —|
| method |  设置上传请求方法 | `string` | — | post | — |
