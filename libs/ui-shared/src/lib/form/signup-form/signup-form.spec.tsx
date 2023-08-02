import { render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import SignupForm, { SignUpFormProps } from './signup-form';

const props: SignUpFormProps = {
  onSubmit: vi.fn(),
  error: { message: '' },
};

describe('SignupForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SignupForm {...props} />, {
      wrapper: BrowserRouter,
    });
    expect(baseElement).toBeTruthy();
  });
});
