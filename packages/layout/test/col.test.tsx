import { render } from '@testing-library/vue';
import Col from '../src/col';
import Row from '../src/row';
import { mount } from '@vue/test-utils';
import '@testing-library/jest-dom';

describe('Col 组件测试', () => {
  test('Col 组件是否可以正常渲染', () => {
    const { container } = render(Col);
    const colElement = container.firstChild as HTMLElement;
    expect(colElement).toBeInTheDocument();
    expect(colElement.tagName.toLowerCase()).toBe('div');
    expect(colElement.classList.contains('s-col')).toBe(true);
  });

  test('默认插槽是否可以正常工作', () => {
    const { getByText } = render(Col, {
      slots: {
        default() {
          return '列内容';
        }
      }
    });
    getByText('列内容');
  });

  test('默认插槽为空时是否正常', () => {
    const { container } = render(Col);
    const colElement = container.firstChild as HTMLElement;
    expect(colElement.textContent).toBe('');
  });

  describe('Col 组件的 tag 属性测试', () => {
    test.each(['div', 'section', 'article'])(
      '验证 Col 的 tag 属性 %s 是否正确应用',
      tag => {
        const wrapper = mount(Col, {
          props: { tag }
        });
        expect(wrapper.element.tagName.toLowerCase()).toBe(tag);
      }
    );

    test('默认 tag 为 div', () => {
      const wrapper = mount(Col);
      expect(wrapper.element.tagName.toLowerCase()).toBe('div');
    });
  });

  describe('Col 组件的 span 属性测试', () => {
    test.each([1, 6, 12, 18, 24])(
      '验证 span 属性 %i 的 class 是否正确添加',
      span => {
        const wrapper = mount(Col, {
          props: { span }
        });
        expect(wrapper.classes(`s-col-${span}`)).toBe(true);
      }
    );

    test('默认 span 为 24', () => {
      const wrapper = mount(Col);
      expect(wrapper.classes('s-col-24')).toBe(true);
    });
  });

  describe('Col 组件的 offset 属性测试', () => {
    test.each([1, 6, 12, 18, 23])(
      '验证 offset 属性 %i 的 class 是否正确添加',
      offset => {
        const wrapper = mount(Col, {
          props: { offset }
        });
        expect(wrapper.classes(`s-col-offset-${offset}`)).toBe(true);
      }
    );

    test('offset 为 0 时不添加 class', () => {
      const wrapper = mount(Col, {
        props: { offset: 0 }
      });
      expect(wrapper.classes('s-col-offset-0')).toBe(false);
    });

    test('默认 offset 为 0', () => {
      const wrapper = mount(Col);
      expect(wrapper.classes('s-col-offset-0')).toBe(false);
    });
  });

  describe('Col 组件的 pull 属性测试', () => {
    test.each([1, 6, 12, 18, 23])(
      '验证 pull 属性 %i 的 class 是否正确添加',
      pull => {
        const wrapper = mount(Col, {
          props: { pull }
        });
        expect(wrapper.classes(`s-col-pull-${pull}`)).toBe(true);
      }
    );

    test('pull 为 0 时不添加 class', () => {
      const wrapper = mount(Col, {
        props: { pull: 0 }
      });
      expect(wrapper.classes('s-col-pull-0')).toBe(false);
    });
  });

  describe('Col 组件的 push 属性测试', () => {
    test.each([1, 6, 12, 18, 23])(
      '验证 push 属性 %i 的 class 是否正确添加',
      push => {
        const wrapper = mount(Col, {
          props: { push }
        });
        expect(wrapper.classes(`s-col-push-${push}`)).toBe(true);
      }
    );

    test('push 为 0 时不添加 class', () => {
      const wrapper = mount(Col, {
        props: { push: 0 }
      });
      expect(wrapper.classes('s-col-push-0')).toBe(false);
    });
  });

  describe('Col 组件的响应式属性测试', () => {
    describe('xs 属性测试', () => {
      test('xs 为数字时 class 是否正确', () => {
        const wrapper = mount(Col, {
          props: { xs: 12 }
        });
        expect(wrapper.classes('s-col-xs-12')).toBe(true);
      });

      test('xs 为对象时 class 是否正确', () => {
        const wrapper = mount(Col, {
          props: { xs: { span: 12, offset: 6 } }
        });
        expect(wrapper.classes('s-col-xs-12')).toBe(true);
        expect(wrapper.classes('s-col-xs-offset-6')).toBe(true);
      });
    });

    describe('sm 属性测试', () => {
      test('sm 为数字时 class 是否正确', () => {
        const wrapper = mount(Col, {
          props: { sm: 12 }
        });
        expect(wrapper.classes('s-col-sm-12')).toBe(true);
      });

      test('sm 为对象时 class 是否正确', () => {
        const wrapper = mount(Col, {
          props: { sm: { span: 12, pull: 6 } }
        });
        expect(wrapper.classes('s-col-sm-12')).toBe(true);
        expect(wrapper.classes('s-col-sm-pull-6')).toBe(true);
      });
    });

    describe('md 属性测试', () => {
      test('md 为数字时 class 是否正确', () => {
        const wrapper = mount(Col, {
          props: { md: 12 }
        });
        expect(wrapper.classes('s-col-md-12')).toBe(true);
      });

      test('md 为对象时 class 是否正确', () => {
        const wrapper = mount(Col, {
          props: { md: { span: 12, push: 6 } }
        });
        expect(wrapper.classes('s-col-md-12')).toBe(true);
        expect(wrapper.classes('s-col-md-push-6')).toBe(true);
      });
    });

    describe('lg 属性测试', () => {
      test('lg 为数字时 class 是否正确', () => {
        const wrapper = mount(Col, {
          props: { lg: 12 }
        });
        expect(wrapper.classes('s-col-lg-12')).toBe(true);
      });

      test('lg 为对象时 class 是否正确', () => {
        const wrapper = mount(Col, {
          props: { lg: { span: 12, offset: 6 } }
        });
        expect(wrapper.classes('s-col-lg-12')).toBe(true);
        expect(wrapper.classes('s-col-lg-offset-6')).toBe(true);
      });
    });

    describe('xl 属性测试', () => {
      test('xl 为数字时 class 是否正确', () => {
        const wrapper = mount(Col, {
          props: { xl: 12 }
        });
        expect(wrapper.classes('s-col-xl-12')).toBe(true);
      });

      test('xl 为对象时 class 是否正确', () => {
        const wrapper = mount(Col, {
          props: { xl: { span: 12, offset: 6 } }
        });
        expect(wrapper.classes('s-col-xl-12')).toBe(true);
        expect(wrapper.classes('s-col-xl-offset-6')).toBe(true);
      });
    });
  });

  describe('Row 和 Col 组件联动测试', () => {
    test('Row 的 gutter 属性是否传递给 Col', () => {
      const wrapper = mount({
        template: `
          <Row :gutter="20">
            <Col>内容</Col>
          </Row>
        `,
        components: { Row, Col }
      });

      const colElement = wrapper.findComponent(Col).element;
      expect(colElement.classList.contains('is-guttered')).toBe(true);

      const style = colElement.getAttribute('style');
      expect(style).toContain('padding-left: 10px');
      expect(style).toContain('padding-right: 10px');
    });

    test('Row 没有 gutter 时 Col 不应有 gutter 相关样式', () => {
      const wrapper = mount({
        template: `
          <Row>
            <Col>内容</Col>
          </Row>
        `,
        components: { Row, Col }
      });

      const colElement = wrapper.findComponent(Col).element;
      expect(colElement.classList.contains('is-guttered')).toBe(false);

      const style = colElement.getAttribute('style');
      expect(style).toBeNull();
    });

    test('Col 在 Row 外部时不应有 gutter 相关样式', () => {
      const wrapper = mount(Col);
      const colElement = wrapper.element;
      expect(colElement.classList.contains('is-guttered')).toBe(false);

      const style = colElement.getAttribute('style');
      expect(style).toBeNull();
    });
  });

  describe('Col 组件综合属性测试', () => {
    test('同时设置多个属性是否正确应用', () => {
      const wrapper = mount(Col, {
        props: {
          tag: 'section',
          span: 12,
          offset: 6,
          pull: 2,
          push: 1,
          xs: { span: 24, offset: 0 },
          sm: { span: 12, offset: 6 },
          md: { span: 8, offset: 8 },
          lg: { span: 6, offset: 9 },
          xl: { span: 4, offset: 10 }
        },
        slots: {
          default: '综合测试内容'
        }
      });

      expect(wrapper.element.tagName.toLowerCase()).toBe('section');
      expect(wrapper.text()).toBe('综合测试内容');

      // 基础属性
      expect(wrapper.classes('s-col-12')).toBe(true);
      expect(wrapper.classes('s-col-offset-6')).toBe(true);
      expect(wrapper.classes('s-col-pull-2')).toBe(true);
      expect(wrapper.classes('s-col-push-1')).toBe(true);

      // 响应式属性
      expect(wrapper.classes('s-col-xs-24')).toBe(true);
      expect(wrapper.classes('s-col-xs-offset-0')).toBe(true);
      expect(wrapper.classes('s-col-sm-12')).toBe(true);
      expect(wrapper.classes('s-col-sm-offset-6')).toBe(true);
      expect(wrapper.classes('s-col-md-8')).toBe(true);
      expect(wrapper.classes('s-col-md-offset-8')).toBe(true);
      expect(wrapper.classes('s-col-lg-6')).toBe(true);
      expect(wrapper.classes('s-col-lg-offset-9')).toBe(true);
      expect(wrapper.classes('s-col-xl-4')).toBe(true);
      expect(wrapper.classes('s-col-xl-offset-10')).toBe(true);
    });
  });
});
