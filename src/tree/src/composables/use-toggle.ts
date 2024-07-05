import { Ref, SetupContext } from 'vue';
import { IInnerTreeNode } from '../tree-type';
import { IUseCore, IUseLazyLoad, IUseToggle } from './use-tree-type';

export const useToggle = (
  innerData: Ref<IInnerTreeNode[]>,
  core: IUseCore,
  context: SetupContext,
  lazyNode: IUseLazyLoad
): IUseToggle => {
  const { lazyLoadNodes } = lazyNode;
  const toggleNode = (node: IInnerTreeNode) => {
    // node.expanded = !node.expanded
    // 在原始列表中获取该节点
    const cur = innerData.value.find(item => item.id === node.id);
    if (cur) {
      cur.expanded = !cur.expanded;
      if (cur.expanded) {
        // 节点懒加载
        lazyLoadNodes(cur);
      }
    }
  };
  return {
    toggleNode
  };
};
