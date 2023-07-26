import { SignIn, SignUp } from '@tech-glimpse-front/auth';
import { ContactPage, HomePage, NotFoundPage } from '@tech-glimpse-front/pages';
import { store } from '@tech-glimpse-front/redux-toolkit';
import {
  AlertDescription,
  DeleteDialog,
  NavbarProfile,
} from '@tech-glimpse-front/ui-shared';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.min.css';
import { UserRoutes } from './routes';
import BlogRoutes from './routes/BlogRoutes';

function App() {
  return (
    <Provider store={store}>
      <ToastContainer position="bottom-right" newestOnTop />
      <DeleteDialog />
      <Router>
        <NavbarProfile />
        <AlertDescription />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/contact-page" element={<ContactPage />} />
          <Route path="/blogs/*" element={<BlogRoutes />} />
          <Route path="/users/*" element={<UserRoutes />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
