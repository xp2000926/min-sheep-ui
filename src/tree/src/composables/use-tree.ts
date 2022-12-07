import { computed, Ref, ref, unref } from 'vue'
import { IInnerTreeNode, ITreeNode } from '../tree-type'
import { generateInnerTree } from '../utils'

export function useTree(node: Ref<ITreeNode[]> | ITreeNode[]) {
  const innerData = ref(generateInnerTree(unref(node)))
  const toggleNode = (node: IInnerTreeNode) => {
    // node.expanded = !node.expanded
    // 在原始列表中获取该节点
    const cur = innerData.value.find(item => item.id === node.id)
    if (cur) {
      cur.expanded = !cur.expanded
    }
  }
  // 获取那些展开的节点列表
  const expendedTree = computed(() => {
    let excludeNodes: IInnerTreeNode[] = [] //排除列表
    const result = [] // 结果列表
    // 循环列表，找出那些! expanded
    for (const item of innerData.value) {
      // 如果遍历的节点在排除列表中，跳过本次循环
      //excludeNodes.map(node => node.id).includes(item.id)
      if (excludeNodes.includes(item)) {
        continue
      }
      // 当前节点收起，它的子节点应该被排除掉
      if (item.expanded !== true) {
        excludeNodes = getChildren(item)
      }
      result.push(item)
    }
    return result
  })
  // 获取指定节点的子节点
  const getChildren = (node: IInnerTreeNode): IInnerTreeNode[] => {
    const result = [] //结果数组
    // 找到传入节点 node 在列表中的索引
    const startIndex = innerData.value.findIndex(item => item.id === node.id)
    // 找到它后面所有的子节点(level比指定节点大)
    for (
      let i = startIndex + 1;
      i < innerData.value.length && node.level < innerData.value[i].level;
      i++
    ) {
      result.push(innerData.value[i])
    }
    return result
  }
  return {
    innerData,
    toggleNode,
    expendedTree,
    getChildren
  }
}
