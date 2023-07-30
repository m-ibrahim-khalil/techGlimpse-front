import { render } from '@testing-library/react';

import UpdateProfileModal from './update-profile-modal';

describe('UpdateProfileModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UpdateProfileModal />);
    expect(baseElement).toBeTruthy();
  });
});
