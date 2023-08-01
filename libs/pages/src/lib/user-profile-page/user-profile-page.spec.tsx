import * as rtkQuery from '@tech-glimpse-front/redux-toolkit';
import * as ui from '@tech-glimpse-front/ui-shared';
import { render, screen } from '@testing-library/react';
import * as RouterDom from 'react-router-dom';
import * as blogList from '../blogs-by-author/blogs-by-author';
import UserProfilePage from './user-profile-page';

vi.mock('react-router-dom', async () => {
  const actual: any = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useParams: vi.fn(),
  };
});

describe('UserProfilePage', () => {
  const useUserSpy = vi.spyOn(rtkQuery, 'useUser');
  const UserCardSpy = vi.spyOn(ui, 'UserCard');
  const UserDetailsCardSpy = vi.spyOn(ui, 'UserDetailsCard');
  const BlogsByAuthorSpy = vi.spyOn(blogList, 'BlogsByAuthor');
  const useParamsSpy = vi.spyOn(RouterDom, 'useParams');
  const { BrowserRouter } = RouterDom;

  it('should render UserProfile page successfully', () => {
    // Arrange
    useUserSpy.mockReturnValue({
      getUserByUsername: vi.fn().mockReturnValue({
        id: '1',
        username: 'ibrahim',
        email: '',
      }),
      deleteUserByUsername: vi.fn(),
      updatePasswordByUsername: vi.fn(),
      updatePasswordError: { message: '' },
      updatePasswordLoading: false,
    });
    UserCardSpy.mockReturnValue(<div>UserCard</div>);
    UserDetailsCardSpy.mockReturnValue(<div>UserDetailsCard</div>);
    BlogsByAuthorSpy.mockReturnValue(<div>BlogsByAuthor</div>);
    useParamsSpy.mockReturnValue({ username: 'ibrahim' });

    // Act
    render(<UserProfilePage />, { wrapper: BrowserRouter });

    // Assert
    expect(useUserSpy).toBeCalledTimes(1);
    expect(useParamsSpy).toHaveBeenCalledTimes(1);
    expect(screen.getByText(/UserCard/i)).toBeDefined();
    expect(screen.getByText(/UserDetailsCard/i)).toBeDefined();
  });
});
