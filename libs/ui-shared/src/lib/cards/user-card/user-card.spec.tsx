import { render, screen } from '@testing-library/react';

import { User } from '@tech-glimpse-front/types';
import { BrowserRouter } from 'react-router-dom';
import UserCard from './user-card';

const user: User = {
  id: '1',
  username: 'johndoe',
  firstName: 'John',
  lastName: 'Doe',
  email: 'jd@gmail.com',
  password: '123456',
  createdAt: '2021-10-07T11:52:22.000Z',
  updatedAt: '2021-10-07T11:52:22.000Z',
  imgUrl: 'https://picsum.photos/200/300',
};

describe('UserCard', () => {
  it('should render successfully', () => {
    //Arrange
    //Act
    render(<UserCard user={user} />, { wrapper: BrowserRouter });
    //Assert
    expect(screen.getByRole('img')).toBeDefined();
    expect(screen.getByRole('link')).toBeDefined();
    expect(screen.getByText(/John/i)).toBeDefined();
  });
});
