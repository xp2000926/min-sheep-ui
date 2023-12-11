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
  },{
    date: '2016-05-03',
    name: 'Mark',
    address: 'No. 189, Grove St, Los Angeles'
  },{
    date: '2016-05-03',
    name: 'Mark',
    address: 'No. 189, Grove St, Los Angeles'
  },{
    date: '2016-05-03',
    name: 'Mark',
    address: 'No. 189, Grove St, Los Angeles'
  }
])
</script>
```
:::

:::demo
```vue
<template>
  <s-table :data="tableData" :columns="columns" />
</template>
<script setup>
import { ref } from 'vue'
const tableData = ref([
  {
    date: '2016-05-03',
    name: 'Mark',
    address: 'No. 189, Grove St, Los Angeles'
  },{
    date: '2016-05-03',
    name: 'Mark',
    address: 'No. 189, Grove St, Los Angeles'
  },{
    date: '2016-05-03',
    name: 'Mark',
    address: 'No. 189, Grove St, Los Angeles'
  },{
    date: '2016-05-03',
    name: 'Mark',
    address: 'No. 189, Grove St, Los Angeles'
  }
])
const columns=ref([
   {
    title: '日期',
    prop: 'date',
  },
   {
    title: '姓名',
    prop: 'name',
  },
   {
    title: '地址',
    prop: 'address',
  },
])
</script>
```
:::

## 带斑马纹表格

:::demo `stripe`属性可以创建带斑马纹的表格。它接受一个`Boolean`，默认为`false`，设置为`true`即为启用。
```vue
<template>
  <s-table :data="tableData" stripe>
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
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-03',
    name: 'Mark',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-03',
    name: 'Mark',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-03',
    name: 'Mark',
    address: 'No. 189, Grove St, Los Angeles'
  }
])
</script>
```
:::

:::demo `stripe`属性可以创建带斑马纹的表格。它接受一个`Boolean`，默认为`false`，设置为`true`即为启用。
```vue
<template>
  <s-table :data="tableData" stripe :columns="columns" />
</template>

<script setup>
import { ref } from 'vue'
const tableData = ref([
  {
    date: '2016-05-03',
    name: 'Mark',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-03',
    name: 'Mark',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-03',
    name: 'Mark',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-03',
    name: 'Mark',
    address: 'No. 189, Grove St, Los Angeles'
  }
])
const columns=ref([
   {
    title: '日期',
    prop: 'date',
  },
   {
    title: '姓名',
    prop: 'name',
  },
   {
    title: '地址',
    prop: 'address',
  },
])
</script>
```
:::

## 带边框表格

:::demo 默认情况下，Table 组件是不具有竖直方向的边框的，如果需要，可以使用`border`属性，它接受一个`Boolean`，设置为true即可启用。
```vue
<template>
  <s-table :data="tableData" border>
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
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-03',
    name: 'Mark',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-03',
    name: 'Mark',
    address: 'No. 189, Grove St, Los Angeles'
  }
])
</script>
```
:::

:::demo 默认情况下，Table 组件是不具有竖直方向的边框的，如果需要，可以使用`border`属性，它接受一个`Boolean`，设置为true即可启用。
```vue
<template>
  <s-table :data="tableData" border :columns="columns"/>
</template>

<script setup>
import { ref } from 'vue'
const tableData = ref([
  {
    date: '2016-05-03',
    name: 'Mark',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-03',
    name: 'Mark',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-03',
    name: 'Mark',
    address: 'No. 189, Grove St, Los Angeles'
  }
])
const columns=ref([
   {
    title: '日期',
    prop: 'date',
  },
   {
    title: '姓名',
    prop: 'name',
  },
   {
    title: '地址',
    prop: 'address',
  },
])
</script>
```
:::

## 带状态表格

:::demo 可以通过指定 Table 组件的 `row-class-name` 属性来为 Table 中的某一行添加 class，表明该行处于某种状态。
```vue
<template>
  <s-table :data="tableData" :row-class-name="tableRowClassName">
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
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-03',
    name: 'Mark',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-03',
    name: 'Mark',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-03',
    name: 'Mark',
    address: 'No. 189, Grove St, Los Angeles'
  }
])
const tableRowClassName=({row, rowIndex})=>{
  if (rowIndex === 1) {
    return 'warning-row';
  } else if (rowIndex === 3) {
    return 'success-row';
  }
  return '';
}
</script>
<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>
```
:::

##  操作列

:::demo
```vue
<template>
  <s-table :data="tableData">
    <s-table-column prop="date" title="日期" />
    <s-table-column prop="name" title="姓名" />
    <s-table-column prop="address" title="地址" />
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



## 多选

:::demo
```vue
<template>
  <s-table :data="tableData" @selection-change="onSelectionChange">
    <s-table-column type="selection" />
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
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-03',
    name: 'Mark',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-03',
    name: 'Mark',
    address: 'No. 189, Grove St, Los Angeles'
  }
])
const onSelectionChange=(checkedRows)=>{
  console.log('checkedRows',checkedRows);
}
</script>
```
:::