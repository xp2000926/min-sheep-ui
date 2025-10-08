import { mount } from '@vue/test-utils';
import Splitter from '../src/splitter';

describe('splitter 测试', () => {
  test('splitter是否可以正常工作', async () => {
    const wrapper = mount(Splitter);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
