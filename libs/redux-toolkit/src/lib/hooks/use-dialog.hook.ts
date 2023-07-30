import { useCallback } from 'react';
import { close, open } from '../reducers/dialog-slice.reducer';
import { useAppDispatch } from './use-app-dispatch.hook';

export function useDialog() {
  const dispatch = useAppDispatch();

  const openDialog = useCallback(
    (onConfirm: () => void) => {
      dispatch(open(onConfirm));
    },
    [dispatch]
  );

  const closeDialog = useCallback(() => {
    dispatch(close());
  }, [dispatch]);

  return { openDialog, closeDialog };
}

export default useDialog;
