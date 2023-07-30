import { render } from '@testing-library/react';

import UpdateProfileForm from './update-profile-form';

describe('UpdateProfileForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UpdateProfileForm />);
    expect(baseElement).toBeTruthy();
  });
});
