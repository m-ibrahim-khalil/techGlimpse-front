import { render } from '@testing-library/react';

import BlogEditor from './blog-editor';

describe('BlogEditor', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlogEditor />);
    expect(baseElement).toBeTruthy();
  });
});
