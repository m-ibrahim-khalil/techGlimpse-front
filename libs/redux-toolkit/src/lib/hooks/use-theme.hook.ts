import { useCallback } from 'react';
import { setTheme } from '../reducers/theme-slice.reducer';
import { useAppDispatch } from './use-app-dispatch.hook';

export function useTheme() {
  const dispatch = useAppDispatch();

  const handleChangeTheme = useCallback(
    (theme: string) => {
      dispatch(setTheme(theme));
      console.log('dispach to change theme', theme);
    },
    [dispatch]
  );

  return { handleChangeTheme };
}

export default useTheme;
