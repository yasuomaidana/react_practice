import React from 'react'

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {   const handlePageChange = (page: number) => () => {
    onPageChange(page);
  };

  return (
    <div>
      <nav>
        <button onClick={handlePageChange(currentPage - 1)} disabled={currentPage <= 1}>
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index + 1} onClick={handlePageChange(index + 1)}>
            {index + 1}
          </button>
        ))}
        <button onClick={handlePageChange(currentPage + 1)} disabled={currentPage >= totalPages}>
          Next
        </button>
      </nav>
    </div>
  );   
};

export default Pagination;