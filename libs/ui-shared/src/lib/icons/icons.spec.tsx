import { render } from '@testing-library/react';

import { EyeIcons } from './icons';

describe('Icons', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EyeIcons />);
    expect(baseElement).toBeTruthy();
  });
});
