import React from "react";

const LatestFilters = () => {
  return (
    <>
      <div class="heading filters">
        <div
          class="btn-group btn-group-toggle btn-colors"
          data-toggle="buttons"
        >
          <label class="btn btn-danger">All</label>
          <label class="btn btn-danger">Mens</label>
          <label class="btn btn-danger">Women</label>
          <label class="btn btn-danger">Featured</label>
          <label class="btn btn-danger">New</label>
        </div>
      </div>{" "}
    </>
  );
};

export default LatestFilters;
