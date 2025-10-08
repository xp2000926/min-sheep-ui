import { mount } from '@vue/test-utils';
import Message from '../src/message';

describe('message 测试', () => {
  test('message是否可以正常工作', async () => {
    const wrapper = mount(Message);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
