import { RootState, useAppSelector } from '@tech-glimpse-front/redux-toolkit';
import Alert from '../common/alert/alert';

export function AlertDescription() {
  const { open, type, message } = useAppSelector(
    (state: RootState) => state.alert
  );
  console.log('AlertDescription', open, type, message);
  return <div>{open && <Alert message={message} type={type} />}</div>;
}

export default AlertDescription;
