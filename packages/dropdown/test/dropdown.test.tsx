import { mount } from '@vue/test-utils';
import Dropdown from '../src/dropdown';

describe('dropdown 测试', () => {
  test('dropdown是否可以正常工作', async () => {
    const wrapper = mount(Dropdown);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
