import { render } from '@testing-library/react';

import FormInputText from './form-input-text';

describe('FormInputText', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FormInputText />);
    expect(baseElement).toBeTruthy();
  });
});
