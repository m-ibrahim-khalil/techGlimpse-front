import { SignIn, SignUp } from '@tech-glimpse-front/auth';
import { ContactPage, HomePage, NotFoundPage } from '@tech-glimpse-front/pages';
import { store } from '@tech-glimpse-front/redux-state/store';
import { Navbar } from '@tech-glimpse-front/ui-shared';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import BlogRoutes from './routes/BlogRoutes';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/contact-page" element={<ContactPage />} />
          <Route path="/blogs/*" element={<BlogRoutes />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
