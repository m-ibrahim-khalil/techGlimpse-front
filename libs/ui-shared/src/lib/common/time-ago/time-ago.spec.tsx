import { render } from '@testing-library/react';

import TimeAgo from './time-ago';

describe('TimeAgo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TimeAgo />);
    expect(baseElement).toBeTruthy();
  });
});
