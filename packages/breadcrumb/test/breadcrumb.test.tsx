import { mount } from '@vue/test-utils';
import Breadcrumb from '../src/breadcrumb';

describe('breadcrumb 测试', () => {
  test('breadcrumb是否可以正常工作', async () => {
    const wrapper = mount(Breadcrumb);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
