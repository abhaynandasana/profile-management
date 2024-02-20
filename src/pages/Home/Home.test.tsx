import { fireEvent, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'helpers/jestGlobalMocks'

import { mockedNavigation, renderWithProviders } from 'helpers/providerMock'

import { mockCharactersResponse } from 'mocks/search'
import Home from './Home'

const mockData = jest.fn()
jest.mock('store/search/search.slice', () => ({
    ...jest.requireActual('store/search/search.slice'),
    useSearchQuery: () => ({
        data: mockData()
    })
}))


describe('Home', () => {
    it('Render the "Home" page', () => {
        const { container } = renderWithProviders(<Home />)
        expect(container).toBeInTheDocument()
        expect(screen.getByText('No Data Found')).toBeInTheDocument()
    })

    it('Fire an event to navigate to profile page', async () => {
        mockData.mockImplementation(() => mockCharactersResponse)
        renderWithProviders(<Home />)
        await waitFor(() => {
            expect(screen.getByText('Rick Sanchez')).toBeInTheDocument()
        })
        expect(screen.getByText('Home')).toBeInTheDocument()
        fireEvent.click(screen.getByText('Rick Sanchez'))
        expect(mockedNavigation).toHaveBeenCalledWith(`/profile/${mockCharactersResponse.results[0].id}`)
    })
})