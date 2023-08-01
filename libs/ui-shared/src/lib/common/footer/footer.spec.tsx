import { render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import Footer from './footer';

describe('Footer', () => {
  it('should render footer successfully', () => {
    const { baseElement, findByText } = render(<Footer />, {
      wrapper: BrowserRouter,
    });
    expect(baseElement).toBeTruthy();
    expect(findByText(/TechGlimpse/i)).toBeTruthy();
  });
});
