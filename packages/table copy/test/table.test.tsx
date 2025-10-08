import { mount } from '@vue/test-utils';
import Table from '../src/table';

describe('table 测试', () => {
  test('table是否可以正常工作', async () => {
    const wrapper = mount(Table);
    expect(wrapper.element.nodeName).toBe('TABLE');
  });
});
