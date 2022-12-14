import { ref, Ref } from 'vue'
import { randomId } from '../../../shared/utils'
import { IInnerTreeNode } from '../tree-type'
import { IUseCore, IUseOperate } from './use-tree-type'

export function useOperate(
  innerData: Ref<IInnerTreeNode[]>,
  { getChildren, getIndex }: IUseCore
): IUseOperate {
  const append = (parent: IInnerTreeNode, node: IInnerTreeNode) => {
    // 增加节点的逻辑
    // console.log('node-operate append', parent, node)
    // 1.获取parent最后一个子节点
    const children = getChildren(parent, false)
    const lastChild = children[children.length - 1]

    // 2.确定未来插入新节点未知索引
    // 默认在parent后面
    let insertedIndex = getIndex(parent) + 1

    // 如果存在lastChild则在其后面
    if (lastChild) {
      insertedIndex = getIndex(lastChild) + 1
    }

    // 保证parent是展开、非叶子节点状态
    // 这样保证看到新增节点
    parent.expanded = true
    parent.isLeaf = false

    // 新增节点初始化
    const currentNode = ref({
      ...node,
      level: parent.level + 1,
      parentId: parent.id,
      isLeaf: true
    })

    // 设置新增节点ID
    if (currentNode.value.id === undefined) {
      currentNode.value.id = randomId()
    }

    // 插入新增节点
    innerData.value.splice(insertedIndex, 0, currentNode.value)
  }
  const remove = (node: IInnerTreeNode) => {
    // 删除节点的逻辑
    // console.log('node-operate remove', node)
    const childrenIds = getChildren(node).map(nodeItem => nodeItem.id)
    // 过滤掉node和其子节点之外的节点
    innerData.value = innerData.value.filter(
      item => item.id !== node.id && !childrenIds.includes(item.id)
    )
  }
  return {
    append,
    remove
  }
}
