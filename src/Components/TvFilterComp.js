import React, { useEffect } from "react";
import TvFilterbtn from "./TvFilterbtn";
import Slider from "react-slick";
import { selectFilter, selectMovies, setMovies } from "../Redux/TvFilter";
import { useDispatch, useSelector } from "react-redux";
const api_key = process.env.REACT_APP_API_KEY;

const API_URLS = {
  airing_today: `https://api.themoviedb.org/3/tv/airing_today?api_key=${api_key}`,
  on_the_air: `https://api.themoviedb.org/3/tv/on_the_air?api_key=${api_key}`,
  popular: `https://api.themoviedb.org/3/tv/popular?api_key=${api_key}`,
  top_rated: `https://api.themoviedb.org/3/tv/top_rated?api_key=${api_key}`,
};

const TvFilterComp = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const filter = useSelector(selectFilter);
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
        const apiUrl = API_URLS[filter];
        console.log("Fetching data from:", apiUrl);
        const response = await fetch(apiUrl);

        if (!response.ok) {
          console.error(
            "Response Error:",
            response.status,
            response.statusText
          );
          const errorText = await response.text();
          console.error("Error Response:", errorText);
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        dispatch(setMovies(data.results)); // Assuming data.results is the array of movies
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMovies();
  }, [filter, dispatch]);

  return (
    <>
      <section id="popular" class="pt-4 pb-5 bg_grey">
        <div class="container">
          <div class="row trend_1">
            <div class="col-md-12">
              <div class="trend_1l">
                <h4 class="mb-0">
                  <i class="fa fa-youtube-play align-middle col_red me-1"></i>{" "}
                  Trending <span class="col_red">Events</span>
                </h4>
              </div>
            </div>
          </div>
          <TvFilterbtn />
          <div class="popular_2 row mt-4">
            <div class="tab-content">
              <div class="tab-pane active" id="home">
                <div class="popular_2i row">
                  <div class="col-md-12">
                    {movies ? (
                      <Slider {...settings}>
                        {movies.map((movie) => (
                          // Render each movie from the API

                          <div class="popular_2i1 row">
                            <div class="col-md-4 col-4">
                              <div class="popular_2i1lm position-relative clearfix">
                                <div class="popular_2i1lm1 clearfix">
                                  <div class="grid">
                                    <figure class="effect-jazz mb-0">
                                      <a href="#">
                                        <img
                                          class="w-100"
                                          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                          className="w-100"
                                          alt={movie.title}
                                        />
                                      </a>
                                    </figure>
                                  </div>
                                </div>
                                <div class="popular_2i1lm2 position-absolute top-0 w-100 text-center clearfix">
                                  <ul>
                                    <li class="d-inline-block">
                                      <a href="#">
                                        <i class="fa fa-link col_red"></i>
                                      </a>
                                    </li>
                                    <li class="d-inline-block">
                                      <a href="#">
                                        <i class="fa fa-search col_red"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-8 col-8">
                              <div class="popular_2i1r">
                                <h5>
                                  <a class="col_red" href="#">
                                    {movie.title}
                                  </a>
                                </h5>
                                <h6>Action, Thriller</h6>
                                <h6>
                                  {" "}
                                  Imdb {movie.popularity}
                                  <span class="ms-2">
                                    <i class="fa fa-star col_red me-1"></i>
                                  </span>{" "}
                                  Year : 2022{" "}
                                  <span class="ms-2">Runtime: 1h 49m</span>
                                </h6>
                                <p>{movie.overview}</p>
                                <h6 class="mb-0">
                                  <a class="button" href="#">
                                    {" "}
                                    More Info - Trailer
                                  </a>
                                </h6>
                              </div>
                            </div>
                          </div>
                        ))}
                      </Slider>
                    ) : (
                      // Render loading message when movies are still being fetched
                      <div>Loading...</div>
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

export default TvFilterComp;
