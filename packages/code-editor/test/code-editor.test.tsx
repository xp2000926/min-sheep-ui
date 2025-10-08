import { mount } from '@vue/test-utils';
import CodeEditor from '../src/code-editor';

describe('code-editor 测试', () => {
  test('code-editor是否可以正常工作', async () => {
    const wrapper = mount(CodeEditor);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
