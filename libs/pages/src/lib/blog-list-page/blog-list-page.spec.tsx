import { render } from '@testing-library/react';

import BlogListPage from './blog-list-page';

describe('BlogListPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlogListPage />);
    expect(baseElement).toBeTruthy();
  });
});
