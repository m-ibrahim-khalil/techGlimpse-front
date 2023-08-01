import { render } from '@testing-library/react';

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
  it('should render successfully', () => {
    const { baseElement } = render(<UpdateProfileModal {...props} />);
    expect(baseElement).toBeTruthy();
  });
});
