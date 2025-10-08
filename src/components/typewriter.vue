<template>
    <div class="typewriter">
      <h1>擦除效果</h1>
      <div class="s-typewriter">
<p>200 元不算大额资金，却能在生活里晕开细碎的暖意。早市上，它能拎回一整袋新鲜蔬果，脆生生的黄瓜、红彤彤的草莓，够全家人吃上好几天；通勤族用它充值交通卡，能安稳坐一个月地铁，不用再为每天的车票费心。
偶尔想给自己充充电，200 元能买下一本精装书加一杯手冲咖啡，在周末的午后享受沉浸式阅读；朋友生日时，它能换成一束向日葵再加个小巧的文创摆件，传递不厚重却真诚的心意。200 元的价值从不在数字本身，而在每一次花出去时，那份让日子更舒服的小满足。</p>
<p class="eraser">
  <span class="text">200 元不算大额资金，却能在生活里晕开细碎的暖意。早市上，它能拎回一整袋新鲜蔬果，脆生生的黄瓜、红彤彤的草莓，够全家人吃上好几天；通勤族用它充值交通卡，能安稳坐一个月地铁，不用再为每天的车票费心。
偶尔想给自己充充电，200 元能买下一本精装书加一杯手冲咖啡，在周末的午后享受沉浸式阅读；朋友生日时，它能换成一束向日葵再加个小巧的文创摆件，传递不厚重却真诚的心意。200 元的价值从不在数字本身，而在每一次花出去时，那份让日子更舒服的小满足。</span>
</p>
    </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.typewriter{
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #000;
}
.s-typewriter{
  width: 80%;
  margin: 1em auto;
  line-height: 2;
  text-indent: 2em;
  position: relative;
  color: #fff;
}
@property --p {

  syntax: "<percentage>"; // 语法规则时百分比
  inherits: false; //属性是否继承
  initial-value: 0%;// 属性的初始值
}
.eraser{
  position: absolute;
  inset: 0;
}
.text{
    background: linear-gradient(to right, transparent var(--p), #000 calc(var(--p) + 30px));
    color: transparent;
    animation: eraser 5s linear forwards;
}
@keyframes eraser {
  to{
    --p:100%;
  }
}
</style>
