import { computed, defineComponent, ref, toRefs } from 'vue'
import { TreeProps, treeProps, IInnerTreeNode } from './tree-type'
import { generateInnerTree } from './utils'

export default defineComponent({
  name: 'STree',
  props: treeProps,
  setup(props: TreeProps) {
    // 获取data
    const { data } = toRefs(props)
    const innerData = ref(generateInnerTree(data.value))
    const toggleNode = (node: IInnerTreeNode) => {
      // node.expanded = !node.expanded
      // 在原始列表中获取该节点
      const cur = innerData.value.find(item => item.id === node.id)
      if (cur) {
        cur.expanded = !cur.expanded
      }
    }
    // 获取那些展开的节点列表
    const expendedTree = computed(() => {
      let excludeNodes: IInnerTreeNode[] = [] //排除列表
      const result = [] // 结果列表
      // 循环列表，找出那些! expanded
      for (const item of innerData.value) {
        // 如果遍历的节点在排除列表中，跳过本次循环
        //excludeNodes.map(node => node.id).includes(item.id)
        if (excludeNodes.includes(item)) {
          continue
        }
        // 当前节点收起，它的子节点应该被排除掉
        if (item.expanded !== true) {
          excludeNodes = getChildren(item)
        }
        result.push(item)
      }
      return result
    })
    // 获取指定节点的子节点
    const getChildren = (node: IInnerTreeNode): IInnerTreeNode[] => {
      const result = [] //结果数组
      // 找到传入节点 node 在列表中的索引
      const startIndex = innerData.value.findIndex(item => item.id === node.id)
      // 找到它后面所有的子节点(level比指定节点大)
      for (
        let i = startIndex + 1;
        i < innerData.value.length && node.level < innerData.value[i].level;
        i++
      ) {
        result.push(innerData.value[i])
      }
      return result
    }
    return () => {
      return (
        <div class="s-tree">
          {expendedTree?.value.map(treeNode => (
            <div
              class="s-tree-node"
              style={{ paddingLeft: `${24 * (treeNode.level - 1)}px` }}
            >
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
              {/* 标签 */}
              {treeNode.label}
            </div>
          ))}
        </div>
      )
    }
  }
})
