import { render, screen } from '@testing-library/react';

import { Blog } from '@tech-glimpse-front/types';
import { BrowserRouter } from 'react-router-dom';
import BlogCard from './blog-card';

const blog: Blog = {
  id: '1',
  title: 'Blog 1',
  description: 'Body 1',
  authorId: '1',
  createdAt: '2021-10-07T11:52:22.000Z',
  updatedAt: '2021-10-07T11:52:22.000Z',
  imgUrl: 'https://picsum.photos/200/300',
};

describe('BlogCard', () => {
  it('should render successfully', () => {
    // Arrange
    // Act
    render(<BlogCard {...blog} />, { wrapper: BrowserRouter });
    // Assert
    expect(screen.getByText(/Blog 1/i)).toBeDefined();
    expect(screen.getByText(/Body 1/i)).toBeDefined();
  });
});
