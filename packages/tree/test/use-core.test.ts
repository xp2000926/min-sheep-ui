import { ref } from 'vue';
import { describe, test, expect } from 'vitest';
import { useCore } from '../src/composables/use-core';
import type { IInnerTreeNode } from '../src/tree-type';

describe('use-core 组合式函数测试', () => {
  test('expandedTree：应当只在父收起时排除其后代', () => {
    const data = ref<IInnerTreeNode[]>([
      { id: 1, label: 'A', level: 1, expanded: false },
      { id: 11, label: 'A-1', level: 2, parentId: 1 },
      { id: 111, label: 'A-1-1', level: 3, parentId: 11 },
      { id: 2, label: 'B', level: 1, expanded: true },
      { id: 21, label: 'B-1', level: 2, parentId: 2 }
    ]);
    const core = useCore(data);
    // A 收起 => A 的所有后代应被排除，B 展开 => B 及其子在结果中
    const ids = core.expandedTree.value.map(n => n.id);
    console.log('ids: ', ids);
    expect(ids).toEqual([1, 2, 21]);
  });

  test('getChildren：默认递归返回所有后代；非递归仅返回直接子节点', () => {
    const data = ref<IInnerTreeNode[]>([
      { id: 1, label: 'A', level: 1, expanded: true },
      { id: 11, label: 'A-1', level: 2, parentId: 1, expanded: true },
      { id: 111, label: 'A-1-1', level: 3, parentId: 11 },
      { id: 2, label: 'B', level: 1 }
    ]);
    const core = useCore(data);
    const all = core.getChildren(data.value[0], true).map(n => n.id);
    const direct = core.getChildren(data.value[0], false).map(n => n.id);
    expect(all).toEqual([11, 111]);
    expect(direct).toEqual([11]);
  });

  test('getIndex/getNode/getParent：索引、节点与父节点应正确返回', () => {
    const data = ref<IInnerTreeNode[]>([
      { id: 1, label: 'A', level: 1 },
      { id: 11, label: 'A-1', level: 2, parentId: 1 }
    ]);
    const core = useCore(data);
    expect(core.getIndex({ id: 11, level: 2, parentId: 1 } as any)).toBe(1);
    expect(core.getNode({ id: 11, level: 2 } as any)?.label).toBe('A-1');
    expect(core.getParent({ id: 11, level: 2, parentId: 1 } as any)?.id).toBe(
      1
    );
  });
});
