/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Pagination = ({ uavsPerPage, totalUavs, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUavs / uavsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav
      className="pagination is-centered"
      role="navigation"
      aria-label="pagination"
    >
      <ul className="pagination-list">
        {pageNumbers.map(number => {
          if (number === 1) {
            return (
              <li key={number}>
                <a
                  className="pagination-link is-current"
                  onClick={paginate}
                  id={number}
                  aria-label="Goto page 1"
                >
                  {number}
                </a>
              </li>
            );
          } else {
            return (
              <li key={number}>
                <a
                  className="pagination-link"
                  onClick={paginate}
                  id={number}
                  aria-label="Goto page 1"
                >
                  {number}
                </a>
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
