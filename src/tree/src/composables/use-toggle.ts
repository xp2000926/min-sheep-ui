import { Ref } from 'vue';
import { IInnerTreeNode } from '../tree-type';
import { IUseToggle } from './use-tree-type';

export const useToggle = (innerData: Ref<IInnerTreeNode[]>): IUseToggle => {
  const toggleNode = (node: IInnerTreeNode) => {
    // node.expanded = !node.expanded
    // 在原始列表中获取该节点
    const cur = innerData.value.find(item => item.id === node.id);
    if (cur) cur.expanded = !cur.expanded;
  };
  return {
    toggleNode
  };
};
