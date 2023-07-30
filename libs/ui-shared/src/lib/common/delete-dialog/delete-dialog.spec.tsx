import { render } from '@testing-library/react';

import DeleteDialog from './delete-dialog';

describe('DeleteDialog', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DeleteDialog />);
    expect(baseElement).toBeTruthy();
  });
});
