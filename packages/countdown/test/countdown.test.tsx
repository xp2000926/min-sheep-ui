import { mount } from '@vue/test-utils';
import Countdown from '../src/countdown';

describe('countdown 测试', () => {
  test('countdown是否可以正常工作', async () => {
    const wrapper = mount(Countdown);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
