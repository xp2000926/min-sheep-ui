import { render } from '@testing-library/vue'; //导入 渲染函数
import Button from '../src/button';
import { mount } from '@vue/test-utils';
import '@testing-library/jest-dom';

describe('button 测试', () => {
  test('button是否可以正常工作', () => {
    // 渲染组件
    const { getByRole } = render(Button);
    getByRole('button');
    const button = getByRole('button');
    expect(button.classList.contains(`s-button--default`)).toBe(false);
  });
  // 插槽
  test('默认插槽是不是空', () => {
    const { getByRole } = render(Button);
    const button = getByRole('button');
    expect(button.innerText == '').toBe(true);
  });
  test('默认插槽是否可以正常工作', () => {
    const { getByText } = render(Button, {
      slots: {
        default() {
          return 'confirm';
        }
      }
    });
    getByText('confirm');
  });
  describe('button的type测试', () => {
    test.each(['primary', 'success', 'info', 'warning', 'danger'])(
      '验证button的s-button--%s的class是否正确添加',
      type => {
        const { getByRole } = render(Button, {
          props: {
            type
          }
        });
        const button = getByRole('button');
        expect(button.classList.contains(`s-button--${type}`)).toBe(true);
      }
    );
    it('type default', () => {
      const { getByRole } = render(Button, {
        props: {
          type: 'default'
        }
      });
      const button = getByRole('button');
      expect(button.classList.contains(`s-button--default`)).toBe(false);
    });
  });
  describe('button的size测试', () => {
    test.each(['small', 'large'])(
      '验证button的s-button--%s的class是否正确添加',
      size => {
        const { getByRole } = render(Button, {
          props: {
            size
          }
        });
        const button = getByRole('button');
        expect(button.classList.contains(`s-button--${size}`)).toBe(true);
      }
    );
    it('size default', () => {
      const { getByRole } = render(Button, {
        props: {
          size: 'default'
        }
      });
      const button = getByRole('button');
      expect(button.classList.contains(`s-button--default`)).toBe(false);
    });
  });
  test('block 是否正常工作', () => {
    const { getByRole } = render(Button, {
      props: {
        block: true
      }
    });
    const button = getByRole('button');
    expect(button.classList.contains('is-block')).toBe(true);
  });
  test('plain 是否正常工作', () => {
    const { getByRole } = render(Button, {
      props: {
        plain: true
      }
    });
    const button = getByRole('button');
    expect(button.classList.contains('is-plain')).toBe(true);
  });
  test('round 是否正常工作', () => {
    const { getByRole } = render(Button, {
      props: {
        round: true
      }
    });
    const button = getByRole('button');
    expect(button.classList.contains('is-round')).toBe(true);
  });
  test('circle 是否正常工作', () => {
    const { getByRole } = render(Button, {
      props: {
        circle: true
      }
    });
    const button = getByRole('button');
    expect(button.classList.contains('is-circle')).toBe(true);
  });
  test('dashed 是否正常工作', () => {
    const { getByRole } = render(Button, {
      props: {
        dashed: true
      }
    });
    const button = getByRole('button');
    expect(button.classList.contains('is-dashed')).toBe(true);
  });
  describe('button的disabled测试', () => {
    test('当disabled为true时按钮被禁用', () => {
      const { getByRole } = render(Button, {
        props: {
          disabled: true
        }
      });
      const button = getByRole('button');
      expect(button).toBeDisabled();
    });
    test('当disabled为false时按钮被启用', () => {
      const { getByRole } = render(Button, {
        props: {
          disabled: false
        }
      });
      const button = getByRole('button');
      expect(button).toBeEnabled();
    });
  });

  it('nativeType', () => {
    const wrapper = mount(() => <Button nativeType="submit" />);
    expect(wrapper.attributes('nativetype')).toBe('submit');
  });
  describe('tag 测试', () => {
    const link = 'https://github.com/xp2000926/min-sheep-ui-plus.git';
    test('默认插槽是不是空', () => {
      const wrapper = mount(() => <Button tag="div"></Button>);
      expect(wrapper.text()).toEqual('');
    });
    test('默认插槽是不是空', () => {
      const wrapper = mount(() => <Button tag="a" href={link}></Button>);
      expect(wrapper.text()).toEqual('');
    });
    test('tag 为 div 默认插槽是否可以正常工作', () => {
      const wrapper = mount(() => <Button tag="div">测试</Button>);
      expect(wrapper.text()).toEqual('测试');
    });
    test('tag 为 a 默认插槽是否可以正常工作', () => {
      const wrapper = mount(() => <Button tag="a">测试</Button>);
      expect(wrapper.text()).toEqual('测试');
    });
    it('tag为a时添加默认属性是否生效', () => {
      const wrapper = mount(() => <Button tag="a" href={link}></Button>);
      expect(wrapper.element.nodeName).toBe('A');
      expect(wrapper.attributes('href')).toBe(link);
    });
    it('tag为div时', () => {
      const wrapper = mount(() => <Button tag="div"></Button>);
      expect(wrapper.element.nodeName).toBe('DIV');
    });
    describe('tag disabled', () => {
      it('验证tag禁用时class是否正确添加', () => {
        const wrapper = mount(() => (
          <Button disabled tag="a" href={link}></Button>
        ));
        expect(wrapper.classes('is-disabled')).toBe(true);
      });
      it('验证tag启用时class是否正确', () => {
        const wrapper = mount(() => <Button tag="a" href={link}></Button>);
        expect(wrapper.classes('is-disabled')).toBe(false);
      });
    });
  });
});
