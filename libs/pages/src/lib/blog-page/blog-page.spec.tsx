import { render } from '@testing-library/react';

import BlogPage from './blog-page';

describe('BlogPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlogPage />);
    expect(baseElement).toBeTruthy();
  });
});
