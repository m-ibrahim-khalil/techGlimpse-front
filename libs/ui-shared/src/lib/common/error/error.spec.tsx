import { render } from '@testing-library/react';

import Error from './error';

describe('Error', () => {
  it('should render Error successfully', () => {
    const { baseElement, findByText } = render(
      <Error>
        {' '}
        <p>Error</p>{' '}
      </Error>
    );
    expect(baseElement).toBeTruthy();
    expect(findByText(/Error/i)).toBeTruthy();
  });
});
