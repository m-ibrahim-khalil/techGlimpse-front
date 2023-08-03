import { store } from '@tech-glimpse-front/redux-toolkit';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import NavbarProfile from './navbar-profile';

describe('Navbar with Profile', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Provider store={store}>
        <BrowserRouter>
          <NavbarProfile />
        </BrowserRouter>
      </Provider>
    );
    expect(baseElement).toBeTruthy();
  });
});
