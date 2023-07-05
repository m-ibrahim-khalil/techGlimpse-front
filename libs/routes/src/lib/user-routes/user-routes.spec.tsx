import { render } from '@testing-library/react';

import UserRoutes from './user-routes';

describe('UserRoutes', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UserRoutes />);
    expect(baseElement).toBeTruthy();
  });
});
