import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <section id="top">
        <div class="container">
          <div class="row top_1">
            <div class="col-md-3">
              <div class="top_1l pt-1">
                <h3 class="mb-0">
                  <Link class="text-white" to="/">
                    <i class="fa fa-video-camera col_red me-1"></i> Planet
                  </Link>
                </h3>
              </div>
            </div>
            <div class="col-md-5">
              <div class="top_1m">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control bg-black"
                    placeholder="Search Site..."
                  />
                  <span class="input-group-btn">
                    <button
                      class="btn btn text-white bg_red rounded-0 border-0"
                      type="button"
                    >
                      Search
                    </button>
                  </span>
                </div>
              </div>
            </div>
            <div class="col-md-4">
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
