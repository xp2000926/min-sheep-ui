import { defineComponent, toRefs } from 'vue'
import { useTree } from './componsables/use-tree'
import { TreeProps, treeProps } from './tree-type'

const NODE_HEIGHT = 32 // 节点高度
const NODE_INDENT = 24 // 节点缩进大小

export default defineComponent({
  name: 'STree',
  props: treeProps,
  setup(props: TreeProps) {
    // 获取data
    const { data, checkable } = toRefs(props)
    const { expandedTree, toggleNode, getChildren, toggleCheckNode } =
      useTree(data)
    return () => {
      return (
        <div class="s-tree">
          {expandedTree?.value.map(treeNode => (
            <div
              class="s-tree-node hover:bg-slate-300 relative leading-8"
              style={{ paddingLeft: `${NODE_INDENT * (treeNode.level - 1)}px` }}
            >
              {/* 连接线 */}
              {!treeNode.isLeaf && treeNode.expanded && (
                <span
                  class="s-tree-node__vline absolute w-px bg-slate-300"
                  style={{
                    height: `${NODE_HEIGHT * getChildren(treeNode).length}px`,
                    left: `${NODE_INDENT * (treeNode.level - 1) + 11}px`,
                    top: `${NODE_HEIGHT}px`
                  }}
                />
              )}
              {/* 折叠图标 */}
              {/* 判断当前节点是否是叶子节点 */}
              {treeNode.isLeaf ? (
                <span style={{ display: 'inline-block', width: '18px' }}></span>
              ) : (
                <svg
                  onClick={() => toggleNode(treeNode)}
                  style={{
                    width: '18px',
                    height: '18px',
                    display: 'inline-block',
                    transform: treeNode.expanded ? 'rotate(90deg)' : ''
                  }}
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M384 192v640l384-320.064z"
                  ></path>
                </svg>
              )}
              {/* 复选框 */}
              {checkable.value && (
                <input
                  type="checkbox"
                  v-model={treeNode.checked}
                  onClick={() => {
                    toggleCheckNode(treeNode)
                  }}
                />
              )}
              {/* 标签 */}
              {treeNode.label}
            </div>
          ))}
        </div>
      )
    }
  }
})
