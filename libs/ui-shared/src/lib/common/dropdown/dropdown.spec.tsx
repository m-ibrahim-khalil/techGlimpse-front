import { render } from '@testing-library/react';

import Dropdown, { DropdownProps } from './dropdown';

const props: DropdownProps = {
  options: [1, 2, 3, 4],
  onChange: vi.fn(),
};

describe('Dropdown', () => {
  it('should render successfully', () => {
    const { baseElement, findAllByRole } = render(<Dropdown {...props} />);
    expect(baseElement).toBeTruthy();
    expect(findAllByRole('select')).toBeTruthy();
    expect(findAllByRole('option')).resolves.toHaveLength(4);
  });
});
