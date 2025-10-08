import { mount } from '@vue/test-utils';
import Flex from '../src/flex';

describe('flex 测试', () => {
  test('flex是否可以正常工作', async () => {
    const wrapper = mount(Flex);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
