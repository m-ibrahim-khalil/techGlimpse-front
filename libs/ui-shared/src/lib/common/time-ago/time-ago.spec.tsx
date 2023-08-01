import { render } from '@testing-library/react';

import TimeAgo from './time-ago';

describe('TimeAgo', () => {
  it('should render successfully', () => {
    const { baseElement, findAllByText } = render(
      <TimeAgo timestamp="01/07/2023" />
    );
    expect(baseElement).toBeTruthy();
    expect(findAllByText(/7 months ago/i)).toBeTruthy();
  });
});
