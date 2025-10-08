import { mount } from '@vue/test-utils';
import Steps from '../src/steps';

describe('steps 测试', () => {
  test('steps是否可以正常工作', async () => {
    const wrapper = mount(Steps);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
