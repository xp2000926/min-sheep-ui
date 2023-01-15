import { Ref, SetupContext } from 'vue'
import { IInnerTreeNode } from '../tree-type'
import { IUseCore, IUseLazyLoad, IUseToggle } from './use-tree-type'

export function useToggle(
  innerData: Ref<IInnerTreeNode[]>,
  core: IUseCore,
  context: SetupContext,
  lazyNode: IUseLazyLoad
): IUseToggle {
  const { lazyLoadNodes } = lazyNode
  const toggleNode = (e: Event, node: IInnerTreeNode, accordion = false) => {
    e.stopPropagation()
    // 手风琴模式
    if (accordion) {
      innerData.value.forEach(item => {
        // 筛选不同节点，把不是要打开的节点全部关闭
        if (item.level <= node.level) {
          // 筛选相同节点，把不是要打开的节点全部关闭
          if (item.level === node.level && item.id !== node.id)
            item.expanded = false
          if (item.id === node.id) item.expanded = !item.expanded
          // 节点懒加载
          if (item.expanded) lazyLoadNodes(item)
        } else item.expanded = false
      })
    } else {
      // 默认
      // node.expanded = !node.expanded
      // 在原始列表中获取该节点
      const cur = innerData.value.find(item => item.id === node.id)
      if (cur) {
        cur.expanded = !cur.expanded
        // 节点懒加载
        if (cur.expanded) lazyLoadNodes(cur)
      }
    }
  }
  return {
    toggleNode
  }
}
