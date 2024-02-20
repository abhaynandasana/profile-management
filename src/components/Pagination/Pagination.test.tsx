import { fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { PaginationProps } from 'antd'
import 'helpers/jestGlobalMocks'

import { renderWithProviders } from 'helpers/providerMock'

import Pagination from './Pagination'

describe('Pagination', () => {
    const defaultProps: PaginationProps = {
        current: 1,
        total: 100,
        onChange: jest.fn()
    }

    it('Render the "Pagination" component', () => {
        const { container } = renderWithProviders(
            <Pagination {...defaultProps} />
        )
        expect(container).toBeInTheDocument()
    })

    it('Fire an Event to change the page', () => {
        renderWithProviders(
            <Pagination {...defaultProps} />
        )
        fireEvent.click(screen.getByText('2'))
        expect(defaultProps.onChange).toHaveBeenCalledWith(2, 10)
    })
})