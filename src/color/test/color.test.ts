import { render } from '@testing-library/vue'
import Color from '../src/color'

describe('color test', () => {
  test('color init render', async () => {
    const { getByRole } = render(Color)
    getByRole('color')
  })
})
