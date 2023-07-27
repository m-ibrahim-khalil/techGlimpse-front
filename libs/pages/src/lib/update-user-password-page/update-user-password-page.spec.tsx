import { render } from '@testing-library/react';

import UpdateUserPasswordPage from './update-user-password-page';

describe('UpdateUserPasswordPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UpdateUserPasswordPage />);
    expect(baseElement).toBeTruthy();
  });
});
