<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import Test from './components/Test';
const onclickFn = () => {
  alert(1);
};
</script>
<template>
  <HelloWorld msg="Hello Vue 3 + Vite + Typescript + Vite" />
  <Test @click="onclickFn">
    <template #default>aaaa</template>
    <template #title><h3>title</h3></template>
  </Test>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
