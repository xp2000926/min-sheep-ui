import { Ref } from 'vue';
import { IInnerTreeNode } from '../tree-type';
import { IUseCheck, IUseCore } from './use-tree-type';

export const useCheck = (
  innerData: Ref<IInnerTreeNode[]>,
  { getChildren }: IUseCore
): IUseCheck => {
  const toggleCheckNode = (node: IInnerTreeNode) => {
    //避免初始化的时候node中没有checked设置
    node.checked = !node.checked;
    // 父-子联动
    // 获取子节点，并同步他们的选中状态和父节点一致
    getChildren(node).forEach(child => {
      child.checked = node.checked;
    });
    // 子-父联动
    const parentNode = innerData.value.find(item => item.id === node.parentId);
    // 如果没有父节点，则没必要处理子到父的联动
    if (!parentNode) return;
    // 获取兄弟节点：相当于获取parentNode的直接子节点
    const siblingNodes = getChildren(parentNode, false);
    // 做一次过滤，过滤出选中的所有选中的兄弟节点
    const checkedSiblingNodes = siblingNodes.filter(item => item.checked);
    if (checkedSiblingNodes.length === siblingNodes.length) {
      // 所有兄弟节点均选中，父节点应该被选中
      parentNode.checked = true;
    } else if (checkedSiblingNodes.length === 0) {
      parentNode.checked = false;
    }
  };
  return {
    toggleCheckNode
  };
};
