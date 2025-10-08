// packages/tree/test/use-draggable.test.ts
import { ref } from 'vue';
import { describe, test, expect } from 'vitest';
import { useDraggable } from '../src/composables/use-draggable';
import { useCore } from '../src/composables/use-core';
import type { IInnerTreeNode } from '../src/tree-type';

// 简单的 DataTransfer 模拟
class MockDataTransfer {
  store: Record<string, string> = {};
  dropEffect = 'move';
  setData(type: string, val: string) {
    this.store[type] = val;
  }
  getData(type: string) {
    return this.store[type];
  }
}

function makeTarget(height = 100) {
  const el = document.createElement('div');
  (el as any).getBoundingClientRect = () => ({ top: 0, height });
  return el;
}

describe('use-draggable 组合式函数测试', () => {
  test('dropInner：拖拽到目标中间区域应成为其子节点', () => {
    const data = ref<IInnerTreeNode[]>([
      {
        id: 1,
        label: 'A',
        level: 1,
        expanded: true,
        disabled: false,
        class: ''
      },
      {
        id: 2,
        label: 'B',
        level: 1,
        expanded: true,
        disabled: false,
        class: ''
      }
    ]);
    const core = useCore(data);
    const drag = useDraggable(true, data, core);

    const dragstartEvent = new DragEvent('dragstart', { bubbles: true });
    Object.defineProperty(dragstartEvent, 'target', { value: makeTarget() });
    Object.defineProperty(dragstartEvent, 'dataTransfer', {
      value: new MockDataTransfer()
    });
    drag.onDragstart(dragstartEvent, data.value[0]);

    const overEvent = new DragEvent('dragover', {} as any);
    Object.defineProperty(overEvent, 'currentTarget', {
      value: makeTarget(100)
    });
    Object.defineProperty(overEvent, 'dataTransfer', {
      value: new MockDataTransfer()
    });
    Object.defineProperty(overEvent, 'clientY', { value: 50 }); // 中间
    drag.onDragover(overEvent);

    const dropEvent = new DragEvent('drop', { bubbles: true } as any);
    (dragstartEvent.dataTransfer as any).setData('dragNodeId', '1');
    Object.defineProperty(dropEvent, 'currentTarget', {
      value: makeTarget(100)
    });
    Object.defineProperty(dropEvent, 'dataTransfer', {
      value: dragstartEvent.dataTransfer
    });
    drag.onDrop(dropEvent, data.value[1]); // drop 到 B

    const a = data.value.find(n => n.id === 1)!;
    const bIndex = data.value.findIndex(n => n.id === 2);
    const aIndex = data.value.findIndex(n => n.id === 1);
    expect(a.parentId).toBe(2);
    expect(a.level).toBe(2);
    expect(aIndex).toBe(bIndex + 1);
  });

  test('dropPrev/dropNext：应在目标前/后插入并保持同级', () => {
    const data = ref<IInnerTreeNode[]>([
      {
        id: 1,
        label: 'A',
        level: 1,
        disabled: false,
        class: ''
      },
      {
        id: 2,
        label: 'B',
        level: 1,
        disabled: false,
        class: ''
      },
      {
        id: 3,
        label: 'C',
        level: 1,
        disabled: false,
        class: ''
      }
    ]);
    const core = useCore(data);

    // 仅允许前插，避免与 inner 判定产生干扰
    const dragPrev = useDraggable(
      { dropPrev: true, dropNext: false, dropInner: false },
      data,
      core
    );

    // 拖拽 C 到 B 顶部（dropPrev）
    const startPrev = new DragEvent('dragstart');
    Object.defineProperty(startPrev, 'target', { value: makeTarget() });
    Object.defineProperty(startPrev, 'dataTransfer', {
      value: new MockDataTransfer()
    });
    dragPrev.onDragstart(startPrev, data.value[2]);

    const overPrev = new DragEvent('dragover', {} as any);
    Object.defineProperty(overPrev, 'currentTarget', {
      value: makeTarget(100)
    });
    Object.defineProperty(overPrev, 'dataTransfer', {
      value: new MockDataTransfer()
    });
    Object.defineProperty(overPrev, 'clientY', { value: 1 }); // < prevPercent * height
    dragPrev.onDragover(overPrev);

    const dropPrev = new DragEvent('drop');
    (startPrev.dataTransfer as any).setData('dragNodeId', '3');
    Object.defineProperty(dropPrev, 'currentTarget', {
      value: makeTarget(100)
    });
    Object.defineProperty(dropPrev, 'dataTransfer', {
      value: startPrev.dataTransfer
    });
    dragPrev.onDrop(dropPrev, data.value[1]);

    const ids1 = data.value.map(n => n.id);
    expect(ids1).toEqual([1, 3, 2]);

    // 仅允许后插，单独测试 dropNext
    const dragNext = useDraggable(
      { dropPrev: false, dropNext: true, dropInner: false },
      data,
      core
    );

    const startNext = new DragEvent('dragstart');
    Object.defineProperty(startNext, 'target', { value: makeTarget() });
    Object.defineProperty(startNext, 'dataTransfer', {
      value: new MockDataTransfer()
    });
    const cNode = data.value.find(n => n.id === 3)!;
    dragNext.onDragstart(startNext, cNode);

    const overNext = new DragEvent('dragover', {} as any);
    Object.defineProperty(overNext, 'currentTarget', {
      value: makeTarget(100)
    });
    Object.defineProperty(overNext, 'dataTransfer', {
      value: new MockDataTransfer()
    });
    Object.defineProperty(overNext, 'clientY', { value: 99 }); // > nextPercent * height
    dragNext.onDragover(overNext);

    const dropNext = new DragEvent('drop');
    (startNext.dataTransfer as any).setData('dragNodeId', '3');
    Object.defineProperty(dropNext, 'currentTarget', {
      value: makeTarget(100)
    });
    Object.defineProperty(dropNext, 'dataTransfer', {
      value: startNext.dataTransfer
    });
    const bNode = data.value.find(n => n.id === 2)!;
    dragNext.onDrop(dropNext, bNode);

    const ids2 = data.value.map(n => n.id);
    expect(ids2).toEqual([1, 2, 3]);
    expect(data.value.find(n => n.id === 3)!.level).toBe(1);
    expect(data.value.find(n => n.id === 3)!.parentId).toBeUndefined();
  });
});
