import { defineComponent, provide, SetupContext, toRefs } from 'vue'
import { useTree } from './composables/use-tree'
import { IInnerTreeNode, TreeProps, treeProps } from './tree-type'
import STreeNode from './components/tree-node'
import STreeNodeToggle from './components/tree-node-toggle'
import '../../index.scss'
import '../style/tree.scss'
import { VirtualList } from '../../virtual-list'
export default defineComponent({
  name: 'STree',
  props: treeProps,
  emits: ['lazy-load', 'check'],
  setup(props: TreeProps, context: SetupContext) {
    // 获取data
    const {
      data,
      height,
      itemHeight,
      accordion,
      props: defaultProps
    } = toRefs(props)
    const { slots } = context
    const treeData = useTree(data, props, context)
    provide('TREE_UTILS', treeData)
    return () => {
      const TreeNode = (treeNode: IInnerTreeNode) => (
        <STreeNode
          {...props}
          treeNode={treeNode}
          onClick={
            accordion.value
              ? (e: Event) => treeData.toggleNode(e, treeNode, accordion.value)
              : ''
          }
        >
          {{
            content: () =>
              slots.content
                ? slots.content(treeNode)
                : defaultProps.value.label == 'label'
                ? treeNode.label
                : treeNode[defaultProps.value.label],
            icon: () =>
              slots.icon ? (
                slots.icon({
                  nodeData: treeNode,
                  toggleNode: treeData.toggleNode
                })
              ) : (
                <STreeNodeToggle
                  expanded={!!treeNode.expanded}
                  onClick={(e: Event) =>
                    treeData.toggleNode(e, treeNode, accordion.value)
                  }
                />
              ),
            loading: () =>
              slots.loading ? (
                slots.loading({ nodeData: treeData })
              ) : (
                <span class="ml-1">loading...</span>
              )
          }}
        </STreeNode>
      )
      return (
        <div class="s-tree">
          {height?.value ? (
            //虚拟列表
            <div style={{ height: `${height.value}px` }}>
              <VirtualList
                data={treeData.expandedTree.value}
                itemHeight={itemHeight.value}
              >
                {{
                  default: ({ item: treeNode }: { item: IInnerTreeNode }) =>
                    TreeNode(treeNode)
                }}
              </VirtualList>
            </div>
          ) : (
            // 循环节点
            treeData.expandedTree.value.map((treeNode: IInnerTreeNode) =>
              TreeNode(treeNode)
            )
          )}
        </div>
      )
    }
  }
})
