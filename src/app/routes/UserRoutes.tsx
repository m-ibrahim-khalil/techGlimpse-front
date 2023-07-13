import { Route, Routes } from 'react-router-dom';
import {
  BlogsByAuthor,
  NotFoundPage,
  UpdatePassword,
  UserView,
  UsersLayout,
  WithPrivateRoute,
} from '../includes/components';

export default function UserRoutes() {
  return (
    <Routes>
      <Route element={<UsersLayout />}>
        <Route path=":username" element={<UserView />}>
          <Route path="blogs/:authorId" element={<BlogsByAuthor />} />
        </Route>
        <Route
          path=":username/updatePassword"
          element={
            <WithPrivateRoute>
              <UpdatePassword />
            </WithPrivateRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
