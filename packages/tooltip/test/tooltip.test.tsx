import { mount } from '@vue/test-utils';
import Tooltip from '../src/tooltip';

describe('tooltip 测试', () => {
  test('tooltip是否可以正常工作', async () => {
    const wrapper = mount(Tooltip);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
