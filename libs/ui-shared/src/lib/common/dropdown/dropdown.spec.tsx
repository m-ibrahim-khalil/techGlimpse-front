import { render, screen } from '@testing-library/react';

import Dropdown, { DropdownProps } from './dropdown';

const props: DropdownProps = {
  options: [1, 2, 3, 4],
  onChange: vi.fn(),
};

describe('Dropdown', () => {
  it('should render successfully', async () => {
    const { baseElement, findAllByRole } = render(<Dropdown {...props} />);
    expect(baseElement).toBeTruthy();
    expect(screen.getByTestId('dropdown')).toBeTruthy();
    expect(findAllByRole('option')).resolves.toHaveLength(4);
  });
});
