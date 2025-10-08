import { mount } from '@vue/test-utils';
import Card from '../src/card';

describe('card 测试', () => {
  test('card是否可以正常工作', async () => {
    const wrapper = mount(Card);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
