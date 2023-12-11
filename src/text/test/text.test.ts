import { render } from '@testing-library/vue'
import Text from '../src/text'

describe('text test', () => {
  test('text init render', async () => {
    const { getByRole } = render(Text)
    getByRole('text')
  })
})
