import * as rtkQuery from '@tech-glimpse-front/redux-toolkit';
import * as ui from '@tech-glimpse-front/ui-shared';
import { render } from '@testing-library/react';
import * as RouterDom from 'react-router-dom';
import BlogPage from './blog-page';

vi.mock('react-router-dom', async () => {
  const actual: any = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useParams: vi.fn(),
  };
});

describe('BlogPage', () => {
  const useBlogSpy = vi.spyOn(rtkQuery, 'useBlog');
  const useUserSpy = vi.spyOn(rtkQuery, 'useUser');
  const useAppSelectorSpy = vi.spyOn(rtkQuery, 'useAppSelector');
  const useGetBlogQuerySpy = vi.spyOn(rtkQuery, 'useGetBlogQuery');
  const BlogCardSpy = vi.spyOn(ui, 'BlogCard');
  const useParamsSpy = vi.spyOn(RouterDom, 'useParams');
  const { BrowserRouter } = RouterDom;

  it('should render successfully', () => {
    // Arrange
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
    useAppSelectorSpy.mockReturnValue({ authUser: 'ibrahim' });
    useUserSpy.mockReturnValue({
      getUserByUsername: vi.fn(),
      deleteUserByUsername: vi.fn(),
      updatePasswordByUsername: vi.fn(),
      updatePasswordError: { message: '' },
      updatePasswordLoading: false,
    });
    useGetBlogQuerySpy.mockReturnValue({
      data: {
        id: '1',
        title: 'Blog 1',
        description: 'Body 1',
        authorId: '1',
        createdAt: '2021-10-07T11:52:22.000Z',
        updatedAt: '2021-10-07T11:52:22.000Z',
      },
      isLoading: false,
      refetch: vi.fn(),
    });
    BlogCardSpy.mockReturnValue(<p>Blog Card</p>);
    useParamsSpy.mockReturnValue({ blogId: '1' });

    // Act
    render(
      <BrowserRouter>
        <BlogPage />
      </BrowserRouter>
    );
    // Assert
    expect(useGetBlogQuerySpy).toHaveBeenCalledWith({ id: '1' });
  });
});
