<template>
  <div class="button">
    <!-- 
    1.primary,secondary, text
    2. 尺寸 size
    3. disabled
    4. 块级block
    5. iconButton -->
    <!-- <SButton class="" type="primary">确定</SButton>
    <SButton>取消</SButton>
    <SButton type="text">text</SButton>
    <br />
    <SButton type="primary" size="mini">mini</SButton>
    <SButton type="primary" size="small">small</SButton>
    <SButton type="primary" size="medium" @click="confirm">medium</SButton>
    <SButton type="primary" size="large" @click="confirm">large</SButton><br />
    <SButton size="mini">mini</SButton>
    <SButton size="small">small</SButton>
    <SButton size="medium" @click="confirm">medium</SButton>
    <SButton size="large" disabled @click="confirm">large</SButton>
    <br />
    <SButton type="primary">确定</SButton>
    <SButton type="primary" disabled>取消</SButton>
    <br />
    <SButton>确定</SButton>
    <SButton disabled>取消</SButton>
    <br />
    <SButton type="text">确定</SButton>
    <SButton type="text" disabled>disabled</SButton>
    <br />
    <SButton type="primary" :block="true">确定</SButton>
    <SButton :block="true">取消</SButton>
    <div style="margin: 0 20px;"/> -->
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
      <SButton circle></SButton>
      <SButton type="primary" circle></SButton>
      <SButton type="success" circle></SButton>
      <SButton type="info" circle></SButton>
      <SButton type="warning" circle></SButton>
      <SButton type="danger" circle></SButton>
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
  </div>
</template>

<script setup>
const confirm = () => {
  console.log("confirm !!");
};
</script>
