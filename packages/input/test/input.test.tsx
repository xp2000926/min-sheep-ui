import { mount } from '@vue/test-utils';
import Input from '../src/input';

describe('input 测试', () => {
  test('input是否可以正常工作', async () => {
    const wrapper = mount(Input);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
