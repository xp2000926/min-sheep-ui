import { mount } from '@vue/test-utils';
import Tag from '../src/tag';

describe('tag 测试', () => {
  test('tag是否可以正常工作', async () => {
    const wrapper = mount(Tag);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
