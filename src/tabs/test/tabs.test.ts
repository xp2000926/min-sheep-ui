import { render } from '@testing-library/vue'
import Tabs from '../src/tabs'

describe('tabs test', () => {
  test('tabs init render', async () => {
    const { getByRole } = render(Tabs)
    getByRole('tabs')
  })
})
