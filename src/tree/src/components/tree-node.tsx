import { defineComponent, inject, toRefs } from 'vue';
import { treeNodeProps, TreeNodeProps } from './tree-node-type';
import { IInnerTreeNode } from '../tree-type';
const NODE_HEIGHT = 28; // 节点高度
const NODE_INDENT = 24; // 节点缩进大小
type TreeUtils = {
  toggleNode: (treeNode: IInnerTreeNode) => void;
  toggleCheckNode: (treeNode: IInnerTreeNode) => void;
  getChildrenExpanded: (treeNode: IInnerTreeNode) => IInnerTreeNode[];
};
export default defineComponent({
  name: 'STreeNode',
  props: treeNodeProps,
  setup(props: TreeNodeProps, { slots }) {
    const { showLine, checkable, checkboxPlacement, treeNode } = toRefs(props);
    const { toggleNode, toggleCheckNode, getChildrenExpanded } = inject(
      'TREE_UTILS'
    ) as TreeUtils;
    return () => (
      <div
        class="s-tree-node hover:bg-slate-100 relative leading-7 flex justify-between"
        style={{
          paddingLeft: `${NODE_INDENT * (treeNode.value.level - 1)}px`
        }}
      >
        <div>
          {/* 连接线 */}
          {!treeNode.value.isLeaf &&
            treeNode.value.expanded &&
            showLine.value && (
              <span
                class="s-tree-line absolute w-px bg-gray-300"
                style={{
                  height: `${NODE_HEIGHT * getChildrenExpanded(treeNode.value).length}px`,
                  left: `${NODE_INDENT * (treeNode.value.level - 1) + 11}px`,
                  top: `${NODE_HEIGHT}px`
                }}
              ></span>
            )}

          {/* 折叠图标 */}
          {/* 判断当前节点是否是叶子节点 */}
          {treeNode.value.isLeaf ? (
            <span style={{ display: 'inline-block', width: '18px' }}></span>
          ) : (
            slots.icon!()
          )}
          {/* 复选框 */}
          {checkable.value && checkboxPlacement.value == 'left' && (
            <input
              type="checkbox"
              v-model={treeNode.value.checked}
              onClick={() => {
                toggleCheckNode(treeNode.value);
              }}
            />
          )}
          {/* 标签 */}
          {slots.content!()}
        </div>
        {/* 复选框 */}
        {checkable.value && checkboxPlacement.value == 'right' && (
          <input
            type="checkbox"
            v-model={treeNode.value.checked}
            onClick={() => {
              toggleCheckNode(treeNode.value);
            }}
          />
        )}
      </div>
    );
  }
});
