import { useCallback } from 'react';
import { setPage, setSize } from '../reducers/pagination-slice.reducer';
import { useAppDispatch } from './use-app-dispatch.hook';

export function usePagination() {
  const dispatch = useAppDispatch();

  const handleChangePage = useCallback(
    (page: number) => {
      dispatch(setPage(page));
    },
    [dispatch]
  );

  const handleChangeSize = useCallback(
    (page: number) => {
      dispatch(setSize(page));
    },
    [dispatch]
  );

  return { handleChangePage, handleChangeSize };
}

export default usePagination;
