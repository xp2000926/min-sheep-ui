import { mount } from '@vue/test-utils';
import Ahp from '../src/ahp';

describe('ahp 测试', () => {
  test('ahp是否可以正常工作', async () => {
    const wrapper = mount(Ahp);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
