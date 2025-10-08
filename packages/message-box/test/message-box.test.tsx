import { mount } from '@vue/test-utils';
import MessageBox from '../src/message-box';

describe('message-box 测试', () => {
  test('message-box是否可以正常工作', async () => {
    const wrapper = mount(MessageBox);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
