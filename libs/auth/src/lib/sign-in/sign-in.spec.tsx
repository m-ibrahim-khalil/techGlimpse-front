import { render } from '@testing-library/react';

import SignIn from './sign-in';

import * as rtkQuery from '@tech-glimpse-front/redux-toolkit';
import * as ui from '@tech-glimpse-front/ui-shared';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

describe('SignIn', () => {
  const useAppSelectorSpy = vi.spyOn(rtkQuery, 'useAppSelector');
  const userLoginSpy = vi.spyOn(rtkQuery, 'userLogin');
  const signInFormSpy = vi.spyOn(ui, 'SigninForm');

  it('should render successfully', () => {
    useAppSelectorSpy.mockReturnValue({
      loading: false,
      authUser: 'ibrahim',
      loginError: { message: '' },
    });
    userLoginSpy.mockReturnValue(vi.fn());
    signInFormSpy.mockReturnValue(<div>SigninForm</div>);

    const { baseElement } = render(
      <Provider store={rtkQuery.store}>
        <SignIn />
      </Provider>,
      { wrapper: BrowserRouter }
    );
    expect(baseElement).toBeTruthy();
  });
});
