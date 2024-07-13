import { render } from '@testing-library/vue';
import Menu from '../src/menu';

describe('menu 测试', () => {
  test('menu init render', async () => {
    const { getByRole } = render(Menu);
    getByRole('menu');
  });
});
