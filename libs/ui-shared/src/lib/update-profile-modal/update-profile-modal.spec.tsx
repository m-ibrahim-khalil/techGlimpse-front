import * as rtkQuery from '@tech-glimpse-front/redux-toolkit';
import { render } from '@testing-library/react';
import * as ui from '../form/update-profile-form/update-profile-form';

import UpdateProfileModal, {
  UpdateProfileModalProps,
} from './update-profile-modal';

const props: UpdateProfileModalProps = {
  setShowModal: vi.fn(),
  user: {
    id: '1',
    email: '',
    username: '',
    password: '',
    createdAt: '',
    updatedAt: '',
  },
};

describe('UpdateProfileModal', () => {
  const useUserSpy = vi.spyOn(rtkQuery, 'useUser');
  const UpdateProfileFormSpy = vi.spyOn(ui, 'UpdateProfileForm');
  it('should render successfully', () => {
    useUserSpy.mockReturnValue({
      updatePasswordByUsername: vi.fn(),
      updatePasswordLoading: false,
      updatePasswordError: { message: '' },
      getUserByUsername: vi.fn(),
      deleteUserByUsername: vi.fn(),
      updateProfileByUsername: vi.fn(),
      updateProfileLoading: false,
    });
    UpdateProfileFormSpy.mockReturnValue(<div>UpdateProfileForm</div>);
    const { baseElement } = render(<UpdateProfileModal {...props} />);
    expect(baseElement).toBeTruthy();
  });
});
