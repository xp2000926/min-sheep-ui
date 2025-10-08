import { mount } from '@vue/test-utils';
import TimeLine from '../src/time-line';

describe('time-line 测试', () => {
  test('time-line是否可以正常工作', async () => {
    const wrapper = mount(TimeLine);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
