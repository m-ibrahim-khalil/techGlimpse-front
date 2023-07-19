import {
  BlogListPage,
  BlogPage,
  NotFoundPage,
} from '@tech-glimpse-front/pages';
import { BlogEditor } from '@tech-glimpse-front/ui-shared';
import { Route, Routes } from 'react-router-dom';

export default function BlogRoutes() {
  return (
    <Routes>
      <Route index element={<BlogListPage />} />
      <Route path=":blogId" element={<BlogPage />} />
      <Route path="write" element={<BlogEditor />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
