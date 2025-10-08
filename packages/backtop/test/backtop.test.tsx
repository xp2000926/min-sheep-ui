import { mount } from '@vue/test-utils';
import Backtop from '../src/backtop';

describe('backtop 测试', () => {
  test('backtop是否可以正常工作', async () => {
    const wrapper = mount(Backtop);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
