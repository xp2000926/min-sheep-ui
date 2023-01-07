import { render } from '@testing-library/vue'
import BaseModal from '../src/base-modal'

describe('base-modal test', () => {
  test('base-modal init render', async () => {
    const { getByRole } = render(BaseModal)
    getByRole('base-modal')
  })
})
