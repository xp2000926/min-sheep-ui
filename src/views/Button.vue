<template>
  <div class="button">
    <!-- 
    1.primary,secondary, text
    2. 尺寸 size
    3. disabled
    4. 块级block
    5. iconButton -->
    <SButton class="" type="primary">确定</SButton>
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
  </div>
</template>

<script setup>
const confirm = () => {
  console.log("confirm !!");
};
</script>

<style lang="scss" scoped></style>
