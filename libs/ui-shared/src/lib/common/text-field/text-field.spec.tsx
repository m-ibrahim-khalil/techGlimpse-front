import { render } from '@testing-library/react';

import TextField, { TextFieldProps } from './text-field';

const props: TextFieldProps = {
  onChange: vi.fn(),
  label: 'TextFieldLabel',
  value: 'TextFieldValue',
};

describe('TextField', () => {
  it('should render successfully', () => {
    const { baseElement, findAllByLabelText, findAllByText } = render(
      <TextField {...props} />
    );
    expect(baseElement).toBeTruthy();
    expect(findAllByLabelText(/TextFieldLabel/i)).toBeTruthy();
    expect(findAllByText(/TextFieldValue/i)).toBeTruthy();
  });
});
