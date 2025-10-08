import { render } from '@testing-library/vue';
import Row from '../src/row';
import { mount } from '@vue/test-utils';
import '@testing-library/jest-dom';

describe('Row 组件测试', () => {
  test('Row 组件是否可以正常渲染', () => {
    const { container } = render(Row);
    const rowElement = container.firstChild as HTMLElement;
    expect(rowElement).toBeInTheDocument();
    expect(rowElement.tagName.toLowerCase()).toBe('div');
    expect(rowElement.classList.contains('s-row')).toBe(true);
  });

  test('默认插槽是否可以正常工作', () => {
    const { getByText } = render(Row, {
      slots: {
        default() {
          return '行内容';
        }
      }
    });
    getByText('行内容');
  });

  test('默认插槽为空时是否正常', () => {
    const { container } = render(Row);
    const rowElement = container.firstChild as HTMLElement;
    expect(rowElement.textContent).toBe('');
  });

  describe('Row 组件的 tag 属性测试', () => {
    test.each(['div', 'section', 'article'])(
      '验证 Row 的 tag 属性 %s 是否正确应用',
      tag => {
        const wrapper = mount(Row, {
          props: { tag }
        });
        expect(wrapper.element.tagName.toLowerCase()).toBe(tag);
      }
    );

    test('默认 tag 为 div', () => {
      const wrapper = mount(Row);
      expect(wrapper.element.tagName.toLowerCase()).toBe('div');
    });
  });

  describe('Row 组件的 gutter 属性测试', () => {
    test('默认 gutter 为 0', () => {
      const wrapper = mount(Row);
      const style = wrapper.element.getAttribute('style');
      expect(style).toBeNull();
    });

    test('gutter 为 20 时样式是否正确', () => {
      const wrapper = mount(Row, {
        props: { gutter: 20 }
      });
      const style = wrapper.element.getAttribute('style');
      expect(style).toContain('margin-left: -10px');
      expect(style).toContain('margin-right: -10px');
    });

    test('gutter 为 0 时不应有 margin 样式', () => {
      const wrapper = mount(Row, {
        props: { gutter: 0 }
      });
      const style = wrapper.element.getAttribute('style');
      expect(style).toBeNull();
    });
  });

  describe('Row 组件的 justify 属性测试', () => {
    test.each([
      'start',
      'center',
      'end',
      'space-around',
      'space-between',
      'space-evenly'
    ])('验证 justify 属性 %s 的 class 是否正确添加', justify => {
      const wrapper = mount(Row, {
        props: { justify }
      });
      if (justify !== 'start') {
        expect(wrapper.classes(`is-justify-${justify}`)).toBe(true);
      } else {
        expect(wrapper.classes('is-justify-start')).toBe(false);
      }
    });

    test('默认 justify 为 start 时不添加 class', () => {
      const wrapper = mount(Row);
      expect(wrapper.classes('is-justify-start')).toBe(false);
    });
  });

  describe('Row 组件的 align 属性测试', () => {
    test.each(['top', 'middle', 'bottom'])(
      '验证 align 属性 %s 的 class 是否正确添加',
      align => {
        const wrapper = mount(Row, {
          props: { align }
        });
        expect(wrapper.classes(`is-align-${align}`)).toBe(true);
      }
    );

    test('align 属性为空时不添加 class', () => {
      const wrapper = mount(Row);
      expect(wrapper.classes('is-align-top')).toBe(false);
      expect(wrapper.classes('is-align-middle')).toBe(false);
      expect(wrapper.classes('is-align-bottom')).toBe(false);
    });
  });

  describe('Row 组件综合属性测试', () => {
    test('同时设置多个属性是否正确应用', () => {
      const wrapper = mount(Row, {
        props: {
          tag: 'section',
          gutter: 24,
          justify: 'center',
          align: 'middle'
        },
        slots: {
          default: '综合测试内容'
        }
      });

      expect(wrapper.element.tagName.toLowerCase()).toBe('section');
      expect(wrapper.classes('is-justify-center')).toBe(true);
      expect(wrapper.classes('is-align-middle')).toBe(true);
      expect(wrapper.text()).toBe('综合测试内容');

      const style = wrapper.element.getAttribute('style');
      expect(style).toContain('margin-left: -12px');
      expect(style).toContain('margin-right: -12px');
    });
  });
});
