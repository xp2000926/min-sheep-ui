import { defineComponent, provide, toRefs } from 'vue'
import { useTree } from './componsables/use-tree'
import { IInnerTreeNode, TreeProps, treeProps } from './tree-type'
import STreeNode from './components/tree-node'
import STreeNodeToggle from './components/tree-node-toggle'
export default defineComponent({
  name: 'STree',
  props: treeProps,
  setup(props: TreeProps, { slots }) {
    // 获取data
    const { data } = toRefs(props)
    const treeData = useTree(data)
    provide('TREE_UTILS', treeData)
    return () => {
      return (
        <div class="s-tree">
          {treeData.expandedTree?.value.map((treeNode: IInnerTreeNode) => (
            <STreeNode {...props} treeNode={treeNode}>
              {{
                content: () =>
                  slots.content ? slots.content(treeNode) : treeNode.label,
                icon: () =>
                  slots.icon ? (
                    slots.icon({
                      nodeData: treeNode,
                      toggleNode: treeData.toggleNode
                    })
                  ) : (
                    <STreeNodeToggle
                      expanded={!!treeNode.expanded}
                      onClick={() => treeData.toggleNode(treeNode)}
                    ></STreeNodeToggle>
                  )
              }}
            </STreeNode>
          ))}
        </div>
      )
    }
  }
})
