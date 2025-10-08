import { mount } from '@vue/test-utils';
import Descriptions from '../src/descriptions';

describe('descriptions 测试', () => {
  test('descriptions是否可以正常工作', async () => {
    const wrapper = mount(Descriptions);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
