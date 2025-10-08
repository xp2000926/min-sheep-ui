import { mount } from '@vue/test-utils';
import DatePickerPanel from '../src/date-picker-panel';

describe('DatePickerPanel 测试', () => {
  test('DatePickerPanel 是否可以正常工作', async () => {
    const wrapper = mount(DatePickerPanel);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
