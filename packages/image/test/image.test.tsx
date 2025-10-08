import { mount } from '@vue/test-utils';
import Image from '../src/image';

describe('image 测试', () => {
  test('image是否可以正常工作', async () => {
    const wrapper = mount(Image);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
