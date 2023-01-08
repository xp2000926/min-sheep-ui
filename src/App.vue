<!-- <script setup lang="ts">
// const confirm = () => console.log('confirm')
// import VirtualList from './components/VirtualList.vue'
import { ref } from 'vue'
// import SBaseModal from './modal/src/base-modal.tsx'
// import STabs from './tabs/src/tabs'
// import STab from './tabs/src/tab'

// const modalVisible = ref(false)
// const activeTab = ref('tab1')
// const open = () => {
//   modalVisible.value = true
// }
import SBasePopover from './base-popover/src/base-popover'
</script>
<template>

    1.primary,secondary, text
    2. 尺寸 size
    3. disabled
    4. 块级block
    5. iconButton
  -->
<!-- <s-button type="primary">确定</s-button>
  <s-button>取消</s-button>
  <s-button type="text">text</s-button>
  <s-button size="mini">Mini</s-button>
  <s-button size="small">Small</s-button>
  <s-button type="primary" @click="confirm">Primary</s-button>
  <s-button type="primary" size="small" disabled @click="confirm">
    Disabled
  </s-button>
  <s-button>Medium</s-button>
  <s-button size="large">Large</s-button>
  <s-button size="large" block>block</s-button>
  <VirtualList /> -->
<!-- <button @click="open">打开</button>
  <SBaseModal v-model="modalVisible">
    <div
      style="
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateY(-50%) translateX(-50%);
      "
    >
      <img src="./assets/sheep.webp" />
    </div>
  </SBaseModal>
  <s-tabs v-model="activeTab" closable addable>
    <s-tab id="tab1" title="Tab1">Tab1 Content</s-tab>
    <s-tab id="tab2" title="Tab2">Tab2 Content</s-tab>
    <s-tab id="tab3" title="Tab3">Tab3 Content</s-tab>
  </s-tabs> 
  <SBasePopover></SBasePopover>
</template>

<style scoped></style>-->
<script setup lang="ts">
import { ref } from 'vue'
// import SBasePopover from './base-popover/src/base-popover'
import SPopover from './popover/src/popover'
const visible = ref(false)
const host = ref()
const open = () => {
  visible.value = !visible.value
}
</script>
<template>
  <div ref="host" class="host" @click="open">host</div>
  <!-- <SBasePopover v-model="visible" :host="host"> overlay </SBasePopover> -->
  <SPopover v-model="visible" :host="host" title="Title" show-arrow>
    overlay
  </SPopover>
</template>
<style scoped>
/* .host {
  width: 50px;
  margin: 0 auto;
} */
</style>
