import { fireEvent, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'helpers/jestGlobalMocks'

import { mockedNavigation, renderWithProviders } from 'helpers/providerMock'

import { mockProfile } from 'mocks/profile'
import Profile from './Profile'

const mockData = jest.fn()
jest.mock('store/profile/profile.slice', () => ({
    ...jest.requireActual('store/profile/profile.slice'),
    useProfileQuery: () => ({
        data: mockData()
    })
}))


describe('Profile', () => {
    it('Render the "Profile" page', () => {
        const { container } = renderWithProviders(<Profile />)
        expect(container).toBeInTheDocument()
        expect(screen.getByText('No Data Found')).toBeInTheDocument()
    })

    it('Fire an event to navigate to home page', async () => {
        mockData.mockImplementation(() => mockProfile)
        renderWithProviders(<Profile />)
        await waitFor(() => {
            expect(screen.getByText('Rick Sanchez')).toBeInTheDocument()
        })
        fireEvent.click(screen.getByText('Home'))
        expect(mockedNavigation).toHaveBeenCalledWith(`/`)
    })
})