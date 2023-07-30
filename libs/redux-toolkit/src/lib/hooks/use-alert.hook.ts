import { Variant } from '@tech-glimpse-front/types';
import { useCallback } from 'react';
import { close, open } from '../reducers/alert-slice.reducer';
import { useAppDispatch } from './use-app-dispatch.hook';

export function useAlert() {
  const dispatch = useAppDispatch();

  const openAlert = useCallback(
    (type: Variant, message: string) => {
      dispatch(
        open({
          type,
          message,
          open: true,
        })
      );
    },
    [dispatch]
  );

  const closeAlert = useCallback(() => {
    dispatch(close());
  }, [dispatch]);

  return { openAlert, closeAlert };
}

export default useAlert;
