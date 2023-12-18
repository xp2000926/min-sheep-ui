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
const columns = ref([
  {
    title: '日期',
    prop: 'date'
  },
  {
    title: '姓名',
    prop: 'name'
  },
  {
    title: '地址',
    prop: 'address'
  }
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
  },
  {
    date: '2016-05-03',
    name: 'Mark',
    address: 'No. 189, Grove St, Los Angeles'
  }
])
const columns = ref([
  {
    title: '日期',
    prop: 'date'
  },
  {
    title: '姓名',
    prop: 'name'
  },
  {
    title: '地址',
    prop: 'address'
  }
])
</script>
```

:::

## 带边框表格

:::demo 默认情况下，Table 组件是不具有竖直方向的边框的，如果需要，可以使用`border`属性，它接受一个`Boolean`，设置为 true 即可启用。

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

:::demo 默认情况下，Table 组件是不具有竖直方向的边框的，如果需要，可以使用`border`属性，它接受一个`Boolean`，设置为 true 即可启用。

```vue
<template>
  <s-table :data="tableData" border :columns="columns" />
</template>

<script setup>
import { ref } from 'vue'
const tableData = ref([
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
const columns = ref([
  {
    title: '日期',
    prop: 'date'
  },
  {
    title: '姓名',
    prop: 'name'
  },
  {
    title: '地址',
    prop: 'address'
  }
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
  },
  {
    date: '2016-05-03',
    name: 'Mark',
    address: 'No. 189, Grove St, Los Angeles'
  }
])
const tableRowClassName = ({ row, rowIndex }) => {
  if (rowIndex === 1) {
    return 'warning-row'
  } else if (rowIndex === 3) {
    return 'success-row'
  }
  return ''
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

## 操作列

:::demo

```vue
<template>
  <s-table :data="tableData">
    <s-table-column prop="date" title="日期" />
    <s-table-column prop="name" title="姓名" />
    <s-table-column prop="address" title="地址" />
    <s-table-column title="操作">
      <template #default="row">
        <s-button type="primary" @click="editRow(row)">编辑</s-button>
        <s-button type="danger">删除</s-button>
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
const editRow = row => {
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
const onSelectionChange = checkedRows => {
  console.log('checkedRows', checkedRows)
}
</script>
```

:::

## Table API

### Table 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | 显示的数据 | array | — | — | — |
| columns | 表格列的配置描述，具体项见 | array | — | — | — |
| stripe | 是否为斑马纹 table | boolean | — | false | — |
| border | 是否带有纵向边框 | boolean | — | false | — |
| row-class-name | 行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。 | Function({row, rowIndex})/String | — | — | 实现中 |
| headerCellStyle |表头单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有表头单元格设置一样的 Style。  | Function({row, column, rowIndex, columnIndex})/Object | — | — | — |
| show-header |是否显示表头  | boolean	 | — | true | — |


### Column 属性

> 列描述数据对象，是 columns 中的一项，Column 使用相同的 API

| 属性名 | 说明 | 类型 | 可选值 | 默认值 | 备注 |
| --- | --- | --- | --- | --- | --- |
| title | 列头显示文字 | string | — | '' | — |
| prop | 列数据在数据项中对应的路径，支持通过数组查询嵌套路径 | string | — | '' | — |

### Table 事件

| 事件名称         | 说明                           | 类型 | 回调参数  | 备注 |
| ---------------- | ------------------------------ | ---- | --------- | ---- |
| selection-change | 当选择项发生变化时会触发该事件 | —    | selection | —    |

### Table 插槽

| 插槽名 | 说明         |
| ------ | ------------ |
| empty  | 自定义空状态 |
| title  | 自定义页头   |
| footer | 自定义页脚   |
