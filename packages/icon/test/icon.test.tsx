import { mount } from '@vue/test-utils';
import Icon from '../src/icon';

describe('icon 测试', () => {
  test('icon是否可以正常工作', async () => {
    const wrapper = mount(Icon);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
