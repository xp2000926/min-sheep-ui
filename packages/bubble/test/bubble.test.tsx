import { mount } from '@vue/test-utils';
import Bubble from '../src/bubble';

describe('bubble 测试', () => {
  test('bubble是否可以正常工作', async () => {
    const wrapper = mount(Bubble);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
