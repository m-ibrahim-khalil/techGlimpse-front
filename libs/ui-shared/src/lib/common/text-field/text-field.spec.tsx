import { render } from '@testing-library/react';

import TextField, { TextFieldProps } from './text-field';

const props: TextFieldProps = {
  onChange: vi.fn(),
  label: 'TextFieldLabel',
  value: 'TextFieldValue',
};

describe('TextField', () => {
  it('should render successfully', async () => {
    const { baseElement, findAllByText } = render(<TextField {...props} />);
    expect(baseElement).toBeTruthy();
    expect(await findAllByText(/TextFieldLabel/i)).toBeTruthy();
  });
});
