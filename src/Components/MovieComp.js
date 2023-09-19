import React, { useEffect, useState } from "react";
import MoviePagi from "./MoviePagi";

const MovieComp = () => {
  const [moviesData, setMoviesData] = useState(null); // Initialize state to store fetched data

  async function fetchMovies() {
    const api_key = process.env.REACT_APP_API_KEY;
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&page=1`;

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
                    {moviesData ? (
                      // Render the component when moviesData is not null
                      <div className="trend_2i row">
                        {moviesData.results.map((movie) => (
                          <div
                            className="col-md-3 col-6 px-3 my-4"
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
      <MoviePagi />
    </>
  );
};

export default MovieComp;
