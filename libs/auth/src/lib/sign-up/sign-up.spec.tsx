import * as rtkQuery from '@tech-glimpse-front/redux-toolkit';
import * as ui from '@tech-glimpse-front/ui-shared';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import SignUp from './sign-up';

describe('SignUp', () => {
  const useAppSelectorSpy = vi.spyOn(rtkQuery, 'useAppSelector');
  const registerUserSpy = vi.spyOn(rtkQuery, 'registerUser');
  const signUpFormSpy = vi.spyOn(ui, 'SignUpForm');

  it('should render successfully', () => {
    useAppSelectorSpy.mockReturnValue({
      loading: false,
      authUser: 'ibrahim',
      loginError: { message: '' },
    });
    registerUserSpy.mockReturnValue(vi.fn());
    signUpFormSpy.mockReturnValue(<div>SignUpForm</div>);

    const { baseElement } = render(
      <Provider store={rtkQuery.store}>
        <SignUp />
      </Provider>,
      { wrapper: BrowserRouter }
    );
    expect(baseElement).toBeTruthy();
  });
});
