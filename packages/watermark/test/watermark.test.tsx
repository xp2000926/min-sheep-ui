import { mount } from '@vue/test-utils';
import Watermark from '../src/watermark';

describe('watermark 测试', () => {
  test('watermark是否可以正常工作', async () => {
    const wrapper = mount(Watermark);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
