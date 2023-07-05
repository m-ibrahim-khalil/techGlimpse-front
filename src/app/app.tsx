import { SignIn, SignUp } from '@tech-glimpse-front/auth';
import { HomePage, NotFoundPage } from '@tech-glimpse-front/pages';
import { BlogRoutes, UserRoutes } from '@tech-glimpse-front/routes';
import { Navbar } from '@tech-glimpse-front/ui';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/blogs/*" element={<BlogRoutes />} />
        <Route path="/users/*" element={<UserRoutes />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
