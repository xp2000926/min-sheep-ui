import { mount } from '@vue/test-utils';
import Notification from '../src/notification';

describe('notification 测试', () => {
  test('notification是否可以正常工作', async () => {
    const wrapper = mount(Notification);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
