import { mount } from '@vue/test-utils';
import InputTag from '../src/input-tag';

describe('input-tag 测试', () => {
  test('input-tag是否可以正常工作', async () => {
    const wrapper = mount(InputTag);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
