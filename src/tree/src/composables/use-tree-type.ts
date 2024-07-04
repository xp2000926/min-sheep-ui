import { ComputedRef, Ref } from 'vue';
import { IInnerTreeNode } from '../tree-type';

export type IUseCore = {
  expandedTree: ComputedRef<IInnerTreeNode[]>;
  getChildren: (node: IInnerTreeNode, recursive?: boolean) => IInnerTreeNode[];
  getChildrenExpanded: (treeNode: IInnerTreeNode) => IInnerTreeNode[];
  getIndex: (node: IInnerTreeNode) => number;
  getNode: (node: IInnerTreeNode) => IInnerTreeNode | undefined;
};
export type IUseToggle = {
  //   toggleNode: (e: Event, node: IInnerTreeNode, accordion?: boolean) => void;
  toggleNode: (node: IInnerTreeNode, accordion?: boolean) => void;
};
export type IUseCheck = {
  toggleCheckNode: (treeNode: IInnerTreeNode) => void;
};
export type IUseOperate = {
  append: (parent: IInnerTreeNode, node: IInnerTreeNode) => void;
  remove: (node: IInnerTreeNode) => void;
};
export type TreeUtils = {
  treeData: Ref<IInnerTreeNode[]>;
} & IUseCore &
  IUseToggle &
  IUseCheck &
  IUseOperate;
