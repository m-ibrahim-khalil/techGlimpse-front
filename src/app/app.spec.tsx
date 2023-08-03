import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './app';

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
});
