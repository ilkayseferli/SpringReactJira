import React from 'react';

const PaginationComponent = ({ currentPage, totalPages, onPageChange, onPageSizeChange }) => {
  const pageNumbers = [];
  const maxPageNumbersToShow = 8;

  if (totalPages <= maxPageNumbersToShow) {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  } else {
    const firstPages = [1, 2, 3, 4, 5];
    const lastPages = [totalPages - 2, totalPages - 1, totalPages];

    if (currentPage <= 5) {
      pageNumbers.push(...firstPages, '...', ...lastPages);
    } else if (currentPage >= totalPages - 4) {
      pageNumbers.push(...firstPages, '...', ...lastPages);
    } else {
      pageNumbers.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', ...lastPages);
    }
  }

  return (
    <div className="pagination justify-content-center mt-3">
      <ul className="pagination">
        <li className={currentPage === 1 ? 'page-item disabled' : 'page-item'}>
          <button className="page-link" onClick={() => onPageChange(currentPage - 1)}>Previous</button>
        </li>
        {pageNumbers.map((number, index) => (
          <li key={index} className={number === currentPage ? 'page-item active' : 'page-item'}>
            {number === '...' ? (
              <span className="page-link">...</span>
            ) : (
              <button className="page-link" onClick={() => onPageChange(number)}>{number}</button>
            )}
          </li>
        ))}
        <li className={currentPage === totalPages ? 'page-item disabled' : 'page-item'}>
          <button className="page-link" onClick={() => onPageChange(currentPage + 1)}>Next</button>
        </li>
      </ul>
    </div>
  );
};

export default PaginationComponent;
