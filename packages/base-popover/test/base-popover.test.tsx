import { mount } from '@vue/test-utils';
import BasePopover from '../src/base-popover';

describe('base-popover 测试', () => {
  test('base-popover是否可以正常工作', async () => {
    const wrapper = mount(BasePopover);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
