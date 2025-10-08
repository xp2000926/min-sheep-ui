import { mount } from '@vue/test-utils';
import Modal from '../src/modal';

describe('modal 测试', () => {
  test('modal是否可以正常工作', async () => {
    const wrapper = mount(Modal);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
