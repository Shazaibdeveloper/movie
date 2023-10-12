import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../Redux/moviesSlice";

const MoviePagi = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.movie.currentPage);
  const totalPages = useSelector((state) => state.movie.totalPages);

  const [visiblePages, setVisiblePages] = useState([1]); // Initial visible page

  // Use useEffect to update the visible pages when currentPage changes
  useEffect(() => {
    updateVisiblePages(currentPage);
  }, [currentPage, totalPages]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      dispatch(fetchMovies(newPage));
    }
  };

  const updateVisiblePages = (newPage) => {
    // Determine how many pages to show in the pagination control (adjust as needed).
    const pagesToShow = 10;

    // Calculate the start and end pages based on the current page and the number of pages to show.
    let startPage = Math.max(newPage - Math.floor(pagesToShow / 2), 1);
    const endPage = Math.min(startPage + pagesToShow - 1, totalPages);

    // Ensure that we have at least 10 pages in the range if available.
    if (endPage - startPage + 1 < pagesToShow) {
      startPage = Math.max(endPage - pagesToShow + 1, 1);
    }

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
              onClick={() => {
                const newPage = currentPage - 1;
                handlePageChange(newPage);
                updateVisiblePages(newPage);
              }}
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
                onClick={() => {
                  handlePageChange(page);
                  updateVisiblePages(page);
                }}
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
              onClick={() => {
                const newPage = currentPage + 1;
                handlePageChange(newPage);
                updateVisiblePages(newPage);
              }}
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
