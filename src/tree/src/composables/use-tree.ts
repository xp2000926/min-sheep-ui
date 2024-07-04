import { Ref, ref, unref } from 'vue';
import { ITreeNode } from '../tree-type';
import { generateInnerTree } from '../utils';
import { useCheck } from './use-check';
import { useCore } from './use-core';
import { useOperate } from './use-operate';
import { useToggle } from './use-toggle';
import { TreeUtils } from './use-tree-type';

export const useTree = (node: Ref<ITreeNode[]> | ITreeNode[]): TreeUtils => {
  const data = unref(node);
  const innerData = ref(generateInnerTree(data));
  const core = useCore(innerData);
  const plugins = [useToggle, useCheck, useOperate];
  // 聚合插件
  const pluginsMethods = plugins.reduce((acc, plugin) => {
    return { ...acc, ...plugin(innerData, core) };
  }, {});
  return {
    ...pluginsMethods,
    ...core,
    treeData: innerData
  } as TreeUtils;
};
