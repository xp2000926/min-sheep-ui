import { mount } from '@vue/test-utils';
import Loading from '../src/loading';

describe('loading 测试', () => {
  test('loading是否可以正常工作', async () => {
    const wrapper = mount(Loading);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
