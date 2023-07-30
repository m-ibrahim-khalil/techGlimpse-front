import { render } from '@testing-library/react';

import BlogsByAuthor from './blogs-by-author';

describe('BlogsByAuthor', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlogsByAuthor />);
    expect(baseElement).toBeTruthy();
  });
});
