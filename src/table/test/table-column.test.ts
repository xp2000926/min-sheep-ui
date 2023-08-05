import { render } from '@testing-library/vue'
import TableColumn from '../src/table-column'

describe('TableColumn test', () => {
    test('TableColumn init render', async () => {
        const { getByRole } = render(TableColumn)
        getByRole('TableColumn')
    })
})