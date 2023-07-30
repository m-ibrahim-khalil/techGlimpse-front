import { useAppSelector } from '@tech-glimpse-front/redux-toolkit';
import Alert from '../common/alert/alert';

export function AlertDescription() {
  const { open, type, message } = useAppSelector((state) => state.alert);
  return <div>{open && <Alert message={message} type={type} />}</div>;
}

export default AlertDescription;
