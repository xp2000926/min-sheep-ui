<template>  <div ref="host" class="host" @click="open">host</div>
    <BasePopover v-model="visible" :host="host">
overlay
    </BasePopover>
</template>

<script setup lang="ts">
import { ref } from "vue"
import {BasePopover} from "../../packages/base-popover"
const visible = ref(false)
const host = ref()
const open = () => {
  visible.value = !visible.value
}
</script>

<style lang="scss" scoped>

</style>
