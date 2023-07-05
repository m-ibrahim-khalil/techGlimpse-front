import { render } from '@testing-library/react';

import BlogRoutes from './blog-routes';

describe('BlogRoutes', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlogRoutes />);
    expect(baseElement).toBeTruthy();
  });
});
