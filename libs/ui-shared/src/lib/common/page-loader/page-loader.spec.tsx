import { render } from '@testing-library/react';

import PageLoader from './page-loader';

describe('PageLoader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PageLoader />);
    expect(baseElement).toBeTruthy();
  });
});
