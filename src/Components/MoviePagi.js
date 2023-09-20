import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../Redux/moviesSlice";

const MoviePagi = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.movies.currentPage);
  const totalPages = useSelector((state) => state.movies.totalPages);

  const [visiblePages, setVisiblePages] = useState([1]); // Initial visible page

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      dispatch(fetchMovies(newPage));
      updateVisiblePages(newPage);
    }
  };

  const updateVisiblePages = (newPage) => {
    // Determine how many pages to show in the pagination control (adjust as needed).
    const pagesToShow = 10;

    // Calculate the start and end pages based on the current page and the number of pages to show.
    const startPage = Math.max(newPage - Math.floor(pagesToShow / 2), 1);
    const endPage = Math.min(startPage + pagesToShow - 1, totalPages);

    // Update the visible pages array.
    const newVisiblePages = [];
    for (let page = startPage; page <= endPage; page++) {
      newVisiblePages.push(page);
    }

    setVisiblePages(newVisiblePages);
  };

  return (
    <>
      <nav aria-label="...">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <a
              className="page-link"
              href="#"
              tabIndex="-1"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </a>
          </li>
          {visiblePages.map((page) => (
            <li
              className={`page-item ${currentPage === page ? "active" : ""}`}
              key={page}
            >
              <a
                className="page-link"
                href="#"
                onClick={() => handlePageChange(page)}
              >
                {page}
              </a>
            </li>
          ))}
          <li
            className={`page-item ${
              currentPage === totalPages ? "disabled" : ""
            }`}
          >
            <a
              className="page-link"
              href="#"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MoviePagi;
