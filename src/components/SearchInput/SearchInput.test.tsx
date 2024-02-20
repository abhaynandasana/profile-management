import { screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'helpers/jestGlobalMocks'

import { mockedNavigation, renderWithProviders } from 'helpers/providerMock'

import SearchInput, { SearchInputProps } from "./SearchInput";

describe('SearchInput', () => {
    const defaultProps: SearchInputProps = {
        value: '',
        onChange: jest.fn()
    }

    it('Render the "SearchInput" component', () => {
        const { container } = renderWithProviders(
            <SearchInput {...defaultProps} />
        )
        expect(container).toBeInTheDocument()
    })

    it('Fire an event to search', () => {
        renderWithProviders(
            <SearchInput {...defaultProps} />
        )
        fireEvent.change(screen.getByRole('combobox'), { target: { value: "Test" } })
        expect(defaultProps.onChange).toHaveBeenCalled()
    })

    it('Fire an enter key event in search', () => {
        renderWithProviders(
            <SearchInput {...defaultProps} value={"Test"} />
        )
        const searchInputElement = screen.getByRole('combobox') as Element
        fireEvent.keyDown(searchInputElement, { key: 'Enter', code: 'Enter', charCode: 13 })
        expect(mockedNavigation).toHaveBeenLastCalledWith('search/?q=Test')
    })
})