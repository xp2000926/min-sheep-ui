import { mount } from '@vue/test-utils';
import Slider from '../src/slider';

describe('slider 测试', () => {
  test('slider是否可以正常工作', async () => {
    const wrapper = mount(Slider);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
