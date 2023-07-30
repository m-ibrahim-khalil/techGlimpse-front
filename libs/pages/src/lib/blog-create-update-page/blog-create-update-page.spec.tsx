import { render } from '@testing-library/react';

import BlogCreateUpdatePage from './blog-create-update-page';

describe('BlogCreateUpdatePage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlogCreateUpdatePage />);
    expect(baseElement).toBeTruthy();
  });
});
