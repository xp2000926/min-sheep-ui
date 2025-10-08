import { mount } from '@vue/test-utils';
import Select from '../src/select';

describe('select 测试', () => {
  test('select是否可以正常工作', async () => {
    const wrapper = mount(Select);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
