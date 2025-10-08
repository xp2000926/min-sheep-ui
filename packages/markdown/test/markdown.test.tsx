import { mount } from '@vue/test-utils';
import Markdown from '../src/markdown';

describe('markdown 测试', () => {
  test('markdown是否可以正常工作', async () => {
    const wrapper = mount(Markdown);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
