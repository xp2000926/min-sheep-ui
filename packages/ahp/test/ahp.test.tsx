import { mount } from '@vue/test-utils';
import { describe, test, expect } from 'vitest';
import { h } from 'vue';
import SAhp from '../src/ahp';
import {
  ahpProps,
  ahpEmits,
  type AhpMatrix,
  type AhpResult
} from '../src/ahp-type';

describe('SAhp AHP判断矩阵组件', () => {
  test('组件正常渲染根节点 s-ahp', async () => {
    const wrapper = mount(SAhp, { props: { order: 3 } });
    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes()).toContain('s-ahp');
  });

  test('初始化3阶单位矩阵，λmax=3，CR=0，一致性检验通过', async () => {
    const wrapper = mount(SAhp, { props: { order: 3 } });
    await new Promise(r => setTimeout(r, 10));
    const text = wrapper.text();
    expect(text).toContain('C1=0.3333；C2=0.3333；C3=0.3333');
    expect(text).toContain('一致性检验通过');
  });

  test('传入labels，标签正常渲染；labels不足自动补Cx', async () => {
    // order=3，只传2个label，第三个自动补C3
    const wrapper = mount(SAhp, {
      props: {
        order: 3,
        labels: ['价格', '性能']
      }
    });
    await new Promise(r => setTimeout(r, 10));
    const text = wrapper.text();
    expect(text).toContain('价格');
    expect(text).toContain('性能');
    expect(text).toContain('C3');
  });

  test('order=2，2阶矩阵，显示特殊提示，CR无意义', async () => {
    const wrapper = mount(SAhp, {
      props: { order: 2, labels: ['成本', '收益'] }
    });
    await new Promise(r => setTimeout(r, 10));
    const text = wrapper.text();
    expect(text).toContain('2阶矩阵，无随机一致性指标，天然满足一致性');
  });

  test('修改上三角，自动同步下三角（倒数）', async () => {
    const wrapper = mount(SAhp, { props: { order: 3 } });
    const matrix: AhpMatrix = [
      [1, 2, 3],
      [0.5, 1, 4],
      [1 / 3, 0.25, 1]
    ];
    await wrapper.setProps({ modelValue: matrix });
    await new Promise(r => setTimeout(r, 10));
    const resultText = wrapper.text();
    expect(resultText).toContain('CR');
    // 校验change事件输出
    const changeEvents = wrapper.emitted('change') as AhpResult[][];
    const res = changeEvents.at(-1)?.[0];
    expect(res).toBeDefined();
    // AHP方根法这个矩阵CR≈0.093，小于0.1，通过
    expect(res!.pass).toBe(true);
  });

  test('showResult=false：不渲染结果面板，change事件仍然抛出结果', async () => {
    const wrapper = mount(SAhp, {
      props: {
        order: 3,
        showResult: false
      }
    });
    await new Promise(r => setTimeout(r, 10));
    const text = wrapper.text();
    expect(text).not.toContain('权重向量');
    expect(text).not.toContain('CR');
    // 事件依然触发
    const emitChange = wrapper.emitted('change');
    expect(emitChange).toHaveLength(1);
  });

  test('一致性不通过案例：CR>0.1，提示检验不通过', async () => {
    const badMatrix: AhpMatrix = [
      [1, 5, 1],
      [1 / 5, 1, 5],
      [1, 1 / 5, 1]
    ];
    const wrapper = mount(SAhp, {
      props: {
        order: 3,
        modelValue: badMatrix
      }
    });
    await new Promise(r => setTimeout(r, 10));
    const changeEvents = wrapper.emitted('change') as AhpResult[][];
    const res = changeEvents.at(-1)?.[0];
    expect(res!.pass).toBe(false);
    const text = wrapper.text();
    expect(text).toContain('一致性检验不通过');
  });

  test('disabled=true，输入框不可编辑', async () => {
    const wrapper = mount(SAhp, {
      props: {
        order: 3,
        disabled: true
      }
    });
    await new Promise(r => setTimeout(r, 10));
    // 查找输入框
    const input = wrapper.find('input');
    expect(input.exists()).toBe(false);
  });

  test('使用result插槽，优先渲染插槽内容，不渲染默认结果文本', async () => {
    const wrapper = mount(SAhp, {
      props: { order: 3 },
      slots: {
        result: `<div class="slot-test">自定义AHP结果</div>`
      }
    });
    await new Promise(r => setTimeout(r, 10));
    expect(wrapper.find('.slot-test').exists()).toBe(true);
    // 默认的“权重向量：”不会出现
    expect(wrapper.text()).not.toContain('权重向量：');
  });

  test('order阶数切换，自动重建矩阵', async () => {
    const wrapper = mount(SAhp, { props: { order: 2 } });
    await wrapper.setProps({ order: 4 });
    await new Promise(r => setTimeout(r, 10));
    const text = wrapper.text();
    expect(text).toContain('C4');
  });
});

describe('SAhp - slots.input 自定义输入插槽', () => {
  // 便捷等待：让 watch(immediate) + computed 落地
  const tick = () => new Promise(r => setTimeout(r, 10));

  test('1. 传了 #input 插槽，默认 <input> 不再渲染', async () => {
    const wrapper = mount(SAhp, {
      props: { order: 3 },
      slots: {
        input: `<button class="custom-input">自定义</button>`
      }
    });
    await tick();
    // 上三角一共 n*(n-1)/2 = 3 个
    expect(wrapper.findAll('.custom-input')).toHaveLength(3);
    // 默认 input 被替换
    expect(wrapper.find('input[type="number"]').exists()).toBe(false);
  });

  test('2. 插槽参数完整：cellVal / disabled / row / col / onChange', async () => {
    const received: any[] = [];
    mount(SAhp, {
      props: { order: 3 },
      slots: {
        input: (params: any) => {
          received.push(params);
          return h('span', { class: 'probe' }, String(params.cellVal));
        }
      }
    });
    await tick();

    // 3 个上三角单元格，坐标应为 (0,1) (0,2) (1,2)
    const coords = received.map(p => [p.row, p.col]).sort();
    expect(coords).toEqual([
      [0, 1],
      [0, 2],
      [1, 2]
    ]);

    // 每个参数都齐全
    for (const p of received) {
      expect(p).toHaveProperty('cellVal');
      expect(p).toHaveProperty('disabled', false);
      expect(p).toHaveProperty('row');
      expect(p).toHaveProperty('col');
      expect(typeof p.onChange).toBe('function');
    }

    // 默认单位矩阵，cellVal 都是 1
    expect(received.every(p => p.cellVal === 1)).toBe(true);
  });

  test('3. 调用插槽 onChange，matrix 更新并 emit update:modelValue', async () => {
    let captured: any = null;
    const wrapper = mount(SAhp, {
      props: { order: 3 },
      slots: {
        input: (params: any) => {
          // 只记住 (0,1) 这个单元格，方便后面调用
          if (params.row === 0 && params.col === 1) captured = params;
          return h('span', { class: 'probe' });
        }
      }
    });
    await tick();

    expect(captured).not.toBeNull();

    // 模拟用户改成 5
    captured.onChange(5);
    await tick();

    const emits = wrapper.emitted('update:modelValue') as AhpMatrix[][];
    expect(emits).toBeTruthy();
    const last = emits.at(-1)![0];
    // 上三角 (0,1) = 5，下三角 (1,0) = 1/5
    expect(last[0][1]).toBe(5);
    expect(last[1][0]).toBeCloseTo(0.2);
  });

  test('4. 插槽 onChange 兼容字符串值（如 el-input 的 @change）', async () => {
    let captured: any = null;
    const wrapper = mount(SAhp, {
      props: { order: 2 },
      slots: {
        input: (params: any) => {
          captured = params;
          return h('span');
        }
      }
    });
    await tick();

    // el-input 典型行为：传字符串 "7"
    captured.onChange('7');
    await tick();

    const emits = wrapper.emitted('update:modelValue') as AhpMatrix[][];
    const last = emits.at(-1)![0];
    expect(last[0][1]).toBe(7);
    expect(last[1][0]).toBeCloseTo(1 / 7);
  });

  test('5. 插槽 onChange 传空串 / NaN / 非正数时，不更新矩阵、不 emit', async () => {
    let captured: any = null;
    const wrapper = mount(SAhp, {
      props: { order: 3 },
      slots: {
        input: (params: any) => {
          if (params.row === 0 && params.col === 1) captured = params;
          return h('span');
        }
      }
    });
    await tick();

    // 清空输入场景：让输入框保留空态，但不写矩阵
    captured.onChange('');
    captured.onChange('abc');
    captured.onChange(0);
    captured.onChange(-1);
    await tick();

    expect(wrapper.emitted('update:modelValue')).toBeUndefined();
  });

  test('6. disabled=true 时，插槽不会被渲染（默认逻辑也不渲染 input）', async () => {
    const wrapper = mount(SAhp, {
      props: { order: 3, disabled: true },
      slots: {
        input: `<button class="custom-input">编辑</button>`
      }
    });
    await tick();

    expect(wrapper.find('.custom-input').exists()).toBe(false);
    expect(wrapper.find('input[type="number"]').exists()).toBe(false);
    // 全部显示只读文本
    expect(wrapper.findAll('span').length).toBeGreaterThan(0);
  });

  test('7. 外部更新 modelValue，插槽的 cellVal 同步刷新', async () => {
    const seen: number[] = [];
    const wrapper = mount(SAhp, {
      props: { order: 2 },
      slots: {
        input: (params: any) => {
          if (params.row === 0 && params.col === 1) seen.push(params.cellVal);
          return h('span');
        }
      }
    });
    await tick();

    const mat: AhpMatrix = [
      [1, 9],
      [1 / 9, 1]
    ];
    await wrapper.setProps({ modelValue: mat });
    await tick();

    // 第一次是初始单位矩阵 cellVal=1，第二次变成 9
    expect(seen).toContain(1);
    expect(seen.at(-1)).toBe(9);
  });

  test('8. 插槽 onChange 后 change 事件以最新结果抛出', async () => {
    let captured: any = null;
    const wrapper = mount(SAhp, {
      props: { order: 3 },
      slots: {
        input: (params: any) => {
          if (params.row === 0 && params.col === 1) captured = params;
          return h('span');
        }
      }
    });
    await tick();

    captured.onChange(3);
    await tick();

    const changes = wrapper.emitted('change') as AhpResult[][];
    const last = changes.at(-1)![0];
    // 只改了 (0,1)=3，其余仍为 1
    expect(last.weights).toHaveLength(3);
    expect(last.lambdaMax).toBeGreaterThan(0);
    // 权重和应为 1
    const sum = last.weights.reduce((a, b) => a + b, 0);
    expect(sum).toBeCloseTo(1, 6);
  });

  test('9. 插槽内部组件保持受控：改变 cellVal 后，值不回落', async () => {
    // 用 render 函数模拟 el-input：受控 model-value + 自定义 change
    const wrapper = mount(SAhp, {
      props: { order: 2 },
      slots: {
        input: (p: any) =>
          h('input', {
            class: 'fake-el-input',
            value: String(p.cellVal),
            onChange: (e: any) => p.onChange(e.target.value)
          })
      }
    });
    await tick();

    const input = wrapper.find('.fake-el-input');
    expect((input.element as HTMLInputElement).value).toBe('1');

    // 模拟输入 4 并触发 change
    (input.element as HTMLInputElement).value = '4';
    await input.trigger('change');
    await tick();

    // 受控值已刷新为 4
    expect(
      (wrapper.find('.fake-el-input').element as HTMLInputElement).value
    ).toBe('4');

    // 下三角显示 1/4
    expect(wrapper.text()).toContain('0.250');
  });
});

describe('ahp-type props / emits 定义', () => {
  test('props 默认值与 ahp.tsx 使用一致', () => {
    expect(ahpProps.order.default).toBe(3);
    expect(ahpProps.disabled.default).toBe(false);
    expect(ahpProps.showResult.default).toBe(true);
    expect(ahpProps.labels.default()).toEqual([]);
    expect(ahpProps.modelValue.default()).toEqual([]);
  });

  test('emits 校验器：update:modelValue 仅接受数组', () => {
    expect(
      ahpEmits['update:modelValue']([
        [1, 3],
        [1 / 3, 1]
      ] as AhpMatrix)
    ).toBe(true);
    expect(ahpEmits['update:modelValue'](null as unknown as AhpMatrix)).toBe(
      false
    );
  });

  test('emits 校验器：change 仅接受真值结果对象', () => {
    expect(
      ahpEmits.change({
        weights: [0.5, 0.5],
        lambdaMax: 2,
        CI: 0,
        RI: 0,
        CR: NaN,
        pass: true
      } as AhpResult)
    ).toBe(true);
    expect(ahpEmits.change(undefined as unknown as AhpResult)).toBe(false);
  });
});

describe('SAhp - order 钳制（2~9）', () => {
  const tick = () => new Promise(r => setTimeout(r, 10));

  test('order=1 被钳制为 2 阶，按 2 阶矩阵特殊处理', async () => {
    const wrapper = mount(SAhp, { props: { order: 1 } });
    await tick();
    // 2 阶矩阵：CR 无意义，展示特殊提示
    expect(wrapper.text()).toContain('2阶矩阵，无随机一致性指标');
    // 权重只到 C2，不会出现 C3
    expect(wrapper.text()).toContain('C2=');
    expect(wrapper.text()).not.toContain('C3=');
  });

  test('order=99 被钳制为 9 阶，标签补齐到 C9', async () => {
    const wrapper = mount(SAhp, { props: { order: 99 } });
    await tick();
    // 单位矩阵 CR=0，一致性通过
    expect(wrapper.text()).toContain('C9=');
    expect(wrapper.text()).not.toContain('C10=');
    expect(wrapper.text()).toContain('一致性检验通过');
  });
});

describe('SAhp - modelValue / labels 规范化', () => {
  const tick = () => new Promise(r => setTimeout(r, 10));

  test('modelValue 尺寸与 order 不一致：重置为单位矩阵参与计算', async () => {
    // order=3 但传入 2x2 矩阵 → 组件降级为 3 阶单位矩阵
    const wrapper = mount(SAhp, {
      props: {
        order: 3,
        modelValue: [
          [1, 9],
          [1 / 9, 1]
        ] as AhpMatrix
      }
    });
    await tick();

    const changes = wrapper.emitted('change') as AhpResult[][];
    const res = changes.at(-1)![0];
    // 3 阶单位矩阵：权重均分 1/3
    expect(res.weights).toEqual([1 / 3, 1 / 3, 1 / 3]);
    expect(res.lambdaMax).toBeCloseTo(3, 6);
    // 单位矩阵 CI=0、CR=0，通过
    expect(res.CR).toBeCloseTo(0, 6);
    expect(res.pass).toBe(true);
  });

  test('labels 含空白项：空白项替换为 Cx 占位', async () => {
    const wrapper = mount(SAhp, {
      props: { order: 2, labels: ['', '  '] }
    });
    await tick();
    // 两个空白标签分别补 C1、C2；权重区精确展示占位标签
    expect(wrapper.text()).toContain('C1=0.5000；C2=0.5000');
  });

  test('labels 超过 order：多余项截断不渲染', async () => {
    const wrapper = mount(SAhp, {
      props: { order: 2, labels: ['价格', '质量', '多余项XYZ'] }
    });
    await tick();
    const text = wrapper.text();
    expect(text).toContain('价格');
    expect(text).toContain('质量');
    // 第 3 个标签超出 order=2，被截断
    expect(text).not.toContain('多余项XYZ');
  });

  test('labels 会被 trim：前后空格去除后仍作为有效标签', async () => {
    const wrapper = mount(SAhp, {
      props: { order: 2, labels: [' 价格 ', '质量'] }
    });
    await tick();
    // trim 后仍是有效标签，不会被 Cx 替换
    expect(wrapper.text()).toContain('价格=0.5000');
  });
});

describe('SAhp - 原生 input 输入路径（无插槽）', () => {
  const tick = () => new Promise(r => setTimeout(r, 10));

  test('原生 input 输入合法值：更新矩阵、同步下三角并 emit', async () => {
    const wrapper = mount(SAhp, { props: { order: 3 } });
    await tick();

    // 默认渲染 n*(n-1)/2 = 3 个数字输入框，首个对应上三角 (0,1)
    const inputs = wrapper.findAll('input[type="number"]');
    expect(inputs).toHaveLength(3);

    await inputs[0].setValue('5');
    await tick();

    const emits = wrapper.emitted('update:modelValue') as AhpMatrix[][];
    expect(emits).toBeTruthy();
    const last = emits.at(-1)![0];
    // 上三角 (0,1)=5，下三角 (1,0)=1/5
    expect(last[0][1]).toBe(5);
    expect(last[1][0]).toBeCloseTo(0.2);
    // 下三角只读文本展示 0.200
    expect(wrapper.text()).toContain('0.200');
  });

  test('原生 input 输入非法值（空串/非数字/非正数）：不 emit', async () => {
    const wrapper = mount(SAhp, { props: { order: 3 } });
    await tick();

    const input = wrapper.find('input[type="number"]');
    // 空串：保留空态不写入
    await input.setValue('');
    // 非数字
    await input.setValue('abc');
    // 非正数
    await input.setValue('0');
    await input.setValue('-2');
    await tick();

    expect(wrapper.emitted('update:modelValue')).toBeUndefined();
  });

  test('对角线与下三角为只读文本（toFixed(3) 格式）', async () => {
    const wrapper = mount(SAhp, {
      props: {
        order: 2,
        modelValue: [
          [1, 4],
          [0.25, 1]
        ] as AhpMatrix
      }
    });
    await tick();

    const text = wrapper.text();
    // 对角线固定 1.000，下三角只读展示 0.250
    expect(text).toContain('1.000');
    expect(text).toContain('0.250');
    // 只有 1 个上三角输入框
    expect(wrapper.findAll('input[type="number"]')).toHaveLength(1);
  });

  test('disabled 时输入框不渲染，仅 span 只读文本', async () => {
    const wrapper = mount(SAhp, {
      props: {
        order: 2,
        disabled: true,
        modelValue: [
          [1, 3],
          [1 / 3, 1]
        ] as AhpMatrix
      }
    });
    await tick();

    // 上三角也降级为只读文本 3.000，全表无输入框
    expect(wrapper.findAll('input')).toHaveLength(0);
    expect(wrapper.text()).toContain('3.000');
  });
});
