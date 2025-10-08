<template>
  <!-- <s-tree :data="data" /> -->
  <s-tree :data="data" showLine checkable  checkbox-placement="right" :field="{label:()=>{
    return 'label'
  }}" ref="treeRef" />
</template>
<script setup lang="ts">
import { Tree } from "../../packages/tree/src/tree.tsx"
import { onMounted, ref,useTemplateRef } from 'vue';
const data = ref([
  {
    label: 'docs',
    id: 'docs'
  },
  {
    label: 'packages',
    id: 'packages',
    expanded: true,
    children: [
      {
        label: 'plugin-vue',
        id: 'plugin-vue'
      },
      {
        label: 'vite',
        id: 'vite',
        expanded: true,
        children: [
          {
            label: 'src',
            id: 'src'
          },
          {
            label: 'README.md',
            id: 'README.md'
          }
        ]
      }
    ]
  },
  {
    label: 'scripts',
    id: 'scripts',
    children: [
      {
        label: 'release.ts',
        id: 'release.ts'
      },
      {
        label: 'verifyCommit.ts',
        id: 'verifyCommit.ts'
      }
    ]
  },
  {
    label: 'pnpm-workspace.yaml',
    id: 'pnpm-workspace.yaml'
  }
])
const treeRef = useTemplateRef<Tree>('treeRef')
onMounted(()=>{
  console.log('treeRef',treeRef.value)
})
</script>
