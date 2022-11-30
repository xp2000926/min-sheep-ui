import { IInnerTreeNode, ITreeNode } from './tree-type'

export function generateInnerTree(
  tree: ITreeNode[],
  level = 0, //表示当前节点所处层级
  path = [] as IInnerTreeNode[] //表示递归过程的路径，用来获取父节点id
): IInnerTreeNode[] {
  level++
  return tree.reduce((prev, cur) => {
    const o = { ...cur } as IInnerTreeNode
    o.level = level
    // 记录调用栈，用于计算 parentId
    if (path.length > 0 && path[path.length - 1].level >= level) {
      //子->父，应该弹出栈顶
      path.pop()
    }
    //记录父->子
    path.push(o)
    //获取parentNode
    const parentNode = path[path.length - 2]
    if (parentNode) {
      //给当前节点增加parentId
      o.parentId = parentNode.id
    }

    // 判断 cur 是否存在 children，如果存在则递归遍历
    if (o.children) {
      // 首先递归，然后删除 children
      const children = generateInnerTree(o.children, level, path)
      delete o.children
      return prev.concat(o, children)
    } else {
      // 叶子节点
      o.isLeaf = true
      return prev.concat(o)
    }
  }, [] as IInnerTreeNode[])
}
// const tree = [
//   {
//     label: 'docs',
//     id: 'docs'
//   },
//   {
//     label: 'packages',
//     id: 'packages',
//     expanded: true,
//     children: [
//       {
//         label: 'plugin-vue',
//         id: 'plugin-vue'
//       },
//       {
//         label: 'vite',
//         id: 'vite',
//         expanded: true,
//         children: [
//           {
//             label: 'src',
//             id: 'src'
//           },
//           {
//             label: 'README.md',
//             id: 'README.md'
//           }
//         ]
//       }
//     ]
//   },
//   {
//     label: 'scripts',
//     id: 'scripts',
//     children: [
//       {
//         label: 'release.ts',
//         id: 'release.ts'
//       },
//       {
//         label: 'verifyCommit.ts',
//         id: 'verifyCommit.ts'
//       }
//     ]
//   },
//   {
//     label: 'pnpm-workspace.yaml',
//     id: 'pnpm-workspace.yaml'
//   }
// ]

// console.log(generateInnerTree(tree))
