import { render } from '@testing-library/react';

import UpdateUserPasswordForm from './update-user-password-form';

describe('UpdateUserPasswordForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UpdateUserPasswordForm />);
    expect(baseElement).toBeTruthy();
  });
});
