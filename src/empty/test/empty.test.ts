import { render } from '@testing-library/vue'
import Empty from '../src/empty'

describe('empty test', () => {
  test('empty init render', async () => {
    const { getByRole } = render(Empty)
    getByRole('empty')
  })
})
