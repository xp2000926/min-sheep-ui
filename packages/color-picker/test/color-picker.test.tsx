import { mount } from '@vue/test-utils';
import ColorPicker from '../src/color-picker';

describe('color-picker 测试', () => {
  test('color-picker是否可以正常工作', async () => {
    const wrapper = mount(ColorPicker);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
