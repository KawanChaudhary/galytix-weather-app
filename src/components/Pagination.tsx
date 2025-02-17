import React from "react";

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

const PaginationComponent: React.FC<PaginationProps> = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const getVisiblePages = () => {
    let pages = [];

    if (totalPages <= 5) {
      pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
      if (currentPage <= 3) {
        pages = [1, 2, 3, "...", totalPages];
      } else if (currentPage >= totalPages - 2) {
        pages = [1, "...", totalPages - 2, totalPages - 1, totalPages];
      } else {
        pages = [
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages,
        ];
      }
    }
    return pages;
  };

  return (
    <div className="d-flex justify-content-center mt-3">
      <ul className="pagination">
        {currentPage > 1 && (
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Prev
            </button>
          </li>
        )}
        
        {getVisiblePages().map((page, index) => (
          <li
            key={index}
            className={`page-item ${page === currentPage ? "active" : ""}`}
          >
            {typeof page === "number" ? (
              <button className="page-link" onClick={() => handlePageChange(page)}>
                {page}
              </button>
            ) : (
              <span className="page-link disabled">{page}</span>
            )}
          </li>
        ))}

        {currentPage < totalPages && (
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default PaginationComponent;
