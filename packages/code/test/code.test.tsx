import { mount } from '@vue/test-utils';
import Code from '../src/code';

describe('code 测试', () => {
  test('code是否可以正常工作', async () => {
    const wrapper = mount(Code);
    expect(wrapper.element.nodeName).toBe('CODE');
  });
});
