import * as rtkQuery from '@tech-glimpse-front/redux-toolkit';
import { render, screen } from '@testing-library/react';
import * as Alert from '../common/alert/alert';
import AlertDescription from './alert-description';

describe('AlertDescription', () => {
  const useAppSelectorSpy = vi.spyOn(rtkQuery, 'useAppSelector');
  const AlertSpy = vi.spyOn(Alert, 'default');

  it('should render successfully', () => {
    // Arrange
    useAppSelectorSpy.mockReturnValue({
      open: true,
      type: 'success',
      message: 'Success',
    });
    AlertSpy.mockReturnValue(<div>Alert</div>);
    // Act
    render(<AlertDescription />);
    // Assert
    expect(AlertSpy).toHaveBeenCalled();
    expect(screen.getByText(/Alert/i)).toBeDefined();
  });
});
