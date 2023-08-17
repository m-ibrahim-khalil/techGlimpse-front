import { render } from '@testing-library/react';

import FileDropInput from './file-drop-input';

describe('FileDropInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FileDropInput />);
    expect(baseElement).toBeTruthy();
  });
});
