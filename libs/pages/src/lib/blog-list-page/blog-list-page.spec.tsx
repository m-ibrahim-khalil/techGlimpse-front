import * as rtkQuery from '@tech-glimpse-front/redux-toolkit';
import * as ui from '@tech-glimpse-front/ui-shared';
import { render } from '@testing-library/react';
import BlogListPage from './blog-list-page';

describe('BlogListPage', () => {
  const useBlogSpy = vi.spyOn(rtkQuery, 'useBlog');
  const useAppSelectorSpy = vi.spyOn(rtkQuery, 'useAppSelector');
  const BlogCardSpy = vi.spyOn(ui, 'BlogCard');
  const PaginationButtonsSpy = vi.spyOn(ui, 'PaginationButtons');

  it('should render successfully', () => {
    useBlogSpy.mockReturnValue({
      blogList: {
        totalItems: 2,
        payload: [
          {
            id: '1',
            title: 'Blog 1',
            description: 'Body 1',
            authorId: '1',
            createdAt: '2021-10-07T11:52:22.000Z',
            updatedAt: '2021-10-07T11:52:22.000Z',
          },
          {
            id: '2',
            title: 'Blog 2',
            description: 'Body 2',
            authorId: '1',
            createdAt: '2021-10-07T11:52:22.000Z',
            updatedAt: '2021-10-07T11:52:22.000Z',
          },
        ],
        totalPages: 1,
        currentPage: 1,
      },
      loading: false,
      updateBlog: vi.fn(),
      deleteBlog: vi.fn(),
      createBlog: vi.fn(),
    });
    useAppSelectorSpy.mockReturnValue({ page: 1, size: 10 });
    BlogCardSpy.mockReturnValue(<p>Blog Card</p>);
    PaginationButtonsSpy.mockReturnValue(<p>Pagination Buttons</p>);

    const { getByTestId } = render(<BlogListPage />);
    expect(getByTestId('blogList').children.length).toBe(2);
  });
});
