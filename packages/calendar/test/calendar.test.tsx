import { mount } from '@vue/test-utils';
import Calendar from '../src/calendar';

describe('calendar 测试', () => {
  test('calendar是否可以正常工作', async () => {
    const wrapper = mount(Calendar);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
