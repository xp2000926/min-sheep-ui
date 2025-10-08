import { mount } from '@vue/test-utils';
import InputNumber from '../src/input-number';

describe('input-number 测试', () => {
  test('input-number是否可以正常工作', async () => {
    const wrapper = mount(InputNumber);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
