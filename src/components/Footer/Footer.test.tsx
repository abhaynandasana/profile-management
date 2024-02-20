import { screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'helpers/jestGlobalMocks'

import { renderWithProviders } from 'helpers/providerMock'
import { mockProfileHistorySlice, mockSearchApi } from 'mocks/storeState'


import Footer from './Footer'

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: () => ({
        searchApi: mockSearchApi,
        profileHistorySlice: mockProfileHistorySlice
    })
}))

describe('Footer', () => {

    it('Render the "Footer" component', () => {
        const { container } = renderWithProviders(<Footer />)
        expect(container).toBeInTheDocument()
        expect(screen.getByText('Recent Profiles')).toBeInTheDocument()
    })

    it('Render the "Footer" component with recent profile', async () => {
        renderWithProviders(<Footer />)
        await waitFor(() => {
            expect(screen.getByText('Rick Sanchez')).toBeInTheDocument()
        })
    })
})