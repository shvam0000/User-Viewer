import { useState } from 'react';
import { Pagination } from '../interfaces/pagination';

const usePagination = (
  totalItems: number,
  itemsPerPage: number = 10
): Pagination => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return {
    currentPage,
    itemsPerPage,
    totalItems,
    totalPages,
    handleNextPage,
    handlePrevPage,
    handlePageChange,
  };
};

export default usePagination;
