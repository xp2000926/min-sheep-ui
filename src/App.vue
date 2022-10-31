<script setup lang="ts">
const confirm = () => console.log('confirm')
</script>
<template>
  <!-- 
    1.primary,secondary, text
    2. 尺寸 size
    3. disabled
    4. 块级block
    5. iconButton
  -->
  <SButton type="primary">确定</SButton>
  <SButton>取消</SButton>
  <SButton type="text">text</SButton>
  <SButton size="mini">Mini</SButton>
  <SButton size="small">Small</SButton>
  <SButton type="primary" @click="confirm">Primary</SButton>
  <SButton type="primary" size="small" disabled @click="confirm">
    Disabled
  </SButton>
  <SButton>Medium</SButton>
  <SButton size="large">Large</SButton>
</template>

<style scoped></style>
