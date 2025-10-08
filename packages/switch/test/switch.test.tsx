import { render, fireEvent } from '@testing-library/vue'; //导入 渲染函数
import { mount } from '@vue/test-utils';
import Switch from '../src/switch';
import { ref } from 'vue';

describe('switch 测试', () => {
  test('switch是否可以正常工作', async () => {
    const wrapper = mount(Switch);
    expect(wrapper.element.nodeName).toBe('DIV');
    expect(wrapper.find('.s-switch__label').exists()).toBe(true);
    expect(wrapper.find('.s-switch__label--left').exists()).toBe(true);
    expect(wrapper.find('is-round').exists()).toBe(false);
    expect(wrapper.find('.s-switch__label--right').exists()).toBe(true);
    // 检查 s-switch__label--left 元素是否具有 is-active 类
    expect(wrapper.find('.s-switch__label--left').classes()).toContain(
      'is-active'
    );
    // 检查 s-switch__label--right 元素是否不包含 is-active 类
    expect(wrapper.find('.s-switch__label--right').classes()).not.toContain(
      'is-active'
    );
    expect(wrapper.find('.is-checked').exists()).toBe(false);
    expect(wrapper.find('.s-switch__core').exists()).toBe(true);
    expect(wrapper.find('.s-switch__action').exists()).toBe(true);
  });
  it('自定义颜色', async () => {
    const wrapper = mount(() => (
      <Switch style="--s-switch-on-color: #13ce66; --s-switch-off-color: #ff4949" />
    ));
    expect(wrapper.find('.s-switch').attributes().style).toBe(
      '--s-switch-on-color: #13ce66; --s-switch-off-color: #ff4949;'
    );
  });
  describe('switch 的size测试', () => {
    test.each(['large', 'small'])(
      '验证 switch 的 s-switch--%s 的 class 是否正确添加',
      size => {
        const { getByRole } = render(Switch, {
          props: {
            size
          }
        });
        const wrapper = getByRole('switch');
        expect(wrapper.classList.contains(`s-switch--${size}`)).toBe(true);
      }
    );
    it('size default', () => {
      const { getByRole } = render(Switch, {
        props: {
          size: 'default'
        }
      });
      const wrapper = getByRole('switch');
      expect(wrapper.classList.contains(`s-switch--default`)).toBe(false);
    });
  });
  it('switch是否可以正常切换', async () => {
    const modelValue = ref(false);
    const { getByRole } = render(
      () => (
        <Switch
          onClick={() => {
            // 触发 update:modelValue 事件，并传递更新后的值
            modelValue.value = !modelValue.value;
          }}
          modelValue={modelValue.value}
        />
      ),
      {
        props: {
          modelValue: modelValue.value
        }
      }
    );
    // 假设 switch 元素具有 role 为 'switch'，根据实际情况修改
    const switchElement = getByRole('switch');
    //  检查初始状态下 is-checked 类是否不存在
    expect(switchElement.classList.contains('is-checked')).toBe(false);
    // 模拟点击事件，触发开关切换
    await fireEvent.click(switchElement);
    // 检查点击后 is-checked 类是否存在，即开关是否切换成功
    expect(switchElement.classList.contains('is-checked')).toBe(true);
    // 再次模拟点击事件，将开关切换回初始状态
    await fireEvent.click(switchElement);
    // 再次检查 is-checked 类是否不存在，确认开关回到初始状态
    expect(switchElement.classList.contains('is-checked')).toBe(false);
  });
  it('形状', () => {
    const { getByRole } = render(Switch, {
      props: {
        round: false
      }
    });
    const switchElement = getByRole('switch');
    expect(switchElement.classList.contains('is-round')).toBe(true);
  });
  describe('switch 的 disabled 测试', () => {
    test('当disabled为 true 时按钮被禁用', () => {
      const { getByRole } = render(Switch, {
        props: {
          disabled: true
        }
      });
      const switchElement = getByRole('switch');
      expect(switchElement.classList.contains('is-disabled')).toBe(true);
    });
    test('当 disabled 为 false 时按钮被启用', () => {
      const { getByRole } = render(Switch, {
        props: {
          disabled: false
        }
      });
      const switchElement = getByRole('switch');
      expect(switchElement.classList.contains('is-disabled')).toBe(false);
    });
  });
  describe('文字描述', () => {
    it('开关的文字描述', () => {
      const wrapper = mount(() => (
        <Switch activeText="Pay by month" inactiveText="Pay by year" />
      ));
      // console.log(wrapper.html());
      expect(wrapper.find('.s-switch__label--left').text()).toBe('Pay by year');
      expect(wrapper.find('.s-switch__label--right').text()).toBe(
        'Pay by month'
      );
    });
    it('inlinePrompt todo', () => {
      const wrapper = mount(() => (
        <Switch
          activeText="Pay by month"
          inactiveText="Pay by year"
          inlinePrompt
        />
      ));

      expect(wrapper.find('.s-switch__inner').exists()).toBe(true);
      expect(wrapper.find('.is-text').exists()).toBe(true);
      expect(wrapper.find('.s-switch__inner').text()).toBe('Pay by year');
      // console.log(wrapper.html());

      //   expect(switchElement.classList.contains('s-switch__inner')).toBe(true);
    });
  });
  // it('activeAction 和 inactiveAction 插槽测试', async () => {
  //   const modelValue = ref(false);
  //   const { getByRole, container } = render(
  //     () => (
  //       <Switch
  //         onClick={() => {
  //           modelValue.value = !modelValue.value;
  //         }}
  //         modelValue={modelValue.value}
  //       />
  //     ),
  //     {
  //       props: {
  //         modelValue: modelValue.value
  //       },
  //       slots: {
  //         activeAction: () => <span class="custom-active-action">F</span>,
  //         inactiveAction: () => <span class="custom-inactive-action">T</span>
  //       }
  //     }
  //   );
  //   const switchElement = getByRole('switch');
  //   //   获取完整的 DOM 节点
  //   const domNode = container;
  //   // 打印完整的 DOM 节点，可根据需要进行断言或其他操作
  //   console.log(domNode.innerHTML);
  // });
  // describe('slots', () => {
  // it('activeAction 和 inactiveAction 插槽测试 todo', async () => {
  //   const modelValue = ref(false);
  //   const activeActionDom = <span class="custom-active-action">T</span>;
  //   const inactiveActionDom = <span class="custom-inactive-action">F</span>;
  //   const { getByRole, container } = render(
  //     <Switch
  //       onClick={() => {
  //         // 触发 update:modelValue 事件，并传递更新后的值
  //         modelValue.value = !modelValue.value;
  //       }}
  //       modelValue={modelValue.value}
  //     />,
  //     {
  //       props: {
  //         modelValue: modelValue.value
  //       },
  //       slots: {
  //         activeAction: () => activeActionDom,
  //         inactiveAction: () => inactiveActionDom
  //       }
  //     }
  //   );
  //   const switchElement = getByRole('switch');
  //   expect(container.querySelector('.s-switch__action')?.innerHTML).toBe(
  //     '<span class="custom-inactive-action">F</span>'
  //   );
  //   await fireEvent.click(switchElement);
  //   console.log(container.querySelector('.s-switch__action')?.innerHTML);

  //   // expect(container.querySelector('.s-switch__action')?.innerHTML).toBe(
  //   //   '<span class="custom-active-action">T</span>'
  //   // );
  //   // await fireEvent.click(switchElement);
  //   // expect(container.querySelector('.s-switch__action')?.innerHTML).toBe(
  //   //   '<span class="custom-inactive-action">F</span>'
  //   // );
  // });

  it('activeAction 和 inactiveAction 插槽测试', async () => {
    const modelValue = ref(false);
    const activeActionDom = <span class="custom-active-action">T</span>;
    const inactiveActionDom = <span class="custom-inactive-action">F</span>;
    const TestComponent = (
      <Switch
        onClick={() => {
          // 触发 update:modelValue 事件，并传递更新后的值
          modelValue.value = !modelValue.value;
        }}
        modelValue={modelValue.value}
      />
    );
    const { getByRole, container } = render(TestComponent, {
      props: {
        modelValue: modelValue.value
      },
      slots: {
        activeAction: () => activeActionDom,
        inactiveAction: () => inactiveActionDom
      }
    });
    // 假设 switch 元素具有 role 为 'switch'，根据实际情况修改
    const switchElement = getByRole('switch');
    //  检查初始状态下 is-checked 类是否不存在
    // expect(switchElement.classList.contains('is-checked')).toBe(false);
    console.log(' 检查初始状态下', container.innerHTML);
    console.log(
      ' 检查初始状态下1',
      container.querySelector('.s-switch__action')?.innerHTML
    );
    console.log('-----------');
    console.log(switchElement.getHTML());

    console.log(switchElement.querySelector('.s-switch__action')?.innerHTML);

    expect(switchElement.querySelector('.s-switch__action')?.innerHTML).toBe(
      '<span class=\"custom-inactive-action\">F</span>'
    );
    // 模拟点击事件，触发开关切换
    await fireEvent.click(switchElement);
    // 检查点击后 is-checked 类是否存在，即开关是否切换成功
    // expect(switchElement.classList.contains('is-checked')).toBe(true);
    console.log('-----------');
    console.log('检查点击后', container.innerHTML);
    console.log('-----------');

    // console.log(switchElement.querySelector('.s-switch__action')?.innerHTML);

    // expect(container.querySelector('.s-switch__action')?.innerHTML).toBe(
    //   '<span class="custom-active-action">T</span>'
    // );
    // // 再次模拟点击事件，将开关切换回初始状态
    // await fireEvent.click(switchElement);
    // // 再次检查 is-checked 类是否不存在，确认开关回到初始状态
    // expect(switchElement.classList.contains('is-checked')).toBe(false);
    // console.log('-----------');
    // console.log('再次检查', container.innerHTML);
    // console.log('-----------');

    // console.log(switchElement.querySelector('.s-switch__action')?.innerHTML);
    // expect(container.querySelector('.s-switch__action')?.innerHTML).toBe(
    //   '<span class="custom-inactive-action">F</span>'
    // );
  });
});
