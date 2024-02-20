import { fireEvent, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'helpers/jestGlobalMocks'

import { renderWithProviders, mockedNavigation } from 'helpers/providerMock'

import Header from './Header'

const mockDispatch = jest.fn()
jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: () => mockDispatch
}))

describe('Header', () => {
    it('Render the "Header" component', () => {
        const { container } = renderWithProviders(<Header />)
        expect(container).toBeInTheDocument()
        expect(screen.getByText('Logo')).toBeInTheDocument()
    })

    it('Fire an event to search', () => {
        renderWithProviders(<Header />)
        const searchInputElement = screen.getAllByRole('combobox')[0]
        fireEvent.change(searchInputElement, { target: { value: 'test' } })
        fireEvent.blur(searchInputElement)
        expect(searchInputElement).toHaveValue('test')
    })

    it('Fire an event to change the filters', async () => {
        renderWithProviders(<Header />)
        const filterInputElement = screen.getAllByRole('combobox')[1]

        fireEvent.change(filterInputElement, { target: { value: ['Female'] } })
        await waitFor(() => {
            expect(screen.getAllByText('Female')[0]).toBeInTheDocument()
        })
        fireEvent.click(screen.getAllByText('Female')[1])
        expect(mockDispatch).toHaveBeenCalled()
    })

    it('Fire an event to click on logo', () => {
        renderWithProviders(<Header />)
        fireEvent.click(screen.getByText('Logo'))
        expect(mockedNavigation).toHaveBeenCalledWith('/')
    })
})