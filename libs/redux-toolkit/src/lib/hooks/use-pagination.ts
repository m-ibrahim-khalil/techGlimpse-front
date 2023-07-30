import { useCallback } from 'react';
import { setPage, setSize } from '../reducers/pagination-slice.reducer';
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

  const handleChangeSize = useCallback((size: number) => {
    console.log('dispach to change size', size);
    dispatch(setSize(size));
  }, []);

  return { handleChangePage, handleChangeSize };
}

export default usePagination;
