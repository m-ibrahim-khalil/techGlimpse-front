import * as rtkQuery from '@tech-glimpse-front/redux-toolkit';
import { render, screen } from '@testing-library/react';

import { Variant } from '@tech-glimpse-front/types';
import Alert, { AlertProps } from './alert';

const props: AlertProps = {
  message: 'Message',
  type: Variant.PRIMARY,
};

describe('Alert', () => {
  const useAlertSpy = vi.spyOn(rtkQuery, 'useAlert');
  it('should render successfully', () => {
    useAlertSpy.mockReturnValue({
      closeAlert: vi.fn(),
      openAlert: vi.fn(),
    });
    render(<Alert {...props} />);
    expect(screen.findByText(/Message/i)).toBeDefined();
  });
});
