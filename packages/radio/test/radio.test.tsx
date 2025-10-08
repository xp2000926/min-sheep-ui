import { mount } from '@vue/test-utils';
import Radio from '../src/radio';

describe('radio 测试', () => {
  test('radio是否可以正常工作', async () => {
    const wrapper = mount(Radio);
    expect(wrapper.element.nodeName).toBe('LABEL');
    console.log('wrapper', wrapper.html());
  });
});
