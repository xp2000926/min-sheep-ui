import { mount } from '@vue/test-utils';
import FloatButton from '../src/float-button';

describe('float-button 测试', () => {
  test('float-button是否可以正常工作', async () => {
    const wrapper = mount(FloatButton);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
