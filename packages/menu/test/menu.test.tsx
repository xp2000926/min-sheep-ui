import { mount } from '@vue/test-utils';
import Menu from '../src/menu';

describe('menu 测试', () => {
  test('menu是否可以正常工作', async () => {
    const wrapper = mount(Menu);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
