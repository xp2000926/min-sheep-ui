import { FieldType, IInnerTreeNode, ITreeNode } from './tree-type';

export const generateInnerTree = (
  tree: ITreeNode[],
  field: FieldType,
  defaultExpandAll = false,
  level = 0, // 表示当前节点所处层级
  path = [] as IInnerTreeNode[] // 表示递归过程的路径，用来获取父节点id
): IInnerTreeNode[] => {
  level++;
  return tree.reduce((prev, cur) => {
    const o = { ...cur } as IInnerTreeNode;
    o.level = level;
    // 记录调用栈，用于计算 parentId
    if (path.length > 0 && path[path.length - 1].level >= level) {
      //子->父，应该弹出栈顶
      path.pop();
    }
    //记录父->子
    path.push(o);
    //获取parentNode
    const parentNode = path[path.length - 2];
    if (parentNode) {
      //给当前节点增加parentId
      o.parentId = parentNode.id;
    }
    // 判断 cur 是否存在 children，如果存在则递归遍历
    if (o[field.children]) {
      // 首先递归，然后删除 children
      const children = generateInnerTree(
        o[field.children] as ITreeNode[],
        field,
        defaultExpandAll,
        level,
        path
      );
      delete o[field.children];
      if (defaultExpandAll) {
        o.expanded = true;
      }
      return prev.concat(o, children);
    } else {
      // 叶子节点
      // 如果是懒加载,isLeaf会被设震为false， 则不需要设置
      // 如果没有初始化，则默认设置为true
      if (o.isLeaf === undefined) {
        o.isLeaf = true;
      }
      // 将新构造的节点o和已拍平数据拼接起来
      return prev.concat(o);
    }
  }, [] as IInnerTreeNode[]);
};
