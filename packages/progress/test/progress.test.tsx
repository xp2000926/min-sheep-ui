import { mount } from '@vue/test-utils';
import Progress from '../src/progress';

describe('progress 测试', () => {
  test('progress是否可以正常工作', async () => {
    const wrapper = mount(Progress);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
