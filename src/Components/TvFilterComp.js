import React, { useEffect, useState } from "react";
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
  const [sliderSettings, setSliderSettings] = useState({
    dots: true,
    pauseOnHover: true,
    infinite: true,
    speed: 3000,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 4,
  });

  useEffect(() => {
    const updateSlidesToShow = () => {
      const screenWidth = window.innerWidth;
      let slidesToShow = 4; // Default number of slides to show

      if (screenWidth <= 768) {
        slidesToShow = 1;
      } else if (screenWidth <= 992) {
        slidesToShow = 2;
      }

      setSliderSettings({
        ...sliderSettings,
        slidesToShow: slidesToShow,
      });
    };

    // Call the function on initial load
    updateSlidesToShow();

    // Add event listener to update slidesToShow on window resize
    window.addEventListener("resize", updateSlidesToShow);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

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
      <section id="popular" className="pt-4 pb-5 bg_grey">
        <div className="container">
          <div className="row trend_1">
            <div className="col-md-12">
              <div className="trend_1l">
                <h4 className="mb-0">
                  <i className="fa fa-youtube-play align-middle col_red me-1"></i>{" "}
                  Trending <span className="col_red">Series</span>
                </h4>
              </div>
            </div>
          </div>
          <TvFilterbtn />

          <div className="popular_2 row mt-4">
            <div className="tab-content">
              <div className="tab-pane active" id="home">
                <div className="popular_2i row">
                  <div className="col-md-12">
                    {movies ? (
                      <Slider {...sliderSettings}>
                        {movies.map((movie) => (
                          // Render each movie from the API

                          <div
                            className="col-md-12 col-6 px-3 my-4"
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
                                    {movie.name}
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
