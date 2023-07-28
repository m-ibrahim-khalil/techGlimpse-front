import { useCallback } from 'react';
import { setPage } from '../reducers/pagination-slice.reducer';
import { useAppDispatch } from './use-app-dispatch.hook';

export function usePagination() {
  const dispatch = useAppDispatch();

  const handleChangePage = useCallback(
    (page: number) => {
      dispatch(setPage(page));
      console.log('dispach to change page', page);
    },
    [dispatch]
  );

  return { handleChangePage };
}

export default usePagination;
