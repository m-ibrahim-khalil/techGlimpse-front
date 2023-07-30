import { usePagination } from '@tech-glimpse-front/redux-toolkit';
import { motion } from 'framer-motion';
import ReactPaginate from 'react-paginate';
import Dropdown from '../dropdown/dropdown';

export interface PaginationButtonsProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  size: number;
}

export function PaginationButtons({
  currentPage,
  totalPages,
  totalItems,
  size,
}: PaginationButtonsProps) {
  const { handleChangePage, handleChangeSize } = usePagination();
  const paginationVariants = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
        duration: 2,
      },
    },
  };

  const showNextButton = currentPage !== totalPages;
  const showPrevButton = currentPage !== 0;
  return (
    <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:flex sm:flex-1 sm:items-center sm:justify-between">
      <div>
        <p className="text-sm text-gray-700">
          Showing
          <span className="font-medium mx-1.5">
            {size * (currentPage - 1) + 1}
          </span>
          to
          <span className="font-medium mx-1.5">
            {size * (currentPage - 1) + size > totalItems
              ? totalItems
              : size * (currentPage - 1) + size}
          </span>
          of
          <span className="font-medium mx-1.5">{totalItems}</span>
          results
        </p>
      </div>
      <motion.div
        variants={paginationVariants}
        initial="hidden"
        animate="visible"
      >
        <ReactPaginate
          breakLabel={
            <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
              ...
            </span>
          }
          nextLabel={
            showNextButton ? (
              <span className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            ) : null
          }
          onPageChange={(page) => handleChangePage(page.selected + 1)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          pageCount={totalPages}
          previousLabel={
            showPrevButton ? (
              <span className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            ) : null
          }
          containerClassName="flex items-center justify-center mt-8 mb-4"
          pageClassName="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          activeClassName="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        />
      </motion.div>
      <Dropdown
        options={[6, 9, 12, 15, 18, 21]}
        onChange={(e) => handleChangeSize(+e.target.value)}
      />
    </div>
  );
}

export default PaginationButtons;
