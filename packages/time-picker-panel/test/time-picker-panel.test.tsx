import { mount } from '@vue/test-utils';
import TimePickerPanel from '../src/time-picker-panel';

describe('time-picker-panel 测试', () => {
  test('time-picker-panel是否可以正常工作', async () => {
    const wrapper = mount(TimePickerPanel);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
