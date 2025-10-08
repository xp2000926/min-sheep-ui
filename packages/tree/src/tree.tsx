import {
  defineComponent,
  provide,
  toRefs,
  SetupContext,
  getCurrentInstance,
  ComponentInternalInstance
} from 'vue';
import { IInnerTreeNode, TreeProps, treeProps } from './tree-type';
import { useTree } from './composables/use-tree';
import STreeNode from './components/tree-node';
import STreeNodeToggle from './components/tree-node-toggle';

const getCheckedKeys = () => [];
const setCheckedKeys = () => [];

export default defineComponent({
  name: 'STree',
  props: treeProps,
  emits: ['current-change', 'lazy-load'],
  setup(props: TreeProps, context: SetupContext) {
    const { data, emptyText, field, defaultExpandAll, accordion } =
      toRefs(props);
    const vm = getCurrentInstance();
    const treeData = useTree(data, field, defaultExpandAll, props, context);
    const { expose, slots } = context;

    expose(
      Object.assign((vm as any).proxy, {
        setCheckedKeys,
        getCheckedKeys
      })
    );
    provide('TREE_UTILS', treeData);
    //
    const TreeNode = (treeNode: IInnerTreeNode) => (
      <STreeNode
        key={treeNode.id}
        {...props}
        treeNode={treeNode}
        onClick={(e: Event) =>
          accordion.value && treeData.toggleNode(e, treeNode, accordion.value)
        }
      >
        {{
          content: () =>
            slots.content
              ? slots.content(treeNode)
              : treeNode[
                  typeof field.value.label == 'string'
                    ? field.value.label
                    : field.value.label(treeNode)
                ],
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
    );
    return () => (
      <div class="s-tree">
        {treeData.expandedTree.value.length === 0
          ? emptyText.value === ''
            ? slots.empty
              ? slots.empty()
              : '暂无数据'
            : emptyText.value
          : // 循环输出节点
            treeData.expandedTree.value.map((treeNode: IInnerTreeNode) =>
              TreeNode(treeNode)
            )}
      </div>
    );
  }
});

export type Tree = {
  getCheckedKeys: typeof getCheckedKeys;
  setCheckedKeys: typeof setCheckedKeys;
} & ComponentInternalInstance['proxy'];

// https://appwhrkrsz84443.xet.citv.cn/p/course/video/v_62fcb092e4b0eca59c24358e?product_id=p_62a44620e4b01c509abcbcda
