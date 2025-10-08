import { mount } from '@vue/test-utils';
import Pagination from '../src/pagination';

describe('pagination 测试', () => {
  test('pagination是否可以正常工作', async () => {
    const wrapper = mount(Pagination);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
