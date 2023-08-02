import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './home-page';

describe('HomePage', () => {
  it('should render successfully', () => {
    render(<HomePage />, { wrapper: BrowserRouter });
    expect(
      screen.getByText(/Share Your Stories and Ideas on Our Blog/i)
    ).toBeDefined();
  });
});
