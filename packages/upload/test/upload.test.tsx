import { mount } from '@vue/test-utils';
import Upload from '../src/upload';

describe('upload 测试', () => {
  test('upload是否可以正常工作', async () => {
    const wrapper = mount(Upload);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
