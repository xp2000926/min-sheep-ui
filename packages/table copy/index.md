# Table 表格

## 基础表格

基础的表格展示用法。

:::demo

```vue
<template>
  <s-table :data="tableData">
    <s-table-column prop="date" title="日期" />
    <s-table-column prop="name" title="姓名" />
    <s-table-column prop="address" title="地址" />
  </s-table>
  <s-table :data="tableData" :columns="columns" />
</template>
<script setup>
import { ref } from 'vue';
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
]);
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
]);
</script>
```

:::

## 带边框表格

默认情况下，Table 组件是不具有竖直方向的边框的，如果需要，可以使用`border`属性，它接受一个`Boolean`，设置为 true 即可启用。

:::demo

```vue
<template>
  <s-table :data="tableData" border>
    <s-table-column prop="date" title="日期" />
    <s-table-column prop="name" title="姓名" />
    <s-table-column prop="address" title="地址" />
  </s-table>
  <s-table :data="tableData" border :columns="columns" />
</template>

<script setup>
import { ref } from 'vue';
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
]);
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
]);
</script>
```

:::

## 带斑马纹表格

`stripe`属性可以创建带斑马纹的表格。它接受一个`Boolean`，默认为`false`，设置为`true`即为启用。

:::demo

```vue
<template>
  <s-table :data="tableData" stripe>
    <s-table-column prop="date" title="日期" />
    <s-table-column prop="name" title="姓名" />
    <s-table-column prop="address" title="地址" />
  </s-table>
</template>

<script setup>
import { ref } from 'vue';
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
]);
</script>
```

:::

## 带状态表格

可以通过指定 Table 组件的 `row-class-name` 属性来为 Table 中的某一行添加 class，表明该行处于某种状态。

:::demo

```vue
<template>
  <s-table :data="tableData" :row-class-name="tableRowClassName">
    <s-table-column prop="date" title="日期" />
    <s-table-column prop="name" title="姓名" />
    <s-table-column prop="address" title="地址" />
  </s-table>
</template>

<script setup>
import { ref } from 'vue';
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
]);
const tableRowClassName = ({ row, rowIndex }) => {
  console.log('rowIndex', rowIndex);
  if (rowIndex === 1) {
    return 'warning-row';
  } else if (rowIndex === 3) {
    return 'success-row';
  }
  return '';
};
</script>
<style>
.s-table .warning-row {
  background: oldlace !important;
}

.s-table .success-row {
  background: #f0f9eb !important;
}
</style>
```

:::

## 固定表头

只要在 `s-table` 元素中定义了height属性，即可实现固定表头的表格，而不需要额外的代码。

:::demo

```vue
<template>
  <s-table :data="tableData" height="250">
    <s-table-column prop="date" title="日期" />
    <s-table-column prop="name" title="姓名" />
    <s-table-column prop="address" title="地址" />
  </s-table>
</template>
<script setup>
import { ref } from 'vue';
const tableData = ref([
  {
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  },
  {
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  },
  {
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  },
  {
    date: '2016-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  },
  {
    date: '2016-05-08',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  },
  {
    date: '2016-05-06',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  },
  {
    date: '2016-05-07',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  },{
    date: '2016-05-06',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  },
  {
    date: '2016-05-07',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  }
]);
</script>
```

:::

## 可编辑表格

:::demo

```vue
<template>
  <div></div>
</template>
<script></script>
```

:::

## 多级表头

:::demo

```vue
<template>
 <s-table :data="tableData" style="width: 100%">
    <s-table-column prop="date" title="Date" width="150" />
    <s-table-column title="Delivery Info">
      <s-table-column prop="name" title="Name" width="120" />
      <s-table-column title="Address Info">
        <s-table-column prop="state" title="State" width="120" />
        <s-table-column prop="city" title="City" width="120" />
        <s-table-column prop="address" title="Address" />
        <s-table-column prop="zip" title="Zip" width="120" />
      </s-table-column>
    </s-table-column>
  </s-table>
</template>
<script setup>
import { ref } from 'vue';
const tableData = ref([
   {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
])
</script>
```

:::

## API

### 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | 显示的数据 | array | — | — | — |
| columns | 表格列的配置描述，具体项见 | array | — | — | — |
| stripe | 是否为斑马纹 table | boolean | — | false | — |
| border | 是否带有纵向边框 | boolean | — | false | — |
| row-class-name | 行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。 | Function({row, rowIndex})/String | — | — | 实现中 |
| headerCellStyle | 表头单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有表头单元格设置一样的 Style。 | Function({row, column, rowIndex, columnIndex})/Object | — | — | — |
| show-header | 是否显示表头 | boolean | — | true | — |
| height | Table 的高度，默认为自动高度。如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则这个高度会设置为 Table 的 style.height 的值，Table 的高度会受控于外部样式。 | `'number'\|'string'` | — | — | — |

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
