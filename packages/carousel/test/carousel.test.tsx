import { mount } from '@vue/test-utils';
import Carousel from '../src/carousel';

describe('carousel 测试', () => {
  test('carousel是否可以正常工作', async () => {
    const wrapper = mount(Carousel);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
