<template>
  <Table :data="tableData">
    <TableColumn prop="date" title="Date" />
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
import { Table, TableColumn } from '../table/index'
const tableData = [
  {
    date: '2016-05-03',
    name: 'Mark',
    address: 'No. 189, Grove St, Los Angeles'
  }
]
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const editRow = (row: any) => {
  console.log('editRow', row)
}
</script>
