import { mount } from '@vue/test-utils';
import Divider from '../src/divider';

describe('divider 测试', () => {
  test('divider是否可以正常工作', async () => {
    const wrapper = mount(Divider);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
