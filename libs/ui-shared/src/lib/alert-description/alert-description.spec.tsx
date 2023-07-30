import { render } from '@testing-library/react';

import AlertDescription from './alert-description';

describe('AlertDescription', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AlertDescription />);
    expect(baseElement).toBeTruthy();
  });
});
