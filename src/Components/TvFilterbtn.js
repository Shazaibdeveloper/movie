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
      <div className="row popular_1 mt-4">
        <ul className="nav nav-tabs border-0 mb-0">
          <li className="nav-item">
            <a
              href="#home"
              data-bs-toggle="tab"
              aria-expanded="false"
              className={`nav-link ${
                filter === "airing_today" ? "active" : ""
              }`}
              onClick={() => handleFilterChange("airing_today")}
            >
              <span className="d-md-block">Airing Today</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#profile"
              data-bs-toggle="tab"
              aria-expanded="true"
              className={`nav-link ${filter === "on_the_air" ? "active" : ""}`}
              onClick={() => handleFilterChange("on_the_air")}
            >
              <span className="d-md-block">On The Air</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#settings"
              data-bs-toggle="tab"
              aria-expanded="false"
              className={`nav-link ${filter === "popular" ? "active" : ""}`}
              onClick={() => handleFilterChange("popular")}
            >
              <span className="d-md-block">Popular</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#settings_o"
              data-bs-toggle="tab"
              aria-expanded="false"
              className={`nav-link ${filter === "top_rated" ? "active" : ""}`}
              onClick={() => handleFilterChange("top_rated")}
            >
              <span className="d-md-block">Top Rated</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default TvFilterbtn;
