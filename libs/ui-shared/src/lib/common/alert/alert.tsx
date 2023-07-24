import { useAlert } from '@tech-glimpse-front/redux-toolkit';
import {
  ALERT_ICON_MAPS,
  ALERT_TYPE_MAPS,
  Variant,
} from '@tech-glimpse-front/types';
import { twMerge } from 'tailwind-merge';
import { CloseIcon, InfoIcon } from '../../icons/icons';

export interface AlertProps {
  message: string;
  type: Variant;
}

const baseClass = 'flex items-center p-4 mb-4 rounded-lg dark:bg-gray-800 ';

export function Alert({ message, type }: AlertProps) {
  const { closeAlert } = useAlert();
  return (
    <div id="alert-1" className={twMerge(baseClass, ALERT_TYPE_MAPS[type])}>
      <InfoIcon />
      <span className="sr-only">Info</span>
      <div className="ml-3 text-sm font-medium">{message}</div>
      <button
        type="button"
        className={twMerge(
          'ml-auto -mx-1.5 -my-1.5  rounded-lg focus:ring-2  p-1.5  inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:hover:bg-gray-700',
          ALERT_ICON_MAPS[type]
        )}
        onClick={() => closeAlert()}
      >
        <span className="sr-only">Close</span>
        <CloseIcon />
      </button>
    </div>
  );
}

export default Alert;
