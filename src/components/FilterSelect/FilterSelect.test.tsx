import { screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'helpers/jestGlobalMocks'

import { renderWithProviders } from 'helpers/providerMock'

import FilterSelect, { FilterSelectProps } from './FilterSelect'

describe('FilterSelect', () => {
    const defaultProps: FilterSelectProps = {
        value: [],
        onChange: jest.fn()
    }

    it('Render the "SearchInput" component', () => {
        const { container } = renderWithProviders(
            <FilterSelect {...defaultProps} />
        )
        expect(container).toBeInTheDocument()
    })

    it('Fire an event to search', async () => {
        renderWithProviders(
            <FilterSelect {...defaultProps} />
        )
        fireEvent.change(screen.getByRole('combobox'), { target: { value: "Female" } })
        await waitFor(() => {
            expect(screen.getAllByText('Female')[0]).toBeInTheDocument()
        })
        fireEvent.click(screen.getAllByText('Female')[1])
        expect(defaultProps.onChange).toHaveBeenCalled()
    })
})