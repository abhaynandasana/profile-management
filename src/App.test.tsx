import { renderWithProviders } from 'helpers/providerMock';

import App from './App';

test('renders learn react link', () => {
  const { container } = renderWithProviders(<App />);
  expect(container).toBeInTheDocument();
});
