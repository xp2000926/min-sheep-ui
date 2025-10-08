import { mount } from '@vue/test-utils';
import Link from '../src/link';

describe('link 测试', () => {
  test('link是否可以正常工作', async () => {
    const wrapper = mount(Link);
    expect(wrapper.element.nodeName).toBe('A');
  });
});
