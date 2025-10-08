# Form 表单

### 基础用法

:::demo
```vue
<template>
  <s-form :model="form" label-width="120px">
    <s-form-item label="活动名称">
        <s-input v-model="form.name" />
    </s-form-item>
  </s-form>
</template>
<script setup>
import { ref } from 'vue'
const form=ref({
  name:''
})
</script>

```
:::