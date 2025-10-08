import { mount } from '@vue/test-utils';
import Rete from '../src/rete';

describe('rete 测试', () => {
  test('rete是否可以正常工作', async () => {
    const wrapper = mount(Rete);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
