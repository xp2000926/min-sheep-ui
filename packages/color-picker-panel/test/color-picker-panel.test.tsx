import { mount } from '@vue/test-utils';
import ColorPickerPanel from '../src/color-picker-panel';

describe('ColorPickerPanel 测试', () => {
  test('ColorPickerPanel 是否可以正常工作', async () => {
    const wrapper = mount(ColorPickerPanel);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
