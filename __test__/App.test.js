import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('Welcome to the Nutrition App, Nutrition Facts Database', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to the Nutrition App, Nutrition Facts Database/i);
  expect(linkElement).toBeInTheDocument();
});