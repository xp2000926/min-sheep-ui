import { defineComponent, toRefs, provide, SetupContext } from 'vue';
import { IInnerTreeNode, TreeProps, treeProps } from './tree-type';
import { useTree } from './composables/use-tree';
import STreeNode from './components/tree-node';
import STreeNodeToggle from './components/tree-node-toggle';
import { VirtualList } from '../../virtual-list';

export default defineComponent({
  name: 'STree',
  props: treeProps,
  emits: ['lazy-load'],
  setup(props: TreeProps, context: SetupContext) {
    const { data, height, itemHeight, accordion } = toRefs(props);
    const { slots } = context;

    const treeData = useTree(data, props, context);
    provide('TREE_UTILS', treeData);

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
              slots.content ? slots.content(treeNode) : treeNode.label,
            icon: () =>
              slots.icon ? (
                slots.icon({
                  nodeData: treeNode,
                  toggleNode: treeData.toggleNode,
                  accordion: accordion.value
                })
              ) : (
                <STreeNodeToggle
                  expanded={!!treeNode.expanded}
                  onClick={(e: Event) =>
                    treeData.toggleNode(e, treeNode, accordion.value)
                  }
                ></STreeNodeToggle>
              ),
            loading: () =>
              slots.loading ? (
                slots.loading({ nodeData: treeData })
              ) : (
                <span class="ml-1">loading...</span>
              )
          }}
        </STreeNode>
      );
      return (
        <div class="s-tree">
          {height?.value ? ( //虚拟列表
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
      );
    };
  }
});
