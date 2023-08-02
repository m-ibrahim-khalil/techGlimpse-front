import { render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import UpdateUserPasswordForm, {
  UpdateUserPasswordFormProps,
} from './update-user-password-form';

const props: UpdateUserPasswordFormProps = {
  onSubmit: vi.fn(),
  setShowModal: vi.fn(),
};

describe('UpdateUserPasswordForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UpdateUserPasswordForm {...props} />, {
      wrapper: BrowserRouter,
    });
    expect(baseElement).toBeTruthy();
  });
});
