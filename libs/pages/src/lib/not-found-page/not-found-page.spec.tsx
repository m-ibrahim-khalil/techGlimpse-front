import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import NotFoundPage from './not-found-page';

describe('NotFoundPage', () => {
  it('should render successfully', () => {
    render(<NotFoundPage />, { wrapper: BrowserRouter });
    expect(screen.getByText(/Page not found/i)).toBeTruthy();
  });
});
