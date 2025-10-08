import { mount } from '@vue/test-utils';
import TimeSelect from '../src/time-select';

describe('time-select 测试', () => {
  test('time-select是否可以正常工作', async () => {
    const wrapper = mount(TimeSelect);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
