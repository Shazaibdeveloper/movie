import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchResults } from "../Redux/searchSlice";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const searchResults = useSelector((state) => {
    const { movies, tvSeries } = state.search.results;
    return state.search.type === "movie" ? movies : tvSeries;
  });
  const api_key = process.env.REACT_APP_API_KEY;
  const type = useSelector((state) => state.search.type);
  useEffect(() => {
    const search = async () => {
      try {
        const movieResponse = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchTerm}`
        );
        const tvSeriesResponse = await fetch(
          `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query=${searchTerm}`
        );

        const movieData = await movieResponse.json();
        const tvSeriesData = await tvSeriesResponse.json();

        const combinedResults = [...movieData.results, ...tvSeriesData.results];
        dispatch(setSearchResults(combinedResults));
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    if (searchTerm.trim() !== "") {
      search();
    } else {
      // Clear the search results if the search term is empty
      dispatch(setSearchResults([]));
    }
  }, [searchTerm, api_key, dispatch]);

  return (
    <>
      <section id="top">
        <div className="container">
          <div className="row top_1">
            <div className="col-md-2">
              <div className="top_1l pt-1">
                <h3 className="mb-0">
                  <Link className="text-white" to="/">
                    <i className="fa fa-video-camera col_red me-1"></i> Planet
                  </Link>
                </h3>
              </div>
            </div>
            <div className="col-md-7">
              <div className="top_1m position-relative">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control bg-black"
                    placeholder="Search Movie/Tvseries..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <span className="input-group-btn">
                    <button
                      className="btn btn text-white bg_red rounded-0 border-0"
                      type="button"
                    >
                      Search
                    </button>
                  </span>
                </div>
                <div className="div-container">
                  {searchResults.map((result) => (
                    <div className="box2">
                      <Link
                        to={`/${type === "movie" ? "movies" : "tvseries"}/${
                          result.id
                        }`}
                      >
                        <div className="cart-item" key={result.id}>
                          <div className="cart-item-pic">
                            {/* Display movie/tv series image */}
                            <img
                              src={`https://image.tmdb.org/t/p/w500/${result.poster_path} `}
                            />
                          </div>
                          <div className="text-div">
                            <h4>{result.title}</h4>
                            <span className="cart-item-desc">
                              <p>{result.overview}</p>
                            </span>
                          </div>

                          <div className="price-div">
                            <span className="cart-item-price">
                              <p>View</p>
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="top_1r text-end">
                <ul className="social-network social-circle mb-0">
                  <li>
                    <a
                      href="https://www.instagram.com/shahzaib_coder/"
                      className="icoRss"
                      title="Rss"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/MuhammadShahzaib69/"
                      className="icoFacebook"
                      title="Facebook"
                    >
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.linkedin.com/in/moshahzaib/"
                      className="icoLinkedin"
                      title="Linkedin"
                    >
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="header">
        <nav
          className="navbar navbar-expand-md navbar-light"
          id="navbar_sticky"
        >
          <div className="container">
            <a className="navbar-brand text-white fw-bold" href="index.html">
              <i className="fa fa-video-camera col_red me-1"></i> Planet
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-0">
                <li className="nav-item">
                  <Link className="nav-link " to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/movies">
                    Movies
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/tvseries">
                    Tv Series
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
