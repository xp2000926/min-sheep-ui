import { mount } from '@vue/test-utils';
import Popover from '../src/popover';

describe('popover 测试', () => {
  test('popover是否可以正常工作', async () => {
    const wrapper = mount(Popover);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
