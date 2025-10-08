import { Ref, ref, SetupContext, unref } from 'vue';
import { FieldType, ITreeNode, TreeProps } from '../tree-type';
import { generateInnerTree } from '../utils';
import { useCheck } from './use-check';
import { useCore } from './use-core';
import { useLazyLoad } from './use-lazy-load';
import { useOperate } from './use-operate';
import { useToggle } from './use-toggle';
import { TreeUtils } from './use-tree-type';
import { useDraggable } from './use-draggable';

export const useTree = (
  node: Ref<ITreeNode[]> | ITreeNode[],
  field: Ref<FieldType> | FieldType,
  defaultExpandAll: Ref<boolean> | boolean,
  treeProps: TreeProps,
  context: SetupContext
): TreeUtils => {
  const tempField = Object.assign(
    {
      label: 'label',
      children: 'children',
      disabled: false,
      isLeaf: false,
      class: ''
    },
    unref(field)
  );
  const data = unref(node);
  const innerData = ref(
    generateInnerTree(data, tempField, unref(defaultExpandAll))
  );
  const core = useCore(innerData);
  const plugins = [useToggle, useCheck, useOperate];
  const lazyNode = useLazyLoad(innerData, core, context, tempField);
  const draggablePlugin = useDraggable(treeProps.draggable, innerData, core);
  // 聚合插件
  const pluginsMethods = plugins.reduce((acc, plugin) => {
    return { tempField, ...acc, ...plugin(innerData, core, context, lazyNode) };
  }, {});
  return {
    ...pluginsMethods,
    ...core,
    // tempField,
    ...draggablePlugin,
    treeData: innerData
  } as TreeUtils;
};
