import { render } from '@testing-library/react';
import * as formInput from '../../form-components/form-input-text/form-input-text';

import { BrowserRouter } from 'react-router-dom';
import SigninForm, { SignInFormProps } from './signin-form';

const props: SignInFormProps = {
  onSubmit: vi.fn(),
};

describe('SigninForm', () => {
  const FormInputTextSpy = vi.spyOn(formInput, 'FormInputText');

  it('should render successfully', () => {
    FormInputTextSpy.mockReturnValue(<div>FormInputText</div>);
    const { baseElement, findAllByText } = render(<SigninForm {...props} />, {
      wrapper: BrowserRouter,
    });
    expect(baseElement).toBeTruthy();
    expect(findAllByText(/FormInputText/i)).toBeTruthy();
  });
});
