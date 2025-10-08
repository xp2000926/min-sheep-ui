import { mount } from '@vue/test-utils';
import BubbleList from '../src/bubble-list';

describe('bubble-list 测试', () => {
  test('bubble-list是否可以正常工作', async () => {
    const wrapper = mount(BubbleList);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
