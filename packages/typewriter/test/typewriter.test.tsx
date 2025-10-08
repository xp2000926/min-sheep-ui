import { mount } from '@vue/test-utils';
import Typewriter from '../src/typewriter';

describe('typewriter 测试', () => {
  test('typewriter是否可以正常工作', async () => {
    const wrapper = mount(Typewriter);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
