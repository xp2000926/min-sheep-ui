import { mount } from '@vue/test-utils';
import RadioButton from '../src/radio-button';

describe('radio-button 测试', () => {
  test('radio-button 是否可以正常工作', async () => {
    const wrapper = mount(RadioButton);
    expect(wrapper.element.nodeName).toBe('LABEL');
  });
});
