import { mount } from '@vue/test-utils';
import RadioGroup from '../src/radio-group';

describe('radio-group 测试', () => {
  test('radio-group 是否可以正常工作', async () => {
    const wrapper = mount(RadioGroup);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
