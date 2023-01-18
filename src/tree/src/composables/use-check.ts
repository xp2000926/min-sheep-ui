import { Ref, SetupContext } from 'vue'
import { IInnerTreeNode } from '../tree-type'
import { IUseCheck, IUseCore } from './use-tree-type'

export function useCheck(
  innerData: Ref<IInnerTreeNode[]>,
  { getChildren, getParent }: IUseCore,
  { emit }: SetupContext
): IUseCheck {
  const toggleCheckNode = (currentNode: IInnerTreeNode) => {
    //避免初始化的时候node中没有checked设置
    currentNode.checked = !currentNode.checked
    // 父-子联动
    // 获取子节点，并同步他们的选中状态和父节点一致
    getChildren(currentNode).forEach(child => {
      child.checked = currentNode.checked
      child.inChecked = getChildren(currentNode, true).every(
        sibling => sibling.inChecked
      )
    })
    currentNode.inChecked = false // 重置待选中状态
    setChecked(currentNode)
    /**
     * @param {IInnerTreeNode} currentNode 当前节点
     * @param {Array<{id:string}>} selectedRowKeys 所选节点id
     * @param {Array<IInnerTreeNode| ''>} selectedRows 选定的行
     */
    const selectedRowKeys = innerData.value
      .map(item => {
        if (item.checked) {
          return item.id
        } else {
          return ''
        }
      })
      .filter(items => items)
    const selectedRows: Array<IInnerTreeNode | ''> = innerData.value
      .map(item => {
        if (item.checked) {
          return item
        } else {
          return ''
        }
      })
      .filter(items => items)
    emit('check', currentNode, selectedRowKeys, selectedRows)
  }
  // 子-父联动 并且设置父节点选中内容
  const setChecked = (node: IInnerTreeNode) => {
    // 获取父节点
    const parentNode = getParent(node)
    // 如果没有父节点，则没必要处理子到父的联动
    if (!parentNode) return
    // 获取兄弟节点：相当于获取 parentNode 的直接子节点
    const siblingNodes = getChildren(parentNode, true)
    // 兄弟节点是否全部选中状态
    const siblingCheckStatus = siblingNodes.every(sibling => sibling.checked)
    // 所有兄弟节点均选中，父节点应该被选中
    parentNode.checked = siblingCheckStatus
    const siblingIncheckedStatus = siblingNodes.some(child => child.checked)
    if (siblingCheckStatus) {
      // 全部选中
      parentNode.inChecked = false
    } else if (siblingIncheckedStatus) {
      // 兄弟节点中存在选中的节点
      parentNode.inChecked = true
    } else {
      parentNode.inChecked = false
    }
    if (parentNode.parentId) setChecked(parentNode)
  }
  return {
    toggleCheckNode
  }
}
