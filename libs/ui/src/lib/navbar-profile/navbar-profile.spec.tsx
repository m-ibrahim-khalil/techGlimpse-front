import { render } from '@testing-library/react';

import NavbarProfile from './navbar-profile';

describe('NavbarProfile', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavbarProfile />);
    expect(baseElement).toBeTruthy();
  });
});
