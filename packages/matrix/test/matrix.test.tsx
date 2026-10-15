import { mount } from '@vue/test-utils';
import { describe, expect, test, vi } from 'vitest';
import Matrix from '../src/matrix';

describe('matrix 测试', () => {
  // ─────────────── 基础渲染 ───────────────
  test('matrix 是否可以正常工作', () => {
    const wrapper = mount(Matrix);
    expect(wrapper.element.nodeName).toBe('DIV');
  });

  test('根节点应带有 s-matrix 类名', () => {
    const wrapper = mount(Matrix);
    expect(wrapper.classes()).toContain('s-matrix');
  });

  // ─────────────── 行列数自动推导 ───────────────
  test('仅传 data 时，应按 data 行列渲染单元格', () => {
    const wrapper = mount(Matrix, {
      props: {
        data: [
          [1, 2, 3, 4],
          [5, 6, 7, 8],
          [9, 10, 11, 12]
        ]
      }
    });
    // 只统计数据格
    expect(wrapper.findAll('.s-matrix__cell').length).toBe(3 * 4);
  });

  test('未传 data 但传了 rowHeaders 时，应按 rowHeaders 长度渲染行数', () => {
    const wrapper = mount(Matrix, {
      props: {
        rowHeaders: ['A', 'B', 'C'],
        colHeaders: ['X', 'Y']
      }
    });
    // 行头 3、列头 2、角标 1
    expect(wrapper.findAll('.s-matrix__row-header').length).toBe(3);
    expect(wrapper.findAll('.s-matrix__col-header').length).toBe(2);
    expect(wrapper.findAll('.s-matrix__corner').length).toBe(1);
    // 数据格：3 行 × 2 列
    expect(wrapper.findAll('.s-matrix__cell').length).toBe(3 * 2);
  });

  test('cols 取 data 各行最大长度、colHeaders、footerRow 三者最大值', () => {
    const wrapper = mount(Matrix, {
      props: {
        data: [
          [1, 2],
          [3, 4, 5]
        ],
        colHeaders: ['A', 'B', 'C', 'D'],
        footerRow: [9, 9, 9, 9, 9]
      }
    });
    // 最大列数 = 5（footerRow 最长）
    const style = wrapper.attributes('style') ?? '';
    expect(style).toContain('repeat(5,');

    // 数据格按最大列数补齐：2 行 × 5 列 = 10
    expect(wrapper.findAll('.s-matrix__cell').length).toBe(2 * 5);
    // 列头格数 = 5
    expect(wrapper.findAll('.s-matrix__col-header').length).toBe(5);
    // 汇总格数 = 5
    expect(wrapper.findAll('.s-matrix__footer-cell').length).toBe(5);
  });

  test('grid 样式应包含正确的行数与列数', () => {
    const wrapper = mount(Matrix, {
      props: {
        data: [
          [1, 2, 3],
          [4, 5, 6]
        ],
        cellWidth: 100,
        cellHeight: 50
      }
    });
    const style = wrapper.attributes('style') ?? '';
    expect(style).toContain('display: grid');
    expect(style).toContain('repeat(3, 100px)');
    expect(style).toContain('repeat(2, 50px)');
  });

  // ─────────────── 表头渲染 ───────────────
  test('传入 rowHeaders 与 colHeaders 时，应渲染表头行与行头列', () => {
    const wrapper = mount(Matrix, {
      props: {
        rowHeaders: ['A', 'B'],
        colHeaders: ['X', 'Y'],
        data: [
          [1, 2],
          [3, 4]
        ]
      }
    });
    const text = wrapper.text();
    expect(text).toContain('A');
    expect(text).toContain('B');
    expect(text).toContain('X');
    expect(text).toContain('Y');
  });

  test('行列头都存在时，应渲染 cornerLabel', () => {
    const wrapper = mount(Matrix, {
      props: {
        rowHeaders: ['R'],
        colHeaders: ['C'],
        cornerLabel: '自定义角标'
      }
    });
    expect(wrapper.text()).toContain('自定义角标');
    expect(wrapper.findAll('.s-matrix__corner').length).toBe(1);
  });

  test('未传 cornerLabel 时，应使用默认角标文案', () => {
    const wrapper = mount(Matrix, {
      props: {
        rowHeaders: ['R'],
        colHeaders: ['C']
      }
    });
    expect(wrapper.text()).toContain('环境要素');
  });

  // ─────────────── 数据渲染 ───────────────
  test('应按 data 二维数组渲染单元格内容', () => {
    const wrapper = mount(Matrix, {
      props: {
        data: [
          [11, 22],
          [33, 44]
        ]
      }
    });
    const text = wrapper.text();
    expect(text).toContain('11');
    expect(text).toContain('22');
    expect(text).toContain('33');
    expect(text).toContain('44');
  });

  test('data 缺省时应渲染 0 个数据格且不报错', () => {
    const wrapper = mount(Matrix);
    expect(wrapper.findAll('.s-matrix__cell').length).toBe(0);
  });

  test('data 各行长度不足时，多余单元格应渲染空串', () => {
    const wrapper = mount(Matrix, {
      props: {
        data: [[1]],
        colHeaders: ['A', 'B', 'C']
      }
    });
    // 列数 = max(1, 3) = 3，行数 = 1
    const cells = wrapper.findAll('.s-matrix__cell');
    expect(cells.length).toBe(3);
    expect(cells.map(c => c.text())).toEqual(['1', '', '']);
  });

  // ─────────────── 底部汇总行 ───────────────
  test('传入 footerRow 时应额外渲染汇总行', () => {
    const wrapper = mount(Matrix, {
      props: {
        rowHeaders: ['A', 'B'],
        colHeaders: ['X', 'Y'],
        data: [
          [1, 2],
          [3, 4]
        ],
        footerRow: [5, 6],
        footerLabel: '合计'
      }
    });
    const text = wrapper.text();
    expect(text).toContain('合计');
    expect(text).toContain('5');
    expect(text).toContain('6');
    expect(wrapper.findAll('.s-matrix__footer-cell').length).toBe(2);
  });

  test('footerRow 中的 null / undefined 应显示为 —', () => {
    const wrapper = mount(Matrix, {
      props: {
        rowHeaders: ['A'],
        data: [[1, 2]],
        footerRow: [null, undefined]
      }
    });
    const dashes = wrapper
      .findAll('.s-matrix__footer-cell')
      .filter(el => el.text() === '—');
    expect(dashes.length).toBe(2);
  });

  // ─────────────── 等级渲染 ───────────────
  test('showLevel=true 且提供 levelResolver 时，应显示分数与等级文字', () => {
    const levelResolver = (score: number) => {
      if (score >= 85)
        return { label: '优秀', className: 'cell-excellent', color: '#cf1322' };
      if (score >= 70)
        return { label: '良好', className: 'cell-good', color: '#d46b08' };
      return { label: '一般', className: 'cell-fair', color: '#d48806' };
    };

    const wrapper = mount(Matrix, {
      props: {
        data: [[90, 75, 60]],
        showLevel: true,
        levelResolver
      }
    });

    const text = wrapper.text();
    expect(text).toContain('90');
    expect(text).toContain('优秀');
    expect(text).toContain('75');
    expect(text).toContain('良好');
    expect(text).toContain('60');
    expect(text).toContain('一般');
  });

  test('showLevel=false 时不显示等级文字', () => {
    const levelResolver = () => ({
      label: '等级',
      className: 'x',
      color: '#000'
    });
    const wrapper = mount(Matrix, {
      props: {
        data: [[90]],
        showLevel: false,
        levelResolver
      }
    });
    expect(wrapper.text()).not.toContain('等级');
  });

  // ─────────────── 自定义类名 ───────────────
  test('cellClass 为字符串时，应挂到所有数据单元格上', () => {
    const wrapper = mount(Matrix, {
      props: {
        data: [
          [1, 2],
          [3, 4]
        ],
        cellClass: 'my-cell'
      }
    });
    expect(wrapper.findAll('.my-cell').length).toBe(4);
    // 数据格同时也应带 s-matrix__cell
    expect(wrapper.findAll('.s-matrix__cell.my-cell').length).toBe(4);
  });

  test('cellClass 为函数时，应按行列返回不同类名', () => {
    const wrapper = mount(Matrix, {
      props: {
        data: [
          [1, 2],
          [3, 4]
        ],
        cellClass: (row: number, col: number) => `cell-${row}-${col}`
      }
    });
    expect(wrapper.find('.cell-0-0').exists()).toBe(true);
    expect(wrapper.find('.cell-0-1').exists()).toBe(true);
    expect(wrapper.find('.cell-1-0').exists()).toBe(true);
    expect(wrapper.find('.cell-1-1').exists()).toBe(true);
  });

  // ─────────────── 事件 ───────────────
  test('点击数据单元格应触发 cell-click，并带上 { row, col, value }', async () => {
    const onCellClick = vi.fn();
    const wrapper = mount(Matrix, {
      props: {
        data: [
          [11, 22],
          [33, 44]
        ],
        onCellClick
      }
    });

    const target = wrapper
      .findAll('.s-matrix__cell')
      .find(el => el.text() === '33')!;
    await target.trigger('click');

    expect(onCellClick).toHaveBeenCalledTimes(1);
    expect(onCellClick).toHaveBeenCalledWith({ row: 1, col: 0, value: 33 });
  });

  test('双击数据单元格应触发 cell-dblclick', async () => {
    const onCellDblclick = vi.fn();
    const wrapper = mount(Matrix, {
      props: {
        data: [[99]],
        onCellDblclick
      }
    });

    const target = wrapper
      .findAll('.s-matrix__cell')
      .find(el => el.text() === '99')!;
    await target.trigger('dblclick');

    expect(onCellDblclick).toHaveBeenCalledTimes(1);
    expect(onCellDblclick).toHaveBeenCalledWith({ row: 0, col: 0, value: 99 });
  });

  test('点击汇总行不应触发 cell-click', async () => {
    const onCellClick = vi.fn();
    const wrapper = mount(Matrix, {
      props: {
        data: [[1]],
        footerRow: [99],
        onCellClick
      }
    });

    const footerCell = wrapper
      .findAll('.s-matrix__footer-cell')
      .find(el => el.text() === '99')!;
    await footerCell.trigger('click');

    expect(onCellClick).not.toHaveBeenCalled();
  });

  // ─────────────── 插槽 ───────────────
  test('#default 插槽应接管数据单元格渲染', () => {
    const wrapper = mount(Matrix, {
      props: {
        data: [[10, 20]]
      },
      slots: {
        default: `<template #default="{ row, col, value }">
          <span class="slot-cell">slot-{{ row }}-{{ col }}-{{ value }}</span>
        </template>`
      }
    });

    const slotCells = wrapper.findAll('.slot-cell');
    expect(slotCells.length).toBe(2);
    expect(slotCells[0].text()).toBe('slot-0-0-10');
    expect(slotCells[1].text()).toBe('slot-0-1-20');
  });

  // ─────────────── 尺寸与对齐 ───────────────
  test('rowHeaderWidth / colHeaderHeight / footerHeight 应反映到 grid 样式', () => {
    const wrapper = mount(Matrix, {
      props: {
        rowHeaders: ['R'],
        colHeaders: ['C'],
        data: [[1]],
        footerRow: [1],
        rowHeaderWidth: 200,
        colHeaderHeight: 60,
        footerHeight: 40,
        cellWidth: 80,
        cellHeight: 30
      }
    });
    const style = wrapper.attributes('style') ?? '';
    expect(style).toContain('200px');
    expect(style).toContain('60px');
    expect(style).toContain('40px');
    expect(style).toContain('80px');
    expect(style).toContain('30px');
  });

  test('align=left 时数据格 justifyContent 应为 flex-start', () => {
    const wrapper = mount(Matrix, {
      props: {
        data: [[1]],
        align: 'left'
      }
    });
    const cell = wrapper.findAll('.s-matrix__cell')[0];
    expect(cell.attributes('style')).toContain('flex-start');
  });

  test('align=right 时数据格 justifyContent 应为 flex-end', () => {
    const wrapper = mount(Matrix, {
      props: {
        data: [[1]],
        align: 'right'
      }
    });
    const cell = wrapper.findAll('.s-matrix__cell')[0];
    expect(cell.attributes('style')).toContain('flex-end');
  });

  test('align=center（默认）时数据格 justifyContent 应为 center', () => {
    const wrapper = mount(Matrix, {
      props: {
        data: [[1]]
      }
    });
    const cell = wrapper.findAll('.s-matrix__cell')[0];
    expect(cell.attributes('style')).toContain('center');
  });

  test('bordered=false 时不应有边框样式', () => {
    const wrapper = mount(Matrix, {
      props: {
        data: [[1]],
        bordered: false
      }
    });
    const style = wrapper.attributes('style') ?? '';
    expect(style).toContain('border: none');
  });

  // ─────────────── 边界情况 ───────────────
  test('data=[] 且无表头时不应崩溃', () => {
    const wrapper = mount(Matrix, {
      props: { data: [] }
    });
    expect(wrapper.element.nodeName).toBe('DIV');
    expect(wrapper.findAll('.s-matrix__cell').length).toBe(0);
  });

  test('data 为空数组但传了 colHeaders 时，列头应正常渲染', () => {
    const wrapper = mount(Matrix, {
      props: {
        data: [],
        colHeaders: ['X', 'Y', 'Z']
      }
    });
    expect(wrapper.findAll('.s-matrix__col-header').length).toBe(3);
    // 无数据行，所以没有数据格
    expect(wrapper.findAll('.s-matrix__cell').length).toBe(0);
    expect(wrapper.text()).toContain('X');
    expect(wrapper.text()).toContain('Y');
    expect(wrapper.text()).toContain('Z');
  });

  test('data 中某行为空数组时不应崩溃', () => {
    const wrapper = mount(Matrix, {
      props: {
        data: [[], [1, 2]]
      }
    });
    expect(wrapper.element.nodeName).toBe('DIV');
    // 列数取最大 = 2，行数 = 2 → 4 个数据格
    expect(wrapper.findAll('.s-matrix__cell').length).toBe(2 * 2);
  });

  test('data 长度变化后应重新渲染', async () => {
    const wrapper = mount(Matrix, {
      props: {
        data: [[1, 2]]
      }
    });
    expect(wrapper.findAll('.s-matrix__cell').length).toBe(2);

    await wrapper.setProps({
      data: [
        [1, 2],
        [3, 4],
        [5, 6]
      ]
    });
    expect(wrapper.findAll('.s-matrix__cell').length).toBe(6);
  });

  test('colHeaders 长度变化后列数应更新', async () => {
    const wrapper = mount(Matrix, {
      props: {
        data: [[1, 2]],
        colHeaders: ['A', 'B']
      }
    });
    expect(wrapper.findAll('.s-matrix__cell').length).toBe(2);

    await wrapper.setProps({ colHeaders: ['A', 'B', 'C', 'D'] });
    expect(wrapper.findAll('.s-matrix__cell').length).toBe(4);
    expect(wrapper.findAll('.s-matrix__col-header').length).toBe(4);
  });
});
