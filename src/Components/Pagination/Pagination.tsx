import React from "react";
import style from "./Pagination.module.css";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  visitedPages: number[];
  onPageChange: (page: number) => void;
  onFirstPage: () => void;
  onLastPage: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  visitedPages,
  onPageChange,
  onFirstPage,
  onLastPage,
}) => {
  type PageType = number | '...';

  const getVisiblePages = (): PageType[] => {
    const pages: PageType[] = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      const start = Math.max(currentPage - 1, 2);
      const end = Math.min(currentPage + 1, totalPages - 1);

      if (start > 2) {
        pages.push('...');
      }
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      if (end < totalPages - 1) {
        pages.push('...');
      }

      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className={style.pagination}>
      <p
        onClick={onFirstPage}
        className={`${currentPage === 1 ? style.disabled : ""}`}
        style={{
          color: currentPage === 1 ? "gray" : "black",
          cursor: currentPage === 1 ? "default" : "pointer",
        }}
      >
        First
      </p>
      {getVisiblePages().map((page, index) => {
        if (page === '...') {
          return (
            <span key={index} className={style.ellipsis}>
              {page}
            </span>
          );
        }
        return (
          <a
            key={index}
            onClick={() => onPageChange(page as number)}
            className={
              page === currentPage
                ? style.active
                : visitedPages.includes(page as number)
                ? style.visited
                : ""
            }
            style={{
              color:
                page === currentPage
                  ? "blue"
                  : visitedPages.includes(page as number)
                  ? "gray"
                  : "black",
              cursor: page === currentPage ? "default" : "pointer",
            }}
          >
            {page}
          </a>
        );
      })}
      <p
        onClick={onLastPage}
        className={`${currentPage === totalPages ? style.disabled : ""}`}
        style={{
          color: currentPage === totalPages ? "gray" : "black",
          cursor: currentPage === totalPages ? "default" : "pointer",
        }}
      >
        Last
      </p>
    </div>
  );
};

export default Pagination;
