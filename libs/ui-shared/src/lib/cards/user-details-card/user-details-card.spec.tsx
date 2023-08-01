import * as rtkQuery from '@tech-glimpse-front/redux-toolkit';
import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import UserDetailsCard from './user-details-card';

const userDetailsCardProps = {
  user: {
    id: '1',
    username: 'johndoe',
    firstName: 'John',
    lastName: 'Doe',
    email: 'jd@gmil.com',
    password: 'johndoe',
    createdAt: '2021-10-07T11:52:22.000Z',
    updatedAt: '2021-10-07T11:52:22.000Z',
    imgUrl: 'https://picsum.photos/200/300',
  },
  showBlogs: true,
  setShowBlogs: vi.fn(),
};

describe('UserDetailsCard', () => {
  const useAppSelectorSpy = vi.spyOn(rtkQuery, 'useAppSelector');
  const useUserSpy = vi.spyOn(rtkQuery, 'useUser');

  it('should render successfully', () => {
    useAppSelectorSpy.mockReturnValue({
      authUser: 'johndoe',
    });
    useUserSpy.mockReturnValue({
      getUserByUsername: vi.fn(),
      deleteUserByUsername: vi.fn(),
      updatePasswordByUsername: vi.fn(),
      updatePasswordError: { message: '' },
      updatePasswordLoading: false,
    });

    render(<UserDetailsCard {...userDetailsCardProps} />, {
      wrapper: BrowserRouter,
    });
    expect(screen.getAllByText(/John/i)).toBeTruthy();
    expect(screen.getAllByText(/Doe/i)).toBeTruthy();
    expect(screen.getByText(/Hide Blogs/i)).toBeDefined();
  });
});
