import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const Upcomming = () => {
  const [moviesData, setMoviesData] = useState(null); // Initialize state to store fetched data
  var settings = {
    dots: true,
    pauseOnHover: true,
    infinite: true,
    speed: 3000,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
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
      <section id="upcome" class="pt-4 pb-5">
        <div class="container">
          <div class="row trend_1">
            <div class="col-md-6 col-6">
              <div class="trend_1l">
                <h4 class="mb-0">
                  <i class="fa fa-youtube-play align-middle col_red me-1"></i>{" "}
                  Upcoming <span class="col_red">Events</span>
                </h4>
              </div>
            </div>
            <div class="col-md-6 col-6">
              <div class="trend_1r text-end">
                <h6 class="mb-0">
                  <a class="button" href="#">
                    {" "}
                    View All
                  </a>
                </h6>
              </div>
            </div>
          </div>
          <div class="row trend_2 mt-4">
            <div
              id="carouselExampleCaptions2"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="trend_2i row">
                {moviesData === null ? (
                  // Render a loading message or spinner while data is being fetched
                  <div>Loading...</div>
                ) : (
                  // Render movie data once it's available
                  <Slider {...settings}>
                    {moviesData.results.map((movie) => (
                      // Render each movie from the API
                      <div class="col-md-12 px-3" key={movie.id} id={movie.id}>
                        <div class="trend_2im clearfix position-relative">
                          <div class="trend_2im1 clearfix">
                            <div class="grid">
                              <figure class="effect-jazz mb-0">
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
                          <div class="trend_2im2 clearfix text-center position-absolute w-100 top-0">
                            <span class="fs-1">
                              <a class="col_red" href="#">
                                <i class="fa fa-youtube-play"></i>
                              </a>
                            </span>
                          </div>
                        </div>
                        <div class="trend_2ilast bg_grey p-3 clearfix">
                          <h5 className="title">
                            <a class="col_red" href="#">
                              {movie.title}
                            </a>
                          </h5>
                          <p class="mb-2 dotted-para">{movie.overview}</p>
                          <span class="col_red">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                          </span>
                          <p class="mb-0">{movie.popularity} Views</p>
                        </div>
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
