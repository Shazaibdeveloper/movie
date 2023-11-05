import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const Stream = () => {
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
      let slidesToShow = 4; // Default number of slides to show

      if (screenWidth <= 768) {
        slidesToShow = 2;
      } else if (screenWidth <= 992) {
        slidesToShow = 3;
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
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`;

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
      <section id="stream" className="pb-5 pt-4">
        <div className="container">
          <div className="row trend_1">
            <div className="col-md-10">
              <div className="trend_1l">
                <h4 className="mb-0">
                  <i className="fa fa-youtube-play align-middle col_red me-1"></i>{" "}
                  Movie <span className="col_red">Streaming Services</span>
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
              id="carouselExampleCaptions4"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="trend_2i row">
                    <div className="trend_2i row">
                      {moviesData === null ? (
                        // Render a loading message or spinner while data is being fetched
                        <div>Loading...</div>
                      ) : (
                        // Render movie data once it's available
                        <Slider {...sliderSettings}>
                          {moviesData.results.map((movie) => (
                            <div
                              className="col px-3"
                              key={movie.id}
                              id={movie.id}
                            >
                              <div className="trend_2im clearfix position-relative">
                                <Link to={`/movies/${movie.id}`}>
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
                                  <div className="trend_2im2 clearfix  position-absolute w-100 bottom-0">
                                    <div className="wrapper">
                                      <h5 className="title">
                                        <a className="col_red" href="#">
                                          {movie.title}
                                        </a>
                                      </h5>
                                      <span className="col_red">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                      </span>
                                      <p className="mb-0">
                                        {movie.popularity} Views
                                      </p>
                                    </div>
                                  </div>
                                </Link>
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
        </div>
      </section>
    </>
  );
};

export default Stream;
