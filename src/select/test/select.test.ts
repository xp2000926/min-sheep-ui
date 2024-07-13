import { render } from '@testing-library/vue';
import Select from '../src/select';

describe('select 测试', () => {
  test('select init render', async () => {
    const { getByRole } = render(Select);
    getByRole('select');
  });
});
