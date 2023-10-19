import React, { useEffect } from "react";
import TvFilterbtn from "./TvFilterbtn";
import Slider from "react-slick";
import { selectFilter, selectMovies, setMovies } from "../Redux/TvFilter";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

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
                  Trending <span class="col_red">Series</span>
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

                          <div
                            className="col-md-12 col-6 px-3 my-4"
                            key={movie.id || <Skeleton />}
                            id={movie.id || <Skeleton />}
                          >
                            <Link to={`/tvseries/${movie.id}`}>
                              <div className="trend_2im clearfix position-relative">
                                <div className="trend_2im1 clearfix">
                                  <div className="grid">
                                    <figure className="effect-jazz mb-0">
                                      <a href="#">
                                        <img
                                          src={`https://image.tmdb.org/t/p/w500/${
                                            movie.poster_path || <Skeleton />
                                          }`}
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
                                <p className="mb-0">
                                  {movie.popularity || <Skeleton />} Views
                                </p>
                              </div>
                            </Link>
                          </div>
                        ))}
                      </Slider>
                    ) : (
                      // Render loading message when movies are still being fetched
                      <Skeleton />
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
