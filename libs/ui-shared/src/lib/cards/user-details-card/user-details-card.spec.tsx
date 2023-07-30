import { render } from '@testing-library/react';

import UserDetailsCard from './user-details-card';

describe('UserDetailsCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UserDetailsCard />);
    expect(baseElement).toBeTruthy();
  });
});
