import { reactive, computed } from 'vue';
import type { Ref } from 'vue';
import type { IInnerTreeNode } from '../tree-type';
import type {
  DragState,
  IUseDraggable,
  IDropType,
  IDraggable,
  IUseCore
} from './use-tree-type';

const dropTypeMap = {
  dropPrev: 's-tree__node--drop-prev',
  dropNext: 's-tree__node--drop-next',
  dropInner: 's-tree__node--drop-inner'
};

export const useDraggable = (
  draggable: IDraggable,
  data: Ref<IInnerTreeNode[]>,
  { getChildren, getParent }: IUseCore
): IUseDraggable => {
  const dragState = reactive<DragState>({
    dropType: undefined,
    draggingNode: null,
    draggingTreeNode: null
  });

  const treeIdMapValue = computed<Record<string | number, IInnerTreeNode>>(
    () => {
      return data.value.reduce(
        (acc, cur) => ({
          ...acc,
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          [cur.id!]: cur
        }),
        {}
      );
    }
  );

  const removeDraggingStyle = (target: HTMLElement | null) => {
    target?.classList.remove(...Object.values(dropTypeMap));
  };

  const checkIsParent = (
    childNodeId: number | string,
    parentNodeId: number | string
  ): boolean => {
    const realParentId = treeIdMapValue.value[childNodeId]?.parentId;
    if (realParentId === parentNodeId) {
      return true;
    } else if (realParentId !== undefined) {
      return checkIsParent(realParentId, parentNodeId);
    } else {
      return false;
    }
  };

  const resetDragState = () => {
    dragState.dropType = undefined;
    dragState.draggingNode = null;
    dragState.draggingTreeNode = null;
  };

  // 辅助函数：解析当前拖拽目标的放置类型配置（IDropType）
  const parseCurDropType = (draggable: IDraggable): IDropType => {
    if (typeof draggable === 'object') {
      return draggable;
    } else if (draggable === true) {
      return { dropInner: true };
    }
    return {};
  };

  // 辅助函数：计算上下方可放置区域的百分比阈值
  const calculateDropPercentages = (dropType: IDropType) => {
    const { dropPrev, dropNext, dropInner } = dropType;
    // 上方阈值：根据dropPrev/dropInner/dropNext组合确定
    const prevPercent = dropPrev
      ? dropInner
        ? 0.25
        : dropNext
          ? 0.45
          : 1
      : -1;
    // 下方阈值：根据dropNext/dropInner/dropPrev组合确定
    const nextPercent = dropNext ? (dropInner ? 0.75 : dropPrev ? 0.55 : 0) : 1;
    return { prevPercent, nextPercent };
  };

  // 辅助函数：根据鼠标位置和百分比阈值，确定具体放置类型（dropPrev/dropNext/dropInner）
  // dropInner：默认false，避免undefined类型报错
  const determineInnerDropType = (
    distance: number,
    targetHeight: number,
    prevPercent: number,
    nextPercent: number,
    dropInner: boolean
  ): DragState['dropType'] => {
    if (distance < targetHeight * prevPercent) {
      return 'dropPrev';
    } else if (distance > targetHeight * nextPercent) {
      return 'dropNext';
    } else if (dropInner) {
      return 'dropInner';
    }
    return undefined;
  };

  // 辅助函数：根据放置类型更新目标元素的拖拽样式
  const updateTargetDragStyle = (
    target: HTMLElement | null,
    innerDropType: DragState['dropType']
  ) => {
    if (!target) return;
    if (innerDropType) {
      const classList = target.classList;
      const targetClass = dropTypeMap[innerDropType];
      if (!classList.contains(targetClass)) {
        removeDraggingStyle(target);
        classList.add(targetClass);
      }
    } else {
      removeDraggingStyle(target);
    }
  };

  // 拖拽起始
  const onDragstart = (event: DragEvent, treeNode: IInnerTreeNode): void => {
    event.stopPropagation();
    dragState.draggingNode = event.target as HTMLElement | null;
    dragState.draggingTreeNode = treeNode;
    // 将正在拖拽的数据节点id存入dataTransfer，未来需要在drop的时候取出来
    event.dataTransfer?.setData('dragNodeId', treeNode.id!.toString());
  };

  const onDragover = (event: DragEvent): void => {
    event.preventDefault();
    event.stopPropagation();
    // 无拖拽节点时直接返回
    if (!dragState.draggingNode) {
      return;
    }

    if (draggable) {
      // 设置数据传输的放置效果为"移动"
      if (event.dataTransfer) {
        event.dataTransfer.dropEffect = 'move';
      }

      // 无树数据时不处理
      if (!data) {
        return;
      }

      // 1. 解析当前的放置类型配置
      const curDropType = parseCurDropType(draggable);
      // 给dropInner补充默认值：undefined时视为false，确保类型为boolean
      const dropInner = curDropType.dropInner ?? false;

      // 2. 计算上下方放置区域的百分比阈值
      const { prevPercent, nextPercent } =
        calculateDropPercentages(curDropType);

      // 3. 获取目标元素的位置信息和鼠标距离
      const currentTarget = event.currentTarget as HTMLElement | null;
      const targetPosition = currentTarget?.getBoundingClientRect();
      const targetHeight = targetPosition?.height || 0;
      const distance = event.clientY - (targetPosition?.top || 0);

      // 4. 确定当前的具体放置类型（dropInner已确保为boolean，无类型报错）
      const innerDropType = determineInnerDropType(
        distance,
        targetHeight,
        prevPercent,
        nextPercent,
        dropInner
      );

      // 5. 更新目标元素的拖拽样式
      updateTargetDragStyle(currentTarget, innerDropType);

      // 6. 同步拖拽状态的放置类型
      dragState.dropType = innerDropType;
    }
  };

  const onDragleave = (event: DragEvent): void => {
    event.stopPropagation();
    if (!dragState.draggingNode) {
      return;
    }
    removeDraggingStyle(event.currentTarget as HTMLElement | null);
  };

  // 释放事件回调
  const onDrop = (event: DragEvent, dropNode: IInnerTreeNode): void => {
    event.preventDefault();
    event.stopPropagation();
    removeDraggingStyle(event.currentTarget as HTMLElement | null);
    if (!dragState.draggingNode || !draggable) return;

    // 获取正在拖拽的树节点id
    const dragNodeId = event.dataTransfer?.getData('dragNodeId');
    if (dragNodeId) {
      // 判断释放节点是否是拖拽的节点的子节点
      const isParent = checkIsParent(dropNode.id!, dragNodeId);
      // 如果拖拽和释放是同一节点或者父子关系则跳出
      if (dragNodeId === dropNode.id || isParent) {
        return;
      }
      // 判断当前释放类型：dropPrev、dropNext或dropInner
      if (dragState.dropType) {
        handleDrop(dragNodeId, dropNode);
      }

      resetDragState();
    }
  };

  // 释放之后的节点操作
  function handleDrop(dragNodeId: string | number, dropNode: IInnerTreeNode) {
    // 获取正在拖拽的节点
    const dragNode = data.value.find(
      (item: IInnerTreeNode) => item.id == dragNodeId
    );

    if (dragNode) {
      // 备份一个节点
      let cloneDragNode: IInnerTreeNode;
      // 获取拖拽节点子节点
      const childrenOfDragNode = getChildren(dragNode);
      // 获取拖拽节点的父节点
      const parentOfDragNode = getParent(dragNode);

      // 如果是嵌套释放情况
      if (dragState.dropType === 'dropInner') {
        cloneDragNode = {
          ...dragNode,
          parentId: dropNode.id,
          level: dropNode.level + 1
        };
        // 插入克隆节点
        const dropNodeIndex = data.value.indexOf(dropNode);
        data.value.splice(dropNodeIndex + 1, 0, cloneDragNode);
        dropNode.isLeaf = undefined;
        // 删除旧拖拽节点
        const dragNodeIndex = data.value.indexOf(dragNode);
        data.value.splice(dragNodeIndex, 1);
      } else if (dragState.dropType === 'dropNext') {
        cloneDragNode = {
          ...dragNode,
          parentId: dropNode.parentId,
          level: dropNode.level
        };
        const dropNodeIndex = data.value.indexOf(dropNode);
        const dropNodeChildrenLength = getChildren(dropNode, true).length;
        data.value.splice(
          dropNodeIndex + dropNodeChildrenLength + 1,
          0,
          cloneDragNode
        );
        const dragNodeIndex = data.value.indexOf(dragNode);
        data.value.splice(dragNodeIndex, 1);
      } else if (dragState.dropType === 'dropPrev') {
        cloneDragNode = {
          ...dragNode,
          parentId: dropNode.parentId,
          level: dropNode.level
        };
        const dropNodeIndex = data.value.indexOf(dropNode);
        data.value.splice(dropNodeIndex, 0, cloneDragNode);
        const dragNodeIndex = data.value.indexOf(dragNode);
        data.value.splice(dragNodeIndex, 1);
      }

      // 如果拖拽的是有子节点的节点，所有子节点也应该以dropInner方式被移动
      dragState.dropType = 'dropInner';
      childrenOfDragNode.forEach(child => handleDrop(child.id!, cloneDragNode));

      // 拖拽结束，处理父节点isLeaf状态
      if (parentOfDragNode) {
        if (getChildren(parentOfDragNode).length === 0) {
          parentOfDragNode.isLeaf = true;
        }
      }
    }
  }
  const onDragend = (event: DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    resetDragState();
  };

  return {
    onDragstart,
    onDragover,
    onDragleave,
    onDrop,
    onDragend
  };
};
