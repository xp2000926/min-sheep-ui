import { render } from '@testing-library/vue'
import Link from '../src/link'

describe('link test', () => {
  test('link init render', async () => {
    const { getByRole } = render(Link)
    getByRole('link')
  })
})
