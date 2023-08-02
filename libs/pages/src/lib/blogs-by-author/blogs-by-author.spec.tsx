import * as useBlogsHooks from '@tech-glimpse-front/redux-toolkit';
import * as ui from '@tech-glimpse-front/ui-shared';

import { render } from '@testing-library/react';
import BlogsByAuthor from './blogs-by-author';

describe('BlogsByAuthor', () => {
  const useGetBlogsByAuthorIdQuerySpy = vi.spyOn(
    useBlogsHooks,
    'useGetBlogsByAuthorIdQuery'
  );

  const BlogCardSpy = vi.spyOn(ui, 'BlogCard');

  it('should render all Blogs by an author', () => {
    useGetBlogsByAuthorIdQuerySpy.mockReturnValue({
      data: {
        totalItems: 2,
        payload: [
          {
            id: '1',
            title: 'Blog 1',
            body: 'Body 1',
            authorId: '1',
            createdAt: '2021-10-07T11:52:22.000Z',
            updatedAt: '2021-10-07T11:52:22.000Z',
          },
          {
            id: '2',
            title: 'Blog 2',
            body: 'Body 2',
            authorId: '1',
            createdAt: '2021-10-07T11:52:22.000Z',
            updatedAt: '2021-10-07T11:52:22.000Z',
          },
        ],
        totalPages: 1,
        currentPage: 1,
      },
      isLoading: false,
      refetch: vi.fn(),
    });

    BlogCardSpy.mockReturnValue(<p>Blog Card</p>);

    const { getByTestId } = render(<BlogsByAuthor authorId="1" />);
    expect(getByTestId('blogByAuthorList').children.length).toBe(2);
  });
});
