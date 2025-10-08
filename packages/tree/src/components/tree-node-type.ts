import { ExtractPropTypes } from 'vue';
import { IInnerTreeNode, treeProps } from '../tree-type';
import { definePropType } from '../../../utils.utils';

export type CheckboxPlacementType = 'left' | 'right';

export const treeNodeProps = {
  ...treeProps,
  treeNode: { type: definePropType<IInnerTreeNode>(Object), required: true },
  onClick: {
    type: definePropType<(e: Event) => void>(Function),
    default: undefined
  }
} as const;
export type TreeNodeProps = ExtractPropTypes<typeof treeNodeProps>;
