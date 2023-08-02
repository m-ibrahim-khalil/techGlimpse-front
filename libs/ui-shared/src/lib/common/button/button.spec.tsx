import { render, screen } from '@testing-library/react';

import { Size, Variant } from '@tech-glimpse-front/types';
import Button, { ButtonProps } from './button';

const props: ButtonProps = {
  size: Size.PRIMARY,
  variant: Variant.PRIMARY,
  children: 'Button',
};

describe('Button', () => {
  it('should render successfully', () => {
    render(<Button {...props} />);
    expect(screen.getByText(/Button/i)).toBeDefined();
  });
});
