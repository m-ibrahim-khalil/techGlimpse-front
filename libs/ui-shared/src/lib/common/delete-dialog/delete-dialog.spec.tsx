import * as rtkQuery from '@tech-glimpse-front/redux-toolkit';
import { render, screen } from '@testing-library/react';

import DeleteDialog from './delete-dialog';

describe('DeleteDialog', () => {
  const useAppSelectorSpy = vi.spyOn(rtkQuery, 'useAppSelector');
  const useDialogSpy = vi.spyOn(rtkQuery, 'useDialog');
  it('should render successfully', () => {
    useAppSelectorSpy.mockReturnValue({
      open: true,
      onConfirm: vi.fn(),
    });
    useDialogSpy.mockReturnValue({
      closeDialog: vi.fn(),
      openDialog: vi.fn(),
    });

    render(<DeleteDialog />);
    expect(screen.getByText(/Are you sure/i)).toBeTruthy();
    expect(screen.getByText(/cancel/i)).toBeTruthy();
  });
});
