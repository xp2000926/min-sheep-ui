
<template>
  <div ref="host" class="host" @click="open">host</div>
  <Popover v-model="visible" :host="host" title=""> overlay </Popover>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import {Popover} from "../../packages/popover"
const visible = ref(false)
const host = ref()
const open = () => {
  visible.value = !visible.value
}
</script>
