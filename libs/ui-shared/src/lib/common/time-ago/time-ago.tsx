import { formatDistanceToNow, parseISO } from 'date-fns';
export interface TimeAgoProps {
  timestamp: string | undefined;
}

export function TimeAgo({ timestamp }: TimeAgoProps) {
  let timeAgo = '';
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }
  return (
    <span className="block text-indigo-600 text-sm" title={timestamp}>
      &nbsp; <i>{timeAgo}</i>
    </span>
  );
}

export default TimeAgo;
