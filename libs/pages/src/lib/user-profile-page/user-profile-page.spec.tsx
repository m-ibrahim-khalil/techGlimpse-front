import { render } from '@testing-library/react';

import UserProfilePage from './user-profile-page';

describe('UserProfilePage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UserProfilePage />);
    expect(baseElement).toBeTruthy();
  });
});
