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
      {[...Array(totalPages)].map((_, index) => {
        const pageNumber = index + 1;
        return (
          <a
            key={index}
            onClick={() => onPageChange(pageNumber)}
            className={
              pageNumber === currentPage
                ? style.active
                : visitedPages.includes(pageNumber)
                ? style.visited
                : ""
            }
            style={{
              color:
                pageNumber === currentPage
                  ? "blue"
                  : visitedPages.includes(pageNumber)
                  ? "gray"
                  : "black",
              cursor: pageNumber === currentPage ? "default" : "pointer",
            }}
          >
            {pageNumber}
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
