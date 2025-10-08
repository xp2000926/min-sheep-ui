import { mount } from '@vue/test-utils';
import Badge from '../src/badge';

describe('badge 测试', () => {
  it('badge是否可以正常工作', async () => {
    const wrapper = mount(() => <Badge />);
    expect(wrapper.element.nodeName).toBe('DIV');
    expect(wrapper.find('.s-badge').exists()).toBe(true);
    expect(wrapper.find('.s-badge--content').exists()).toBe(true);
    expect(wrapper.find('.is-fixed').exists()).toBe(true);
    expect(wrapper.text()).toBe('');
  });
  it('默认插槽', async () => {
    const AXIOM = 'Rem is the best girl';
    const wrapper = mount(() => <Badge>{AXIOM}</Badge>);
    expect(wrapper.text()).toBe(AXIOM);
  });
  describe('badge 的 value 测试', () => {
    it('value 为 number 时', () => {
      const wrapper = mount(() => <Badge value={10} />);
      expect(wrapper.text()).toBe('10');
    });
    it('value 为 string 时', () => {
      const wrapper = mount(() => <Badge value="new" />);
      expect(wrapper.text()).toBe('new');
    });
  });

  it('badge 的 isDot 测试', () => {
    const wrapper = mount(() => <Badge isDot={true} />);
    expect(wrapper.find('.is-dot').exists()).toBe(true);
  });
  describe('badge 的 max 测试', () => {
    it('超过 max 的值', () => {
      const wrapper = mount(() => <Badge value={200} max={99} />);
      expect(wrapper.text()).toBe('99+');
    });
    it('小于 max 的值', () => {
      const wrapper = mount(() => <Badge value={95} max={99} />);
      expect(wrapper.text()).toBe('95');
    });
  });
  describe('badge 的type测试', () => {
    test.each(['primary', 'success', 'info', 'warning', 'danger'])(
      '验证badge的s-badge--%s的class是否正确添加',
      type => {
        const wrapper = mount(() => <Badge type={type} />);
        expect(wrapper.find(`.s-badge--${type}`).exists()).toBe(true);
      }
    );
    it('type default', () => {
      const wrapper = mount(() => <Badge type="default" />);
      expect(wrapper.find(`.s-badge--default`).exists()).toBe(false);
    });
  });
  describe('badge 的 color 测试', () => {
    it('color 测试', () => {
      const wrapper = mount(() => <Badge color="red" />);
      expect(wrapper.find('.s-badge-color').exists()).toBe(true);
      expect(wrapper.find('.s-badge-color').attributes().style).toBe(
        '--badge-color: red;'
      );
    });
    it('渐变色测试', () => {
      const wrapper = mount(() => (
        <Badge color="linear-gradient(to right, #ff6034, #ee0a24)" />
      ));
      expect(wrapper.find('.s-badge-color').exists()).toBe(true);
      expect(wrapper.find('.s-badge-color').attributes().style).toBe(
        '--badge-color: linear-gradient(to right, #ff6034, #ee0a24);'
      );
    });
  });
});
