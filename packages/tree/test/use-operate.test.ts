import { ref } from 'vue';
import { describe, test, expect } from 'vitest';
import { useOperate } from '../src/composables/use-operate';
import { useCore } from '../src/composables/use-core';
import type { IInnerTreeNode } from '../src/tree-type';

describe('use-operate 组合式函数测试', () => {
  test('append：应在父节点的最后一个子节点之后插入，并更新必要状态', () => {
    const data = ref<IInnerTreeNode[]>([
      {
        id: 1,
        label: 'A',
        level: 1,
        expanded: true,
        isLeaf: true,
        disabled: false,
        class: ''
      },
      {
        id: 2,
        label: 'B',
        level: 1,
        disabled: false,
        class: ''
      }
    ]);
    const core = useCore(data);
    const { append } = useOperate(data, core);

    append(data.value[0], { label: 'A-new' } as any);

    // 新节点应紧随父节点（A）之后
    expect(data.value[1].parentId).toBe(1);
    expect(data.value[1].level).toBe(2);
    expect(data.value[0].expanded).toBe(true);
    expect(data.value[0].isLeaf).toBe(false);
  });

  test('remove：删除某节点应同时删除其所有后代', () => {
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
        id: 11,
        label: 'A-1',
        level: 2,
        parentId: 1,
        expanded: true,
        disabled: false,
        class: ''
      },
      {
        id: 111,
        label: 'A-1-1',
        level: 3,
        parentId: 11,
        disabled: false,
        class: ''
      },
      {
        id: 2,
        label: 'B',
        level: 1,
        disabled: false,
        class: ''
      }
    ]);
    const core = useCore(data);
    const { remove } = useOperate(data, core);

    remove({ id: 11, level: 2, parentId: 1 } as any);
    const ids = data.value.map((n: any) => n.id);
    expect(ids).toEqual([1, 2]); // A-1 及其子 A-1-1 均被删除
  });
});
