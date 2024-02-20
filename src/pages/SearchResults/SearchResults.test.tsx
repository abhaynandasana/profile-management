import { fireEvent, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'helpers/jestGlobalMocks'

import { mockedNavigation, renderWithProviders, mockedParamsValue } from 'helpers/providerMock'

import { mockCharactersResponse } from 'mocks/search'
import SearchResults from './SearchResults'

const mockData = jest.fn()
jest.mock('store/search/search.slice', () => ({
    ...jest.requireActual('store/search/search.slice'),
    useSearchQuery: () => ({
        data: mockData()
    })
}))


describe('SearchResults', () => {

    it('Render the "SearchResults" page', () => {
        const { container } = renderWithProviders(<SearchResults />)
        expect(container).toBeInTheDocument()
        expect(screen.getByText('No Data Found')).toBeInTheDocument()
    })

    it('Fire an event to navigate to profile page', async () => {
        mockedParamsValue.mockImplementation(() => 'test')
        mockData.mockImplementation(() => mockCharactersResponse)
        renderWithProviders(<SearchResults />)
        await waitFor(() => {
            expect(screen.getByText('Rick Sanchez')).toBeInTheDocument()
        })
        expect(screen.getByText('Search Results')).toBeInTheDocument()
        fireEvent.click(screen.getByText('Rick Sanchez'))
        expect(mockedNavigation).toHaveBeenCalledWith(`/profile/${mockCharactersResponse.results[0].id}`)
    })
})