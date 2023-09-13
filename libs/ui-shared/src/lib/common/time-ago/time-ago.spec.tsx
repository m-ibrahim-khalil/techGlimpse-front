import { render } from '@testing-library/react';
import { formatDistanceToNow } from 'date-fns';
import TimeAgo from './time-ago';

describe('TimeAgo', () => {
  it('should render successfully', async () => {
    const dateTime = '01/07/2023';
    const timePeriod = formatDistanceToNow(new Date(dateTime));
    const expectedTimeAgo = `${timePeriod} ago`;

    const { baseElement, findAllByText } = render(
      <TimeAgo timestamp={dateTime} />
    );

    expect(baseElement).toBeTruthy();
    expect(await findAllByText(expectedTimeAgo)).toBeTruthy();
  });
});
