import { mount } from '@vue/test-utils';
import BaseModal from '../src/base-modal';

describe('base-modal 测试', () => {
  test('base-modal是否可以正常工作', async () => {
    const wrapper = mount(BaseModal);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
