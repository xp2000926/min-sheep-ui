import { defineComponent, inject, toRefs } from 'vue'
import { IInnerTreeNode } from '../tree-type'
import { TreeNodeProps, treeNodeProps } from './tree-node-type.'
const NODE_HEIGHT = 32 // 节点高度
const NODE_INDENT = 24 // 节点缩进大小
type TreeUtils = {
  toggleCheckNode: (treeNode: IInnerTreeNode) => void
  getChildrenExpanded: (treeNode: IInnerTreeNode) => IInnerTreeNode[]
}
export default defineComponent({
  name: 'STreeNode',
  props: treeNodeProps,
  setup(props: TreeNodeProps, { slots }) {
    const { lineable, checkable, treeNode } = toRefs(props)
    const { toggleCheckNode, getChildrenExpanded } = inject(
      'TREE_UTILS'
    ) as TreeUtils
    return () => (
      <div
        class="s-tree-node hover:bg-slate-300 relative leading-8"
        style={{ paddingLeft: `${NODE_INDENT * (treeNode.value.level - 1)}px` }}
      >
        {/* 连接线 */}
        {!treeNode.value.isLeaf && treeNode.value.expanded && lineable.value && (
          <span
            class="s-tree-node__vline absolute w-px bg-slate-300"
            style={{
              height: `${
                NODE_HEIGHT * getChildrenExpanded(treeNode.value).length
              }px`,
              left: `${NODE_INDENT * (treeNode.value.level - 1) + 11}px`,
              top: `${NODE_HEIGHT}px`
            }}
          />
        )}
        {/* 折叠图标 */}
        {/* 判断当前节点是否是叶子节点 */}
        {treeNode.value.isLeaf ? (
          <span style={{ display: 'inline-block', width: '18px' }}></span>
        ) : (
          slots.icon?.()
        )}
        {/* 复选框 */}
        {checkable.value && (
          <input
            type="checkbox"
            v-model={treeNode.value.checked}
            onClick={() => {
              toggleCheckNode(treeNode.value)
            }}
          />
        )}
        {/* 节点文本本 */}
        {slots.content?.()}
      </div>
    )
  }
})
