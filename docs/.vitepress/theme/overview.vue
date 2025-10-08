<template>
  <div>
     <s-input v-model="input" placeholder="请输入内容" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
const input = ref('');
</script>

<style>

</style>
