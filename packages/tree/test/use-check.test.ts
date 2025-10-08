import { ref } from 'vue';
import { describe, test, expect } from 'vitest';
import { useCheck } from '../src/composables/use-check';
import { useCore } from '../src/composables/use-core';
import type { IInnerTreeNode } from '../src/tree-type';

describe('use-check 组合式函数测试', () => {
  test('父子联动：勾选父节点应同步所有子节点', () => {
    const data = ref<IInnerTreeNode[]>([
      { id: 1, label: 'A', level: 1, expanded: true, checked: false },
      { id: 11, label: 'A-1', level: 2, parentId: 1, checked: false },
      { id: 12, label: 'A-2', level: 2, parentId: 1, checked: false }
    ]);
    const core = useCore(data);
    const { toggleCheckNode } = useCheck(data, core);

    toggleCheckNode(data.value[0]); // 勾选父
    expect(data.value[0].checked).toBe(true);
    expect(data.value[1].checked).toBe(true);
    expect(data.value[2].checked).toBe(true);
  });

  test('子-父联动：全选兄弟 => 父选中；全不选 => 父不选', () => {
    const data = ref<IInnerTreeNode[]>([
      { id: 1, label: 'A', level: 1, expanded: true, checked: false },
      { id: 11, label: 'A-1', level: 2, parentId: 1, checked: false },
      { id: 12, label: 'A-2', level: 2, parentId: 1, checked: false }
    ]);
    const core = useCore(data);
    const { toggleCheckNode } = useCheck(data, core);

    // 勾选两个子节点 => 父应选中
    toggleCheckNode(data.value[1]);
    toggleCheckNode(data.value[2]);
    expect(data.value[0].checked).toBe(true);

    // 取消两个子节点 => 父不选
    toggleCheckNode(data.value[1]);
    toggleCheckNode(data.value[2]);
    expect(data.value[0].checked).toBe(false);
  });
});
