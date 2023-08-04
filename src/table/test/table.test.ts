import { render } from '@testing-library/vue'
import Table from '../src/table'

describe('table test', () => {
  test('table init render', async () => {
    const { getByRole } = render(Table)
    getByRole('table')
  })
})
