import { render } from '@testing-library/react';

import PaginationButtons from './pagination-buttons';

describe('PaginationButtons', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PaginationButtons />);
    expect(baseElement).toBeTruthy();
  });
});
