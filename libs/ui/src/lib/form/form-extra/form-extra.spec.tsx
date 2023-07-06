import { render } from '@testing-library/react';

import FormExtra from './form-extra';

describe('FormExtra', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FormExtra />);
    expect(baseElement).toBeTruthy();
  });
});
