import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const Upcomming = () => {
  const [moviesData, setMoviesData] = useState(null); // Initialize state to store fetched data
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
      let slidesToShow = 3; // Default number of slides to show

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
  async function fetchMovies() {
    const api_key = process.env.REACT_APP_API_KEY;
    const apiUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}`;

    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();
      setMoviesData(data); // Store the fetched data in the component's state
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    // Use useEffect to fetch data when the component mounts
    fetchMovies();
  }, []); // Empty dependency array to fetch data only once when the component mounts

  return (
    <>
      <section id="upcome" className="pt-4 pb-5">
        <div className="container">
          <div className="row trend_1">
            <div className="col-md-10">
              <div className="trend_1l">
                <h4 className="mb-0">
                  <i className="fa fa-youtube-play align-middle col_red me-1"></i>{" "}
                  Upcoming <span className="col_red">Events</span>
                </h4>
              </div>
            </div>
            <div className="col">
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
              id="carouselExampleCaptions2"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="trend_2i row">
                {moviesData === null ? (
                  // Render a loading message or spinner while data is being fetched
                  <div>Loading...</div>
                ) : (
                  // Render movie data once it's available
                  <Slider {...sliderSettings}>
                    {moviesData.results.map((movie) => (
                      // Render each movie from the API
                      <div
                        className="col-md-12 px-3"
                        key={movie.id}
                        id={movie.id}
                      >
                        <Link to={`/movies/${movie.id}`}>
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
                            <div className="trend_2im2 clearfix text-center position-absolute w-100 top-0">
                              <span className="fs-1">
                                <a className="col_red" href="#">
                                  <i className="fa fa-youtube-play"></i>
                                </a>
                              </span>
                            </div>
                          </div>
                          <div className="trend_2ilast bg_grey p-3 clearfix">
                            <h5 className="title">
                              <a className="col_red" href="#">
                                {movie.title}
                              </a>
                            </h5>
                            <p className="mb-2 dotted-para">{movie.overview}</p>
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
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Upcomming;
