import { ComputedRef, Ref } from 'vue';
import { FieldType, IInnerTreeNode, ITreeNode } from '../tree-type';

// 节点的核心操作
export declare type IUseCore = {
  expandedTree: ComputedRef<IInnerTreeNode[]>;
  getChildren: (node: IInnerTreeNode, recursive?: boolean) => IInnerTreeNode[];
  getChildrenExpanded: (treeNode: IInnerTreeNode) => IInnerTreeNode[];
  getIndex: (node: IInnerTreeNode) => number;
  getNode: (node: IInnerTreeNode) => IInnerTreeNode | undefined;
  getParent: (node: IInnerTreeNode) => IInnerTreeNode | undefined;
};

// 节点的展开折叠
export type IUseToggle = {
  toggleNode: (e: Event, node: IInnerTreeNode, accordion?: boolean) => void;
};

// 节点的复选
export type IUseCheck = {
  toggleCheckNode: (treeNode: IInnerTreeNode) => void;
};

// 节点的增删
export type IUseOperate = {
  append: (parent: IInnerTreeNode, node: IInnerTreeNode) => void;
  remove: (node: IInnerTreeNode) => void;
};
// 节点的懒加载
export type IUseLazyLoad = {
  lazyLoadNodes: (node: IInnerTreeNode) => void;
};

export type LazyNodeResult = {
  node: IInnerTreeNode;
  treeItems: ITreeNode[];
};

// 拖拽
export type IDraggable = boolean | IDropType;
export interface IDropType {
  dropPrev?: boolean;
  dropNext?: boolean;
  dropInner?: boolean;
}

export interface IUseDraggable {
  onDragstart: (event: DragEvent, treeNode: IInnerTreeNode) => void; // 拖拽开始时触发的事件
  onDragover: (event: DragEvent) => void; // 拖拽经过时触发的事件
  onDragleave: (event: DragEvent) => void; // 拖拽离开时触发的事件
  onDrop: (event: DragEvent, treeNode: IInnerTreeNode) => void; //拖拽结束(空投)
  onDragend: (event: DragEvent) => void; // 清理工作
}

export interface DragState {
  dropType?: keyof Required<IDropType>; // 拖拽的类型
  draggingNode?: HTMLElement | null; // 当前拖拽的节点是什么
  draggingTreeNode?: IInnerTreeNode | null; // 正在交互的数据节点
}

export type TreeUtils = {
  tempField: FieldType;
  treeData: Ref<IInnerTreeNode[]>;
} & IUseCore &
  IUseToggle &
  IUseCheck &
  IUseOperate &
  IUseDraggable;
