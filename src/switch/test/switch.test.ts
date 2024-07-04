import { render } from '@testing-library/vue';
import Switch from '../src/switch';

describe('switch 测试', () => {
  test('switch init render', async () => {
    const { getByRole } = render(Switch);
    getByRole('switch');
  });
});
