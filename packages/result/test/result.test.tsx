import { mount } from '@vue/test-utils';
import Result from '../src/result';

describe('result 测试', () => {
  test('result是否可以正常工作', async () => {
    const wrapper = mount(Result);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
