import { SignIn, SignUp } from '@tech-glimpse-front/auth';
import {
  About,
  ContactPage,
  HomePage,
  NotFoundPage,
} from '@tech-glimpse-front/pages';
import { store } from '@tech-glimpse-front/redux-toolkit';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import App from './app';
import { BlogRoutes, UserRoutes } from './routes';

describe('App default state', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title of home page', () => {
    const { getByText } = render(<App />);
    expect(
      getByText(/Share Your Stories and Ideas on Our Blog/gi)
    ).toBeTruthy();
  });

  it('should render navbar with logo and guest user', () => {
    const { getByText, getAllByText } = render(<App />);
    expect(getAllByText(/TechGlimpse/i)).toBeTruthy();
    expect(getByText(/Home/gi)).toBeTruthy();
    expect(getByText(/Blogs/gi)).toBeTruthy();
    expect(getByText(/Guest User/gi)).toBeTruthy();
  });

  it('should render footer with links', () => {
    const { getByText } = render(<App />);
    expect(getByText(/About/gi)).toBeTruthy();
    expect(getByText(/Privacy Policy/gi)).toBeTruthy();
    expect(getByText(/Contact/gi)).toBeTruthy();
  });
});

describe('App Routing test', () => {
  it('should render blogs routes', async () => {
    render(<App />);
    const user = userEvent.setup();
    await user.click(screen.getByText('Blogs'));
    expect(screen.getByText(/Latest blog posts/gi)).toBeTruthy();
  });

  it('should render about page', async () => {
    render(<App />);
    const user = userEvent.setup();
    await user.click(screen.getByText('About'));
    expect(screen.getByText(/Welcome to TechGlimpse/gi)).toBeTruthy();
  });

  it('should render contact page', async () => {
    render(<App />);
    const user = userEvent.setup();
    await user.click(screen.getByText('Contact'));
    expect(screen.getByText(/Get in touch/gi)).toBeTruthy();
  });

  it('should render Not Found page for a bad route', async () => {
    const badRoute = '/bad-route';
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[badRoute]}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/contact-page" element={<ContactPage />} />
            <Route path="/blogs/*" element={<BlogRoutes />} />
            <Route path="/users/*" element={<UserRoutes />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText(/Page not found/gi)).toBeTruthy();
  });
});
