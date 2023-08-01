import { render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import UpdateProfileForm, {
  UpdateProfileFormProps,
} from './update-profile-form';

const props: UpdateProfileFormProps = {
  setShowModal: vi.fn(),
  user: {
    id: '1',
    email: 'ibrahim@gmail.com',
    username: 'ibrahim',
    bio: '',
    password: '1234',
    createdAt: '',
    updatedAt: '',
  },
};

describe('UpdateProfileForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UpdateProfileForm {...props} />, {
      wrapper: BrowserRouter,
    });
    expect(baseElement).toBeTruthy();
  });
});
