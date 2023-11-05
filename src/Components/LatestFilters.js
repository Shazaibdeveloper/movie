import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../Redux/FilterSlice";

const LatestFilters = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.movies.filter);

  const handleFilterChange = (newFilter) => {
    dispatch(setFilter(newFilter));
  };

  return (
    <>
      <div className="heading filters">
        <div
          className="btn-group btn-group-toggle btn-colors"
          data-toggle="buttons"
        >
          <button
            onClick={() => handleFilterChange("movies")}
            className={
              filter === "movies" ? "btn btn-danger active" : "btn btn-danger"
            }
          >
            Movies
          </button>
          <button
            onClick={() => handleFilterChange("all")}
            className={
              filter === "all" ? "btn btn-danger active" : "btn btn-danger"
            }
          >
            All
          </button>
          <button
            onClick={() => handleFilterChange("now_playing")}
            className={
              filter === "now_playing"
                ? "btn btn-danger active"
                : "btn btn-danger"
            }
          >
            Now Playing
          </button>
          <button
            onClick={() => handleFilterChange("top_rated")}
            className={
              filter === "top_rated"
                ? "btn btn-danger active"
                : "btn btn-danger"
            }
          >
            Top Rated
          </button>
        </div>
      </div>{" "}
    </>
  );
};

export default LatestFilters;
