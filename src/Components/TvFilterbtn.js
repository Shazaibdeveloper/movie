import React from "react";

const TvFilterbtn = () => {
  return (
    <>
      <div class="row popular_1 mt-4">
        <ul class="nav nav-tabs  border-0 mb-0">
          <li class="nav-item">
            <a
              href="#home"
              data-bs-toggle="tab"
              aria-expanded="false"
              class="nav-link active"
            >
              <span class="d-md-block">JUST ARRIVED</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              href="#profile"
              data-bs-toggle="tab"
              aria-expanded="true"
              class="nav-link"
            >
              <span class="d-md-block">POPULAR EVENTS</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              href="#settings"
              data-bs-toggle="tab"
              aria-expanded="false"
              class="nav-link"
            >
              <span class="d-md-block">TV SHOWS</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              href="#settings_o"
              data-bs-toggle="tab"
              aria-expanded="false"
              class="nav-link"
            >
              <span class="d-md-block">FREE MOVIES</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default TvFilterbtn;
