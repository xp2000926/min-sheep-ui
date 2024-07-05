import { ExtractPropTypes, PropType } from 'vue';
import { IDraggable } from './composables/use-tree-type';
export type ICheckboxPlacement = 'left' | 'right';
export interface ITreeNode {
  label: string;
  id?: string;
  children?: ITreeNode[];

  selected?: boolean; // 点击选中
  checked?: boolean; // 勾选
  expanded?: boolean; // 展开
  inChecked?: boolean; // 待选中

  disableSelect?: boolean;
  disableCheck?: boolean;
  disableToggle?: boolean;
  disabled?: boolean;
}

export interface IInnerTreeNode extends ITreeNode {
  parentId?: string; // 父节点ID
  level: number; // 节点层级
  isLeaf?: boolean; // 是否叶子结点
  loading?: boolean; // 节点是否显示加载中
  childNodeCount?: number; // 该节点子节点的数量
}
export const treeProps = {
  data: {
    type: Object as PropType<Array<ITreeNode>>,
    required: true
  },
  // 是否显示参考线
  showLine: {
    type: Boolean,
    default: false
  },
  // 是否显示复选框
  checkable: {
    type: Boolean,
    default: false
  },
  // 复选框的位置
  checkboxPlacement: {
    type: String as PropType<ICheckboxPlacement>,
    default: 'left'
  },
  //  是否显示操作按钮
  operable: {
    type: Boolean,
    default: false
  },
  // 拖拽开关属性
  draggable: {
    type: [Boolean, Object] as PropType<IDraggable>,
    default: false
  },
  height: {
    type: Number
  },
  itemHeight: {
    type: Number,
    default: 30
  },
  accordion: {
    type: Boolean,
    default: false
  }
  //todo
  // props: {
  //   type: Object,
  //   default: {
  //     label: 'label',
  //     children: 'children'
  //   }
  // }
} as const;
export type TreeProps = ExtractPropTypes<typeof treeProps>;
