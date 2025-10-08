import { mount } from '@vue/test-utils';
import Ellipsis from '../src/ellipsis';

describe('ellipsis 测试', () => {
  test('ellipsis是否可以正常工作', async () => {
    const wrapper = mount(Ellipsis);
    expect(wrapper.element.nodeName).toBe('SPAN');
  });
});
