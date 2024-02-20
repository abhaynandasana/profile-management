import { fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'helpers/jestGlobalMocks'

import { renderWithProviders, mockedNavigation } from 'helpers/providerMock'

import ProfileCard, { ProfileCardProps } from './ProfileCard'

describe('ProfileCard', () => {
    const defaultProps: ProfileCardProps = {
        id: 1,
        name: "Aqua Morty",
        image: "",
        status: "Alive"
    }

    it('Render the "ProfileCard" component', () => {
        const { container } = renderWithProviders(
            <ProfileCard {...defaultProps} />
        )
        expect(container).toBeInTheDocument()
    })

    it('Fire an event on profile name click', () => {
        renderWithProviders(
            <ProfileCard {...defaultProps} />
        )
        fireEvent.click(screen.getByText(defaultProps.name))
        expect(mockedNavigation).toHaveBeenCalledWith(`/profile/${defaultProps.id}`)
    })
})