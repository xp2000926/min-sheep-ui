import { mount } from '@vue/test-utils';
import Text from '../src/text';

describe('text 测试', () => {
  test('text是否可以正常工作', async () => {
    const wrapper = mount(Text);
    expect(wrapper.element.nodeName).toBe('SPAN');
  });
});
