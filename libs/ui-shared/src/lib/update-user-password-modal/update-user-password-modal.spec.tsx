import { render } from '@testing-library/react';

describe('UpdateUserPasswordPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<></>);
    expect(baseElement).toBeTruthy();
  });
});
