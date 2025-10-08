import { mount } from '@vue/test-utils';
import DatePicker from '../src/date-picker';

describe('date-picker 测试', () => {
  test('date-picker是否可以正常工作', async () => {
    const wrapper = mount(DatePicker);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
