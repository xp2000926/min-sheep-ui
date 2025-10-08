<template>
  <el-tree :data="data" show-checkbox :props="{
  label:(data,node)=>{
    console.log(data,node)
    return 'label'
  },
}">
    <template #default="{ node, data }">
      <span>{{ node.label }}</span>
      <span>
        <a @click="append(data)"> Append </a>
        <a style="margin-left: 8px" @click="remove(node, data)"> Delete </a>
      </span>
    </template>
  </el-tree>
</template>

<script setup >
import { ref } from 'vue';


const data = ref([{
  label: '一级 1',
  children: [{
    label: '二级 1-1',
    children: [{
      label: '三级 1-1-1'
    }]
  }]
}, {
  label: '一级 2',
  children: [{
    label: '二级 2-1',
    children: [{
      label: '三级 2-1-1'
    }]
  }, {
    label: '二级 2-2',
    children: [{
      label: '三级 2-2-1'
    }]
  }]
}, {
  label: '一级 3',
  children: [{
    label: '二级 3-1',
    children: [{
      label: '三级 3-1-1'
    }]
  }, {
    label: '二级 3-2',
    children: [{
      label: '三级 3-2-1'
    }]
  }]
}])

const append = (data) => {
  console.log(data)

}

const remove = (node, data) => {
  console.log(node, data)
}
</script>

<style lang="scss" scoped></style>
