import * as rtkQuery from '@tech-glimpse-front/redux-toolkit';
import { render } from '@testing-library/react';

import PaginationButtons, {
  PaginationButtonsProps,
} from './pagination-buttons';

const props: PaginationButtonsProps = {
  currentPage: 1,
  totalPages: 10,
  totalItems: 100,
  size: 10,
};

describe('PaginationButtons', () => {
  const usePaginationSpy = vi.spyOn(rtkQuery, 'usePagination');
  it('should render successfully', () => {
    usePaginationSpy.mockReturnValue({
      handleChangePage: vi.fn(),
      handleChangeSize: vi.fn(),
    });
    const { baseElement } = render(<PaginationButtons {...props} />);
    expect(baseElement).toBeTruthy();
  });
});
