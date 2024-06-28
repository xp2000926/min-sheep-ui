<template>
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
  <SButton type="primary" size="mini">确定</SButton>
  <SButton type="primary" size="small">确定</SButton>
  <SButton type="primary" size="medium" @click="confirm">确定</SButton>
  <SButton type="primary" size="large" disabled @click="confirm">确定</SButton>
  <br>
  <SButton type="primary" :block="true">确定</SButton>
</template>

<script setup>
const confirm=()=>{
  console.log('confirm !!');
}
</script>

<style lang="scss" scoped></style>
