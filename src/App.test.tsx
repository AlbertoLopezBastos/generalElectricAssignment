import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders searchBar component', () => {
  render(<App />);
  const searchBarComponent = screen.getByTestId('search-bar');
  expect(searchBarComponent).toBeInTheDocument();
});

test('renders at least 1 BookCard after clicking search button', () => {
  render(<App />);

  const button = screen.getByTestId('search-button')
  fireEvent.click(button)

  const bookCardComponent = screen.getAllByTestId('book-card');
  expect(bookCardComponent.length).toBeGreaterThanOrEqual(1);
});