import { mount } from '@vue/test-utils';
import Cascader from '../src/cascader';

describe('cascader 测试', () => {
  test('cascader是否可以正常工作', async () => {
    const wrapper = mount(Cascader);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
