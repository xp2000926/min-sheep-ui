import { render } from '@testing-library/vue';
import FormItem from '../src/form-item';

describe('form-item test', () => {
  test('form-item init render', async () => {
    const { getByRole } = render(FormItem);
    getByRole('form-item');
  });
});
