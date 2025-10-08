# Splitter 分隔面板

## 基础用法

> 最基本的用法，如果未传入默认尺寸，将自动平均分配。

:::demo
```vue
<template>
  <div
    style="height: 250px; box-shadow: var(--el-border-color-light) 0px 0px 10px"
  >
    <s-splitter>
      <s-splitter-panel size="30%">
        <div class="demo-panel">1</div>
      </s-splitter-panel>
      <s-splitter-panel :min="200">
        <div class="demo-panel">2</div>
      </s-splitter-panel>
    </s-splitter>
  </div>
</template>

<style scoped>
.demo-panel {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
```
:::