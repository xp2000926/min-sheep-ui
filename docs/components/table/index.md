# Table 表格

> 用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。

## 基础用法

:::demo
```vue
<template>
  <s-table :data="tableData">
    <s-table-column prop="date" title="日期" />
    <s-table-column prop="name" title="姓名" />
    <s-table-column prop="address" title="地址" />
  </s-table>
</template>
<script setup>
import { ref } from 'vue'
const tableData = ref([
  {
    date: '2016-05-03',
    name: 'Mark',
    address: 'No. 189, Grove St, Los Angeles'
  }
])
</script>
```
:::

##  操作列

:::demo
```vue
<template>
  <s-table :data="tableData">
    <s-table-column prop="date" title="Date" />
    <s-table-column prop="name" title="Name" />
    <s-table-column prop="address" title="Address" />
    <s-table-column title="操作">
      <template #default="row">
        <s-button type='primary' @click="editRow(row)">编辑</s-button>
        <s-button type='danger'>删除</s-button>
      </template>
    </s-table-column>
  </s-table>
</template>

<script setup>
import { ref } from 'vue'
const tableData = ref([
  {
    date: '2016-05-03',
    name: 'Mark',
    address: 'No. 189, Grove St, Los Angeles'
  }
])
const editRow = (row) => {
  console.log('editRow', row)
}
</script>
```
:::