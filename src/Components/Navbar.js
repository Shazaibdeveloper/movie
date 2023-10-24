import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchResults } from "../Redux/searchSlice";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const searchResults = useSelector((state) => state.search);
  const api_key = process.env.REACT_APP_API_KEY;

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
        <div class="container">
          <div class="row top_1">
            <div class="col-md-2">
              <div class="top_1l pt-1">
                <h3 class="mb-0">
                  <Link class="text-white" to="/">
                    <i class="fa fa-video-camera col_red me-1"></i> Planet
                  </Link>
                </h3>
              </div>
            </div>
            <div class="col-md-7">
              <div class="top_1m position-relative">
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
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="top_1r text-end">
                <ul class="social-network social-circle mb-0">
                  <li>
                    <a href="#" class="icoRss" title="Rss">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="icoFacebook" title="Facebook">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="icoTwitter" title="Twitter">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="icoGoogle" title="Google +">
                      <i class="fa fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="icoLinkedin" title="Linkedin">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="header">
        <nav class="navbar navbar-expand-md navbar-light" id="navbar_sticky">
          <div class="container">
            <a class="navbar-brand text-white fw-bold" href="index.html">
              <i class="fa fa-video-camera col_red me-1"></i> Planet
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mb-0">
                <li class="nav-item">
                  <Link class="nav-link " to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/movies">
                    Movies
                  </Link>
                </li>

                <li class="nav-item">
                  <Link class="nav-link" to="/tvseries">
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
