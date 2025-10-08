import { mount } from '@vue/test-utils';
import Form from '../src/form';

describe('form 测试', () => {
  test('form是否可以正常工作', async () => {
    const wrapper = mount(Form);
    expect(wrapper.element.nodeName).toBe('FORM');
  });
});
