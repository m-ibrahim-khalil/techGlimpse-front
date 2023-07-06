import { render } from '@testing-library/react';

import FormAction from './form-action';

describe('FormAction', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FormAction />);
    expect(baseElement).toBeTruthy();
  });
});
