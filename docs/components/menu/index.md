# Menu 菜单

## 基础用法
:::demo
```vue
<template>
  <div class="menu-content">
    <s-menu defaultActive="2-1" >
     <s-menu-item path="1">Processing Center</s-menu-item>
     <s-sub-menu path="2">
        <template #title>Workspace</template>
        <s-menu-item path="2-1">item one</s-menu-item>
        <s-menu-item path="2-2">item two</s-menu-item>
        <s-menu-item path="2-3">item three</s-menu-item>
        <s-sub-menu path="2-4">
        <template #title>item four</template>
        <s-menu-item path="2-4-1">item one</s-menu-item>
        <s-menu-item path="2-4-2">item two</s-menu-item>
        <s-menu-item path="2-4-3">item three</s-menu-item>
      </s-sub-menu>
     </s-sub-menu>
     <s-menu-item path="3">Processing Center</s-menu-item>
    </s-menu>
  </div>
</template>
<style lang="scss" scoped>
.menu-content{
    height:428px;   
}
</style>
```
:::

<!-- background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" activeBackgroundColor="#f00" -->
| 参数 | 说明                                         | 类型                                 | 默认值     |
| ---- | -------------------------------------------- | ------------------------------------ | ---------- |
| mode | 菜单类型，现在支持垂直、水平、和内嵌模式三种 | `vertical` , `horizontal` , `inline` | `vertical` |