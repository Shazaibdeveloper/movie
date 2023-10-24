import React, { useEffect, useState } from "react";
import TvPagi from "./TvPagi";
import { useDispatch, useSelector } from "react-redux";
import { fetchtv } from "../Redux/tvSlice";
import { Link } from "react-router-dom";

const Tv = () => {
  const dispatch = useDispatch();
  const tv = useSelector((state) => state.tv.tv);
  const currentPage = useSelector((state) => state.tv.currentPage);
  const totalPages = useSelector((state) => state.tv.totalPages);

  useEffect(() => {
    dispatch(fetchtv(currentPage));
  }, [dispatch, currentPage]);
  return (
    <>
      <section id="trend" className="pt-4 pb-5">
        <div className="container">
          <div className="row trend_1">
            <div className="col-md-6 col-6">
              <div className="trend_1l">
                <h4 className="mb-0">
                  <i className="fa fa-youtube-play align-middle col_red me-1"></i>{" "}
                  Latest <span className="col_red">Movies</span>
                </h4>
              </div>
            </div>
            <div className="col-md-6 col-6">
              <div className="trend_1r text-end">
                <h6 className="mb-0">
                  <a className="button" href="#">
                    {" "}
                    View All
                  </a>
                </h6>
              </div>
            </div>
          </div>

          <div className="row trend_2 mt-4">
            <div
              id="carouselExampleCaptions1"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="trend_2i row">
                    {tv ? (
                      // Render the component when moviesData is not null
                      <div className="trend_2i row">
                        {tv.map((movie) => (
                          <div
                            className="col-md-3 col-6 px-3 my-4"
                            key={movie.id}
                            id={movie.id}
                          >
                            <Link to={`/tvseries/${movie.id}`}>
                              <div className="trend_2im clearfix position-relative">
                                <div className="trend_2im1 clearfix">
                                  <div className="grid">
                                    <figure className="effect-jazz mb-0">
                                      <a href="#">
                                        <img
                                          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                          className="w-100"
                                          alt={movie.name}
                                        />
                                      </a>
                                    </figure>
                                  </div>
                                </div>
                              </div>
                              <div className="trend_2ilast bg_grey p-3 clearfix">
                                <h5 className="title">
                                  <a className="col_red " href="#">
                                    {movie.title}
                                  </a>
                                </h5>
                                <p className="mb-2 dotted-para">
                                  {movie.overview}
                                </p>
                                <span className="col_red">
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                </span>
                                <p className="mb-0">{movie.popularity} Views</p>
                              </div>
                            </Link>
                          </div>
                        ))}
                      </div>
                    ) : (
                      // Render a loading indicator or message when moviesData is null
                      <p>Loading...</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TvPagi />
    </>
  );
};

export default Tv;
