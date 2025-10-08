<template>
  <div>
    datetimerange
    <el-date-picker
      v-model="value1"
      type="monthrange"
      placeholder="monthrange"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
/*
| 'datetime'
  | 'datetimerange'
  | 'daterange'
  | 'monthrange';
*/
const value1 = ref('');
</script>

<style lang="scss" scoped></style>
