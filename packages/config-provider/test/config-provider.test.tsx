import { mount } from '@vue/test-utils';
import ConfigProvider from '../src/config-provider';

describe('config-provider 测试', () => {
  test('config-provider是否可以正常工作', async () => {
    const wrapper = mount(ConfigProvider);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
