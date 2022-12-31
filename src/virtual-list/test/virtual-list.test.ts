import { render } from '@testing-library/vue'
import VirtualList from '../src/virtual-list'

describe('virtual-list test', () => {
  test('virtual-list init render', async () => {
    const { getByRole } = render(VirtualList)
    getByRole('virtual-list')
  })
})
