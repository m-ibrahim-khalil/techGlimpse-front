import { formatDistanceToNow } from 'date-fns';
export interface TimeAgoProps {
  timestamp: string | undefined;
}

export function TimeAgo({ timestamp }: TimeAgoProps) {
  let timeAgo = '';
  if (timestamp) {
    const timePeriod = formatDistanceToNow(new Date(timestamp));
    timeAgo = `${timePeriod} ago`;
    console.log('timeAgo', timeAgo);
  }
  return (
    <span className="block text-indigo-600 text-sm" title={timestamp}>
      &nbsp; <i>{timeAgo}</i>
    </span>
  );
}

export default TimeAgo;
