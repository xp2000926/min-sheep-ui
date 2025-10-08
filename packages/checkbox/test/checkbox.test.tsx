import { mount } from '@vue/test-utils';
import Checkbox from '../src/checkbox';

describe('checkbox 测试', () => {
  test('checkbox是否可以正常工作', async () => {
    const wrapper = mount(Checkbox);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
