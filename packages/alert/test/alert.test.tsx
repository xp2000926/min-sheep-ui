import { mount } from '@vue/test-utils';
import Alert from '../src/alert';

describe('alert 测试', () => {
  test('alert是否可以正常工作', async () => {
    const wrapper = mount(Alert);
    expect(wrapper.element.nodeName).toBe('TRANSITION-STUB');
  });
});
