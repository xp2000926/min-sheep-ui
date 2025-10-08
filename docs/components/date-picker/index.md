# DatePicker 日期选择器

## 只使用面板

这个功能或许有的时候能管点用，我实在不忍心看大家强行调样式。

:::demo

```vue
<template>
  <s-date-picker-panel v-mmodel="date" type='date' />
  <s-range-picker-panel v-mmodel="date" type='date' />
</template>
<script setup>
import { ref } from 'vue';
const date = ref(new Date());
</script>
```

:::
