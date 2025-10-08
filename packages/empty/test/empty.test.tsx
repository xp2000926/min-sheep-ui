import { mount } from '@vue/test-utils';
import Empty from '../src/empty';

describe('empty 测试', () => {
  const AXIOM = 'Rem is the best girl';
  test('empty是否可以正常工作', async () => {
    const wrapper = mount(() => <Empty />);
    expect(wrapper.element.nodeName).toBe('DIV');
    expect(wrapper.find('.s-empty').exists()).toBe(true);
    expect(wrapper.find('.s-empty-image').exists()).toBe(true);
    expect(wrapper.find('.s-empty-description').exists()).toBe(true);
    expect(wrapper.find('.s-empty-footer').exists()).toBe(true);
    expect(wrapper.find('.s-empty-image').attributes('style')).toContain(
      'width: 160px'
    );
  });
  test('empty自定义图片', () => {
    const image =
      'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png';
    const wrapper = mount(() => <Empty image={image} />);
    expect(wrapper.find('.s-empty-image img').exists()).toBe(true);
    expect(wrapper.find('.s-empty-image img').attributes('src')).toBe(image);
  });

  test('水平排列 class 是否正确添加', () => {
    const wrapper = mount(() => <Empty layout="horizontal" />);
    expect(wrapper.find('.s-empty .s-empty-layout').exists()).toBe(true);
  });

  test('description 测试', () => {
    const wrapper = mount(() => <Empty description={AXIOM} />);
    expect(wrapper.find('.s-empty-description').text()).toBe(AXIOM);
  });
  it('image插槽测试', () => {
    const wrapper = mount(() => (
      <Empty
        v-slots={{
          image: () => AXIOM
        }}
      />
    ));
    expect(wrapper.find('.s-empty-image').text()).toEqual(AXIOM);
  });
  it('description 插槽测试', () => {
    const wrapper = mount(() => (
      <Empty v-slots={{ description: () => AXIOM }} />
    ));
    expect(wrapper.find('.s-empty-description').text()).toEqual(AXIOM);
  });
  it('默认插槽测试', () => {
    const wrapper = mount(() => <Empty v-slots={{ default: () => AXIOM }} />);
    expect(wrapper.find('.s-empty-footer').text()).toEqual(AXIOM);
  });
  it('imageSize测试', () => {
    const wrapper = mount(() => <Empty imageSize={500} />);
    expect(wrapper.find('.s-empty-image').attributes('style')).toContain(
      'width: 500px'
    );
  });
});
