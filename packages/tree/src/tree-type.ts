import { ExtractPropTypes } from 'vue';
import { definePropType } from '../../utils.utils';
import { IDraggable } from './composables/use-tree-type';
export type CheckboxPlacementType = 'left' | 'right';

export interface ITreeNode {
  label?: string;
  id?: string | number;
  children?: ITreeNode[];

  disabled: boolean; // 指定节点选择框是否禁用为节点对象的某个属性值
  class: string; // 自定义节点类名

  selected?: boolean; // 点击选中
  checked?: boolean; // 勾选
  expanded?: boolean; // 展开

  disableSelect?: boolean; // 禁止选中
  disableCheck?: boolean; // 禁止勾选
  disableToggle?: boolean; // 禁止折叠

  [key: string]: unknown;
}

export interface IInnerTreeNode extends ITreeNode {
  parentId?: string | number; // 父节点ID
  level: number; // 节点层级
  isLeaf?: boolean; // 是否叶子结点
  loading?: boolean; // 节点是否显示加载中
  childNodeCount?: number; // 该节点子节点的数量
}

export type FieldType = {
  label: string | ((data: IInnerTreeNode) => string);
  children: string;
  disabled: boolean | ((data: IInnerTreeNode) => boolean);
  isLeaf: boolean | ((data: IInnerTreeNode) => boolean);
};
export const treeProps = {
  data: {
    type: definePropType<ITreeNode[]>(Array),
    default: () => []
  },
  emptyText: {
    type: String,
    default: ''
  },
  field: {
    type: definePropType<FieldType>(Object),
    default: () => ({
      label: 'label',
      children: 'children',
      disabled: false,
      isLeaf: false,
      class: ''
    })
  },
  // 是否显示参考线
  showLine: {
    type: Boolean,
    default: false
  },
  blockLine: {
    type: Boolean,
    default: false
  },
  blockNode: {
    type: Boolean,
    default: false
  },
  checkable: {
    type: Boolean,
    default: false
  },
  checkboxPlacement: {
    type: definePropType<CheckboxPlacementType>(String),
    default: 'left'
  },
  defaultExpandAll: {
    type: Boolean,
    default: false
  },
  defaultExpandedKeys: {
    type: Array<string | number>,
    default: []
  },
  //  是否显示操作按钮
  operable: {
    type: Boolean,
    default: false
  },
  load: {
    type: Function,
    default: () => () => ({}),
    description: '异步加载数据的方法'
  },
  lazy: {
    type: Boolean,
    default: false,
    description: '是否懒加载子节点'
  },
  // expandOnClick: {
  //   type: Boolean,
  //   default: false,
  //   description: '是否在点击节点后展开或收缩节点'
  // },
  draggable: {
    type: definePropType<boolean | IDraggable>([Boolean, Object]),
    default: false
  },
  rightMenu: {
    type: Boolean,
    default: false
  },
  accordion: {
    type: Boolean,
    default: false
  }
  // cascade: {
  //   type: Boolean,
  //   default: false
  // }
} as const;
export type TreeProps = ExtractPropTypes<typeof treeProps>;
