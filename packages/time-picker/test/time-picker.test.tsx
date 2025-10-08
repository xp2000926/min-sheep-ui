import { mount } from '@vue/test-utils';
import TimePicker from '../src/time-picker';

describe('time-picker 测试', () => {
  test('time-picker是否可以正常工作', async () => {
    const wrapper = mount(TimePicker);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
