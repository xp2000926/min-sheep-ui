import { mount } from '@vue/test-utils';
import Tour from '../src/tour';

describe('tour 测试', () => {
  test('tour是否可以正常工作', async () => {
    const wrapper = mount(Tour);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
