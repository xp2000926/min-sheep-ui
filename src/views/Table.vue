<template>
  <Table :data="tableData" @selection-change="onSelectionChange">
    <TableColumn type="selection" />
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
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Table, TableColumn } from '../table/index'
const tableData = ref([
  {
    date: '2016-05-03',
    name: 'Mark',
    address: 'No. 189, Grove St, Los Angeles',
    checked:true
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
const editRow = (row: any) => {
  console.log('editRow', row)
}
const onSelectionChange=(checkedRows: any)=>{
  console.log('checkedRows',checkedRows);
  
}
</script>
