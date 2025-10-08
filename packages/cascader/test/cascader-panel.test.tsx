import { mount } from '@vue/test-utils';
import CascaderPanel from '../src/cascader-panel';

describe('cascader-panel 测试', () => {
  test('cascader-panel 是否可以正常工作', async () => {
    const wrapper = mount(CascaderPanel);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
