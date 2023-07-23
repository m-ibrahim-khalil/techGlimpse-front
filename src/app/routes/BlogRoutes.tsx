import {
  BlogCreateUpdatePage,
  BlogListPage,
  BlogPage,
  NotFoundPage,
} from '@tech-glimpse-front/pages';
import { Route, Routes } from 'react-router-dom';

export default function BlogRoutes() {
  return (
    <Routes>
      <Route index element={<BlogListPage />} />
      <Route path=":blogId" element={<BlogPage />} />
      <Route path="write" element={<BlogCreateUpdatePage />} />
      <Route
        path=":blogId/edit"
        element={<BlogCreateUpdatePage isEditMode={true} />}
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
