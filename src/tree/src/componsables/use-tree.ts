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
  const expandedTree = computed(() => {
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
        excludeNodes = getChildrenExpanded(item)
      }
      result.push(item)
    }
    return result
  })
  // 获取指定节点的子节点
  const getChildrenExpanded = (
    node: IInnerTreeNode,
    recursive = true
  ): IInnerTreeNode[] => {
    const result = [] //结果数组
    // 找到传入节点 node 在列表中的索引
    const startIndex = innerData.value.findIndex(item => item.id === node.id)
    // 找到它后面所有的子节点(level比指定节点大)
    for (
      let i = startIndex + 1;
      i < innerData.value.length && node.level < innerData.value[i].level;
      i++
    ) {
      if (recursive) {
        result.push(innerData.value[i])
      } else if (node.level === innerData.value[i].level - 1) {
        // 直接子节点
        result.push(innerData.value[i])
      }
    }
    return result
  }
  const toggleCheckNode = (node: IInnerTreeNode) => {
    //避免初始化的时候node中没有checked设置
    node.checked = !node.checked
    // 父-子联动
    // 获取子节点，并同步他们的选中状态和父节点一致
    getChildrenExpanded(node).forEach(child => {
      child.checked = node.checked
    })
    // 子-父联动
    const parentNode = innerData.value.find(item => item.id === node.parentId)
    // 如果没有父节点，则没必要处理子到父的联动
    if (!parentNode) {
      return
    }
    // 获取兄弟节点：相当于获取parentNode的直接子节点
    const siblingNodes = getChildrenExpanded(parentNode, false)
    // 做一次过滤，过滤出选中的所有选中的兄弟节点
    const checkedSiblingNodes = siblingNodes.filter(item => item.checked)
    if (checkedSiblingNodes.length === siblingNodes.length) {
      // 所有兄弟节点均选中，父节点应该被选中
      parentNode.checked = true
    } else {
      parentNode.checked = false
    }
  }
  return {
    innerData,
    toggleNode,
    expandedTree,
    getChildrenExpanded,
    toggleCheckNode
  }
}
