import * as rtkQuery from '@tech-glimpse-front/redux-toolkit';
import * as ui from '@tech-glimpse-front/ui-shared';

import { render } from '@testing-library/react';

import UpdateUserPasswordModal, {
  UpdateUserPasswordModalProps,
} from './update-user-password-modal';

const props: UpdateUserPasswordModalProps = {
  setShowModal: vi.fn(),
};

describe('UpdateUserPasswordModal', () => {
  const useAppSelectorSpy = vi.spyOn(rtkQuery, 'useAppSelector');
  const useUserSpy = vi.spyOn(rtkQuery, 'useUser');
  const UpdateUserPasswordFormSpy = vi.spyOn(ui, 'UpdateUserPasswordForm');

  it('should render successfully', () => {
    useAppSelectorSpy.mockReturnValue({ authUser: 'ibrahim' });
    useUserSpy.mockReturnValue({
      updatePasswordByUsername: vi.fn(),
      updatePasswordLoading: false,
      updatePasswordError: { message: '' },
      getUserByUsername: vi.fn(),
      deleteUserByUsername: vi.fn(),
    });
    UpdateUserPasswordFormSpy.mockReturnValue(
      <div>UpdateUserPasswordForm</div>
    );

    const { baseElement } = render(<UpdateUserPasswordModal {...props} />);
    expect(baseElement).toBeTruthy();
  });
});
