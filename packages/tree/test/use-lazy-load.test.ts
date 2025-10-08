import { ref } from 'vue';
import { describe, test, expect, vi } from 'vitest';
import { useLazyLoad } from '../src/composables/use-lazy-load';
import { useCore } from '../src/composables/use-core';
import type { IInnerTreeNode, FieldType } from '../src/tree-type';
import type { LazyNodeResult } from '../src/composables/use-tree-type';

describe('use-lazy-load 组合式函数测试', () => {
  test('lazyLoadNodes：应触发 lazy-load 事件并在回调中插入子节点', () => {
    // 父节点不在索引 0（因为 insertChildren 使用 parentIndex 判断，0 会被跳过）
    const data = ref<IInnerTreeNode[]>([
      {
        id: 9,
        label: 'X',
        level: 1,
        disabled: false,
        class: ''
      },
      {
        id: 1,
        label: 'A',
        level: 1,
        isLeaf: false,
        expanded: true,
        disabled: false,
        class: ''
      }
    ]);
    const core = useCore(data);

    const emit = vi.fn();
    const tempField: FieldType = {
      label: 'label',
      children: 'children',
      disabled: false,
      isLeaf: false
    } as any;

    const { lazyLoadNodes } = useLazyLoad(
      data,
      core,
      { emit } as any,
      tempField
    );

    // 触发懒加载
    lazyLoadNodes({ id: 1, level: 1 } as any);
    // 事件名称与参数数量
    expect(emit).toHaveBeenCalledWith(
      'lazy-load',
      expect.objectContaining({ id: 1 }),
      expect.any(Function)
    );

    // 取出回调并注入异步结果
    const dealChildNodes = emit.mock.calls[0][2] as (
      result: LazyNodeResult
    ) => void;
    dealChildNodes({
      node: { id: 1, level: 1 } as any,
      treeItems: [
        {
          id: 11,
          label: 'A-1',
          disabled: false,
          class: ''
        },
        {
          id: 12,
          label: 'A-2',
          disabled: false,
          class: ''
        }
      ]
    });

    // 子节点应被拍平并插入到父节点后方
    const ids = data.value.map(n => n.id);
    expect(ids).toEqual([9, 1, 11, 12]);
    // 父节点 loading 结束，childNodeCount 更新
    const parent = data.value.find(n => n.id === 1)!;
    expect(parent.loading).toBe(false);
    expect(parent.childNodeCount).toBe(2);
  });

  test('lazyLoadNodes：isLeaf 为 true 或已存在 childNodeCount 不触发加载', () => {
    const data = ref<IInnerTreeNode[]>([
      {
        id: 1,
        label: 'A',
        level: 1,
        isLeaf: true,
        disabled: false,
        class: ''
      },
      {
        id: 2,
        label: 'B',
        level: 1,
        isLeaf: false,
        childNodeCount: 1,
        disabled: false,
        class: ''
      }
    ]);
    const core = useCore(data);
    const emit = vi.fn();
    const tempField = {
      label: 'label',
      children: 'children',
      disabled: false,
      isLeaf: false
    } as FieldType;

    const { lazyLoadNodes } = useLazyLoad(
      data,
      core,
      { emit } as any,
      tempField
    );
    lazyLoadNodes({ id: 1, level: 1 } as any);
    lazyLoadNodes({ id: 2, level: 1 } as any);
    expect(emit).not.toHaveBeenCalled();
  });
});
