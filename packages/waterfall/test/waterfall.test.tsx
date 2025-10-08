import { mount } from '@vue/test-utils';
import Waterfall from '../src/waterfall';

describe('waterfall 测试', () => {
  test('waterfall是否可以正常工作', async () => {
    const wrapper = mount(Waterfall);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
