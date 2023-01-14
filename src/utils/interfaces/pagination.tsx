export interface Pagination {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
  handleNextPage: () => void;
  handlePrevPage: () => void;
  handlePageChange: (newPage: number) => void;
}
