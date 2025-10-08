<template>
  <!-- 
    1.primary,secondary, text
    2. 尺寸 size
    3. disabled
    4. 块级block
    5. iconButton
  -->
  <div class="mb-4">
    <SButton>Default</SButton>
    <SButton type="primary">Primary</SButton>
    <SButton type="success">Success</SButton>
    <SButton type="info">Info</SButton>
    <SButton type="warning">Warning</SButton>
    <SButton type="danger">Danger</SButton>
  </div>
  <div class="mb-4">
    <SButton plain>Default</SButton>
    <SButton type="primary" plain>Primary</SButton>
    <SButton type="success" plain>Success</SButton>
    <SButton type="info" plain>Info</SButton>
    <SButton type="warning" plain>Warning</SButton>
    <SButton type="danger" plain>Danger</SButton>
  </div>
  <div class="mb-4">
    <SButton dashed>Default</SButton>
    <SButton type="primary" dashed>Primary</SButton>
    <SButton type="success" dashed>Success</SButton>
    <SButton type="info" dashed>Info</SButton>
    <SButton type="warning" dashed>Warning</SButton>
    <SButton type="danger" dashed>Danger</SButton>
  </div>
  <div class="mb-4">
    <SButton round>Default</SButton>
    <SButton type="primary" round>Primary</SButton>
    <SButton type="success" round>Success</SButton>
    <SButton type="info" round>Info</SButton>
    <SButton type="warning" round>Warning</SButton>
    <SButton type="danger" round>Danger</SButton>
  </div>
  <div class="mb-4">
    <SButton disabled>Default</SButton>
    <SButton type="primary" disabled>Primary</SButton>
    <SButton type="success" disabled>Success</SButton>
    <SButton type="info" disabled>Info</SButton>
    <SButton type="warning" disabled>Warning</SButton>
    <SButton type="danger" disabled>Danger</SButton>
  </div>
  <div class="mb-4">
    <SButton plain disabled>Default</SButton>
    <SButton type="primary" plain disabled>Primary</SButton>
    <SButton type="success" plain disabled>Success</SButton>
    <SButton type="info" plain disabled>Info</SButton>
    <SButton type="warning" plain disabled>Warning</SButton>
    <SButton type="danger" plain disabled>Danger</SButton>
  </div>
  <div class="mb-4">
    <SButton dashed disabled>Default</SButton>
    <SButton type="primary" dashed disabled>Primary</SButton>
    <SButton type="success" dashed disabled>Success</SButton>
    <SButton type="info" dashed disabled>Info</SButton>
    <SButton type="warning" dashed disabled>Warning</SButton>
    <SButton type="danger" dashed disabled>Danger</SButton>
  </div>
  <div class="mb-4">
    <SButton circle dashed></SButton>
    <SButton type="primary" circle dashed></SButton>
    <SButton type="success" circle dashed></SButton>
    <SButton type="info" circle dashed></SButton>
    <SButton type="warning" circle dashed></SButton>
    <SButton type="danger" circle dashed></SButton>
  </div>
  <div class="mb-4">
    <SButton circle dashed disabled></SButton>
    <SButton type="primary" circle dashed disabled></SButton>
    <SButton type="success" circle dashed disabled></SButton>
    <SButton type="info" circle dashed disabled></SButton>
    <SButton type="warning" circle dashed disabled></SButton>
    <SButton type="danger" circle dashed disabled></SButton>
  </div>
  <div class="mb-4">
    <SButton circle></SButton>
    <SButton type="primary" circle></SButton>
    <SButton type="success" circle></SButton>
    <SButton type="info" circle></SButton>
    <SButton type="warning" circle></SButton>
    <SButton type="danger" circle></SButton>
  </div>
  <div class="mb-4">
    <SButton circle disabled></SButton>
    <SButton type="primary" circle disabled></SButton>
    <SButton type="success" circle disabled></SButton>
    <SButton type="info" circle disabled></SButton>
    <SButton type="warning" circle disabled></SButton>
    <SButton type="danger" circle disabled></SButton>
  </div>
  <div class="mb-4">
    <SButton plain circle></SButton>
    <SButton type="primary" plain circle></SButton>
    <SButton type="success" plain circle></SButton>
    <SButton type="info" plain circle></SButton>
    <SButton type="warning" plain circle></SButton>
    <SButton type="danger" plain circle></SButton>
  </div>

  <div class="mb-4">
    <SButton circle plain disabled></SButton>
    <SButton type="primary" plain circle disabled></SButton>
    <SButton type="success" plain circle disabled></SButton>
    <SButton type="info" plain circle disabled></SButton>
    <SButton type="warning" plain circle disabled></SButton>
    <SButton type="danger" plain circle disabled></SButton>
  </div>
  <div class="mb-4">
    <SButton :block="true">Default</SButton>
    <SButton :block="true" type="primary">Primary</SButton>
    <SButton :block="true" type="success">Success</SButton>
    <SButton :block="true" type="info">Info</SButton>
    <SButton :block="true" type="warning">Warning</SButton>
    <SButton :block="true" type="danger">Danger</SButton>
  </div>
  <div class="mb-4">
    <SButton :block="true" plain>Default</SButton>
    <SButton :block="true" plain type="primary">Primary</SButton>
    <SButton :block="true" plain type="success">Success</SButton>
    <SButton :block="true" plain type="info">Info</SButton>
    <SButton :block="true" plain type="warning">Warning</SButton>
    <SButton :block="true" plain type="danger">Danger</SButton>
  </div>
  <div class="mb-4">
    <SButton size="large">Large</SButton>
    <SButton>Default</SButton>
    <SButton size="small">Small</SButton>
  </div>
  <div class="mb-4">
    <SButton round size="large">Large</SButton>
    <SButton round>Default</SButton>
    <SButton round size="small">Small</SButton>
  </div>
  <div class="mb-4">
    <SButton circle size="large"></SButton>
    <SButton circle></SButton>
    <SButton circle size="small"></SButton>
  </div>
  <div class="mb-4">
    <s-button-group>tt</s-button-group>
  </div>
</template>
<script setup lang="ts">
defineOptions({
  name: 'VBButton'
});
</script>
<style scoped></style>
