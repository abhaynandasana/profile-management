import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import store from "store";


export const mockedCurrentLocationValue = jest.fn()
export const mockedParamsValue = jest.fn()
export const mockedNavigation = jest.fn()
export default jest.mock('react-router-dom', () => {
    return {
        ...jest.requireActual('react-router-dom'),
        useLocation: () => mockedCurrentLocationValue,
        useSearchParams: () => [{ get: mockedParamsValue }],
        useNavigate: () => mockedNavigation,
    }
})

export const renderWithProviders = (children: React.ReactElement, renderOptions = {}) => {

    return render(
        <Provider store={store}>
            {children}
        </Provider>
        , renderOptions
    )
}