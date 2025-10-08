import { mount } from '@vue/test-utils';
import Trigger from '../src/trigger';

describe('trigger 测试', () => {
  test('trigger是否可以正常工作', async () => {
    const wrapper = mount(Trigger);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
