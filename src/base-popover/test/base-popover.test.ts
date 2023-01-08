import { render } from '@testing-library/vue'
import BasePopover from '../src/base-popover'

describe('base-popover test', () => {
  test('base-popover init render', async () => {
    const { getByRole } = render(BasePopover)
    getByRole('base-popover')
  })
})
