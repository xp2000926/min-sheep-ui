import { mount } from '@vue/test-utils';
import ImagePreview from '../src/image-preview';

describe('imagePreview 测试', () => {
  test('imagePreview是否可以正常工作', async () => {
    const wrapper = mount(ImagePreview);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
