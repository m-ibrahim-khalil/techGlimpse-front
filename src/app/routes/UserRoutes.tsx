import { NotFoundPage, UserProfilePage } from '@tech-glimpse-front/pages';
import { Route, Routes } from 'react-router-dom';

export default function UserRoutes() {
  return (
    <Routes>
      <Route path=":username" element={<UserProfilePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
