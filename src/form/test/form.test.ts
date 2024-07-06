import { render } from '@testing-library/vue';
import Form from '../src/form';

describe('form 测试', () => {
  test('form init render', async () => {
    const { getByRole } = render(Form);
    getByRole('form');
  });
});
