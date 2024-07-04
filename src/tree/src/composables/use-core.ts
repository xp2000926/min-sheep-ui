import { computed, Ref } from 'vue';
import { IInnerTreeNode } from '../tree-type';
import { IUseCore } from './use-tree-type';

export const useCore = (innerData: Ref<IInnerTreeNode[]>): IUseCore => {
  // 获取那些展开的节点列表
  const expandedTree = computed(() => {
    let excludeNodes: IInnerTreeNode[] = []; //排除列表
    const result = []; // 结果列表
    // 循环列表，找出那些! expanded
    for (const item of innerData.value) {
      // 如果遍历的节点在排除列表中，跳过本次循环
      if (excludeNodes.map(node => node.id).includes(item.id)) {
        continue;
      }
      // 当前节点收起，它的子节点应该被排除掉
      if (item.expanded !== true) {
        excludeNodes = getChildren(item);
      }
      result.push(item);
    }
    return result;
  });
  // 获取指定节点的子节点
  const getChildren = (node: IInnerTreeNode, recursive = true) => {
    const result = []; //结果数组
    // 找到传入节点 node 在列表中的索引
    const startIndex = innerData.value.findIndex(item => item.id === node.id);
    // 找到它后面所有的子节点(level比指定节点大)
    for (
      let i = startIndex + 1;
      i < innerData.value.length && node.level < innerData.value[i].level;
      i++
    ) {
      if (recursive) {
        result.push(innerData.value[i]);
      } else if (node.level === innerData.value[i].level - 1) {
        // 直接子节点
        result.push(innerData.value[i]);
      }
    }
    return result;
  };
  // 计算参考线高度
  const getChildrenExpanded = (
    node: IInnerTreeNode,
    result: IInnerTreeNode[] = []
  ) => {
    // 获取当前节点的直接子节点
    const childrenNodes = getChildren(node, false);
    result.push(...childrenNodes);
    childrenNodes.forEach(item => {
      if (item.expanded) {
        getChildrenExpanded(item, result);
      }
    });
    return result;
  };
  const getIndex = (node: IInnerTreeNode) => {
    if (!node) return -1;
    return innerData.value.findIndex(item => item.id === node.id);
  };
  return {
    expandedTree,
    getChildren,
    getChildrenExpanded,
    getIndex
  };
};
