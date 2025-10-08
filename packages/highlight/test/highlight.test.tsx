import { mount } from '@vue/test-utils';
import Highlight from '../src/highlight';

describe('highlight 测试', () => {
  test('highlight是否可以正常工作', async () => {
    const wrapper = mount(Highlight);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
