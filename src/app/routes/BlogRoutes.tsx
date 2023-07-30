import {
  BlogCreateUpdatePage,
  BlogListPage,
  BlogPage,
  NotFoundPage,
} from '@tech-glimpse-front/pages';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

export default function BlogRoutes() {
  return (
    <Routes>
      <Route index element={<BlogListPage />} />
      <Route path=":blogId" element={<BlogPage />} />
      <Route
        path="write"
        element={
          <PrivateRoute>
            <BlogCreateUpdatePage />
          </PrivateRoute>
        }
      />
      <Route
        path=":blogId/edit"
        element={
          <PrivateRoute>
            <BlogCreateUpdatePage isEditMode={true} />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
