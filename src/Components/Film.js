import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import LatestFilters from "./LatestFilters";
import { useDispatch, useSelector } from "react-redux";
import { selectMovies, setMovies } from "../Redux/FilterSlice";

const API_URLS = {
  movies: "https://api.themoviedb.org/3/trending/movie/day",
  all: "https://api.themoviedb.org/3/trending/all/day",
  now_playing: "https://api.themoviedb.org/3/movie/now_playing",
  top_rated: "https://api.themoviedb.org/3/movie/top_rated",
};

const Film = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const filter = useSelector((state) => state.movies.filter);

  var settings = {
    dots: true,
    pauseOnHover: true,
    infinite: true,
    speed: 3000,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          API_URLS[filter] + "?api_key=0a4ea0f6b58dd38f569836183f3dbf13"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        dispatch(setMovies(data.results));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMovies();
  }, [filter, dispatch]);

  return (
    <>
      <section id="trend" className="pt-4 pb-5">
        <div className="container">
          <div className="row trend_1">
            <div className="col-md-6 col-6">
              <div className="trend_1l d-flex">
                <h4 className="mb-0">
                  <i className="fa fa-youtube-play align-middle col_red me-1"></i>{" "}
                  Latest <span className="col_red">Movies</span>
                </h4>
                <LatestFilters />
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
                    {movies.results === null ? (
                      // Render a loading message or spinner while data is being fetched
                      <div>Loading...</div>
                    ) : (
                      // Render movie data once it's available
                      <Slider {...settings}>
                        {movies.results.map((movie) => (
                          // Render each movie from the API
                          <div
                            className="col-md-12 col-6 px-3 my-4"
                            key={movie.id}
                            id={movie.id}
                          >
                            <div className="trend_2im clearfix position-relative">
                              <div className="trend_2im1 clearfix">
                                <div className="grid">
                                  <figure className="effect-jazz mb-0">
                                    <a href="#">
                                      <img
                                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                        className="w-100"
                                        alt={movie.title}
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
                          </div>
                        ))}
                      </Slider>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Film;
