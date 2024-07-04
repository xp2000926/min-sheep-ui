import { defineComponent, toRefs, provide } from 'vue';
import { TreeProps, treeProps } from './tree-type';
import { useTree } from './composables/use-tree';
import STreeNode from './components/tree-node';
import STreeNodeToggle from './components/tree-node-toggle';

export default defineComponent({
  name: 'STree',
  props: treeProps,
  setup(props: TreeProps, { slots }) {
    const { data } = toRefs(props);

    const treeData = useTree(data);
    provide('TREE_UTILS', treeData);
    return () => {
      // return <div class="s-tree">tree</div>;
      return (
        <div class="s-tree">
          {
            //循环输出节点
            treeData.expandedTree?.value.map(treeNode => (
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
                      />
                    )
                }}
              </STreeNode>
            ))
          }
        </div>
      );
    };
  }
});
