import { mount } from '@vue/test-utils';
import TreeSelect from '../src/tree-select';

describe('tree-select 测试', () => {
  test('tree-select是否可以正常工作', async () => {
    const wrapper = mount(TreeSelect);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
