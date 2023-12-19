<template>
  <!-- <Table
    :data="tableData"
    @selection-change="onSelectionChange"
    :header-cell-style="headerCellStyle"
  > -->
  <Table
    :data="tableData"
    @selection-change="onSelectionChange"
  >
    <TableColumn prop="date" title="Date" />
    <TableColumn prop="name" title="Name" />
    <TableColumn prop="name" title="Name" />
    <TableColumn prop="address" title="Address" />
    <TableColumn title="操作">
      <template #default="row">
        <button @click="editRow(row)">编辑</button>
        <button>删除</button>
      </template>
    </TableColumn>
  </Table>

  <br />
  <hr />
  <br />
  <!-- <Table
    :data="tableData"
    :columns="tableColumns"
    @selection-change="onSelectionChange"
    :header-cell-style="headerCellStyle"
  >
  </Table> -->
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { Table, TableColumn } from "../../table/index";
const tableColumns = ref([
  { prop: "date", title: "Date" },
  { prop: "name", title: "Name" },
  { prop: "name", title: "Name" },
]);
const tableData = ref([
  {
    date: "2016-05-03",
    name: "Mark",
    address: "No. 189, Grove St, Los Angeles",
    checked: true,
  },
  {
    date: "2016-05-03",
    name: "Mark",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-03",
    name: "Mark",
    address: "No. 189, Grove St, Los Angeles",
  },
]);
const headerCellStyle = ({ row, column, rowIndex, columnIndex }) =>{
  console.log(row, column, rowIndex, columnIndex);
  return {
    backgroundColor: "#f2f2f2",
    color: "rgb(102,102,102)",
  };
};
const editRow = (row: any) => {
  console.log("editRow", row);
};
const onSelectionChange = (checkedRows: any) => {
  console.log("checkedRows", checkedRows);
};
</script>
