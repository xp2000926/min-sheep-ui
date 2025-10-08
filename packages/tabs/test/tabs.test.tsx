import { mount } from '@vue/test-utils';
import Tabs from '../src/tabs';

describe('tabs 测试', () => {
  test('tabs是否可以正常工作', async () => {
    const wrapper = mount(Tabs);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
