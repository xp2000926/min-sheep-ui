import { Ref, SetupContext, ref, unref } from 'vue';
import { ITreeNode, TreeProps } from '../tree-type';
import { generateInnerTree } from '../utils';
import { useCheck } from './use-check';
import { useCore } from './use-core';
import { useOperate } from './use-operate';
import { useToggle } from './use-toggle';
import { TreeUtils } from './use-tree-type';
import { useLazyLoad } from './use-lazy-load';
import { useDraggable } from './use-draggable';

export const useTree = (
  node: Ref<ITreeNode[]> | ITreeNode[],
  treeProps: TreeProps,
  context: SetupContext
): TreeUtils => {
  const data = unref(node);
  const innerData = ref(generateInnerTree(data));
  const core = useCore(innerData);
  const plugins = [useToggle, useCheck, useOperate];
  const lazyNode = useLazyLoad(innerData, core, context);
  const draggablePlugin = useDraggable(treeProps.draggable, innerData, core);
  // 聚合插件
  const pluginsMethods = plugins.reduce((acc, plugin) => {
    return { ...acc, ...plugin(innerData, core, context, lazyNode) };
  }, {});
  return {
    ...pluginsMethods,
    ...core,
    ...draggablePlugin,
    treeData: innerData
  } as TreeUtils;
};
