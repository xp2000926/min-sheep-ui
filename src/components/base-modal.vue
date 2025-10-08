<template><button @click="open">打开</button>
  <BaseModal v-model="modalVisible">
    <div
    style="
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateY(-50%) translateX(-50%);"
    >
      <img src="@/assets/sheep.webp" />
    </div>
  </BaseModal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {BaseModal} from '../../packages/base-modal'
const modalVisible = ref(false)
const open = () => {
  modalVisible.value = true
}
</script>
