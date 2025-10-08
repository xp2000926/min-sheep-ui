import { mount } from '@vue/test-utils';
import Skeleton from '../src/skeleton';

describe('skeleton 测试', () => {
  test('skeleton是否可以正常工作', async () => {
    const wrapper = mount(Skeleton);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
