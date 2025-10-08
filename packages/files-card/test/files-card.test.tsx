import { mount } from '@vue/test-utils';
import FilesCard from '../src/files-card';

describe('files-card 测试', () => {
  test('files-card是否可以正常工作', async () => {
    const wrapper = mount(FilesCard);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
