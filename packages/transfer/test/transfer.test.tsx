import { mount } from '@vue/test-utils';
import Transfer from '../src/transfer';

describe('transfer 测试', () => {
  test('transfer是否可以正常工作', async () => {
    const wrapper = mount(Transfer);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
