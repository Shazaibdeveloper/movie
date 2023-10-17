import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter, setFilter } from "../Redux/TvFilter";

const TvFilterbtn = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.tvSlice.filter);

  const handleFilterChange = (newFilter) => {
    dispatch(setFilter(newFilter));
  };
  return (
    <>
      <div class="row popular_1 mt-4">
        <ul class="nav nav-tabs  border-0 mb-0">
          <li class="nav-item">
            <a
              href="#home"
              data-bs-toggle="tab"
              aria-expanded="false"
              className={filter === "airing_today" ? "nav-link" : "  nav-link"}
              onClick={() => handleFilterChange("airing_today")}
            >
              <span class="d-md-block">Airing Today</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              href="#profile"
              data-bs-toggle="tab"
              aria-expanded="true"
              className={
                filter === "on_the_air" ? " nav-link active" : "nav-link"
              }
              onClick={() => handleFilterChange("on_the_air")}
            >
              <span class="d-md-block">On The Air</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              href="#settings"
              data-bs-toggle="tab"
              aria-expanded="false"
              className={filter === "popular" ? "nav-link" : "nav-link"}
              onClick={() => handleFilterChange("popular")}
            >
              <span class="d-md-block">Popular</span>
            </a>
          </li>

          <li class="nav-item">
            <a
              href="#settings_o"
              data-bs-toggle="tab"
              aria-expanded="false"
              className={filter === "top_rated" ? "nav-link" : "nav-link"}
              onClick={() => handleFilterChange("top_rated")}
            >
              <span class="d-md-block">Top Rated</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default TvFilterbtn;
