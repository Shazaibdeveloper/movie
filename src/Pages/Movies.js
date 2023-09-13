import React from "react";
import Navbar from "../Components/Navbar";

const Movies = () => {
  return (
    <>
      <Navbar />
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
                    <div className="col-md-3 col-6">
                      <div className="trend_2im clearfix position-relative">
                        <div className="trend_2im1 clearfix">
                          <div className="grid">
                            <figure className="effect-jazz mb-0">
                              <a href="#">
                                <img
                                  src="img/4.jpg"
                                  className="w-100"
                                  alt="img25"
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
                        <h5>
                          <a className="col_red" href="#">
                            Semper
                          </a>
                        </h5>
                        <p className="mb-2">
                          A father travels from Oklahoma to France to help
                          his...
                        </p>
                        <span className="col_red">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                        <p className="mb-0">1 Views</p>
                      </div>
                    </div>
                    <div className="col-md-3 col-6">
                      <div className="trend_2im clearfix position-relative">
                        <div className="trend_2im1 clearfix">
                          <div className="grid">
                            <figure className="effect-jazz mb-0">
                              <a href="#">
                                <img
                                  src="img/5.jpg"
                                  className="w-100"
                                  alt="img25"
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
                        <h5>
                          <a className="col_red" href="#">
                            Dapibus
                          </a>
                        </h5>
                        <p className="mb-2">
                          A father travels from Oklahoma to France to help
                          his...
                        </p>
                        <span className="col_red">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                        <p className="mb-0">1 Views</p>
                      </div>
                    </div>
                    <div className="col-md-3 col-6">
                      <div className="trend_2im clearfix position-relative">
                        <div className="trend_2im1 clearfix">
                          <div className="grid">
                            <figure className="effect-jazz mb-0">
                              <a href="#">
                                <img
                                  src="img/6.jpg"
                                  className="w-100"
                                  alt="img25"
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
                        <h5>
                          <a className="col_red" href="#">
                            Ipsum
                          </a>
                        </h5>
                        <p className="mb-2">
                          A father travels from Oklahoma to France to help
                          his...
                        </p>
                        <span className="col_red">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                        <p className="mb-0">1 Views</p>
                      </div>
                    </div>
                    <div className="col-md-3 col-6">
                      <div className="trend_2im clearfix position-relative">
                        <div className="trend_2im1 clearfix">
                          <div className="grid">
                            <figure className="effect-jazz mb-0">
                              <a href="#">
                                <img
                                  src="img/7.jpg"
                                  className="w-100"
                                  alt="img25"
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
                        <h5>
                          <a className="col_red" href="#">
                            Lorem
                          </a>
                        </h5>
                        <p className="mb-2">
                          A father travels from Oklahoma to France to help
                          his...
                        </p>
                        <span className="col_red">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                        <p className="mb-0">1 Views</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="footer">
        <div class="footer_m clearfix">
          <div class="container">
            <div class="row footer_1">
              <div class="col-md-4">
                <div class="footer_1i">
                  <h3>
                    <a class="text-white" href="index.html">
                      <i class="fa fa-video-camera col_red me-1"></i> Planet
                    </a>
                  </h3>
                  <p class="mt-3">
                    Lorem ipsum dolor sit amet consect etur adi pisicing elit
                    sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet
                    consect etur.{" "}
                  </p>
                  <h6 class="fw-normal">
                    <i class="fa fa-map-marker fs-5 align-middle col_red me-1"></i>{" "}
                    5311 Ceaver Sidge Td. Pakland, DE 13507
                  </h6>
                  <h6 class="fw-normal mt-3">
                    <i class="fa fa-envelope fs-5 align-middle col_red me-1"></i>{" "}
                    info@gmail.com
                  </h6>
                  <h6 class="fw-normal mt-3 mb-0">
                    <i class="fa fa-phone fs-5 align-middle col_red me-1"></i>{" "}
                    +123 123 456
                  </h6>
                </div>
              </div>
              <div class="col-md-4">
                <div class="footer_1i">
                  <h4>
                    Flickr <span class="col_red">Stream</span>
                  </h4>
                  <div class="footer_1i1 row mt-4">
                    <div class="col-md-3 col-3">
                      <div class="footer_1i1i">
                        <div class="grid clearfix">
                          <figure class="effect-jazz mb-0">
                            <a href="#">
                              <img
                                src="img/4.jpg"
                                height="70"
                                class="w-100"
                                alt="abc"
                              />
                            </a>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3 col-3">
                      <div class="footer_1i1i">
                        <div class="grid clearfix">
                          <figure class="effect-jazz mb-0">
                            <a href="#">
                              <img
                                src="img/5.jpg"
                                height="70"
                                class="w-100"
                                alt="abc"
                              />
                            </a>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3 col-3">
                      <div class="footer_1i1i">
                        <div class="grid clearfix">
                          <figure class="effect-jazz mb-0">
                            <a href="#">
                              <img
                                src="img/6.jpg"
                                height="70"
                                class="w-100"
                                alt="abc"
                              />
                            </a>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3 col-3">
                      <div class="footer_1i1i">
                        <div class="grid clearfix">
                          <figure class="effect-jazz mb-0">
                            <a href="#">
                              <img
                                src="img/7.jpg"
                                height="70"
                                class="w-100"
                                alt="abc"
                              />
                            </a>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="footer_1i1 row mt-3">
                    <div class="col-md-3 col-3">
                      <div class="footer_1i1i">
                        <div class="grid clearfix">
                          <figure class="effect-jazz mb-0">
                            <a href="#">
                              <img
                                src="img/8.jpg"
                                height="70"
                                class="w-100"
                                alt="abc"
                              />
                            </a>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3 col-3">
                      <div class="footer_1i1i">
                        <div class="grid clearfix">
                          <figure class="effect-jazz mb-0">
                            <a href="#">
                              <img
                                src="img/9.jpg"
                                height="70"
                                class="w-100"
                                alt="abc"
                              />
                            </a>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3 col-3">
                      <div class="footer_1i1i">
                        <div class="grid clearfix">
                          <figure class="effect-jazz mb-0">
                            <a href="#">
                              <img
                                src="img/10.jpg"
                                height="70"
                                class="w-100"
                                alt="abc"
                              />
                            </a>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3 col-3">
                      <div class="footer_1i1i">
                        <div class="grid clearfix">
                          <figure class="effect-jazz mb-0">
                            <a href="#">
                              <img
                                src="img/11.jpg"
                                height="70"
                                class="w-100"
                                alt="abc"
                              />
                            </a>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="footer_1i">
                  <h4>
                    Sign <span class="col_red">Newsletter</span>
                  </h4>
                  <p class="mt-3">
                    Subscribe to our newsletter list to get latest news and
                    updates from us
                  </p>
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control bg-black"
                      placeholder="Email"
                    />
                    <span class="input-group-btn">
                      <button
                        class="btn btn text-white bg_red rounded-0 border-0"
                        type="button"
                      >
                        Subscribe
                      </button>
                    </span>
                  </div>
                  <ul class="social-network social-circle mb-0 mt-4">
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
        </div>
      </section>

      <section id="footer_b" class="pt-3 pb-3 bg_grey">
        <div class="container">
          <div class="row footer_1">
            <div class="col-md-8">
              <div class="footer_1l">
                <p class="mb-0">
                  © 2013 Your Website Name. All Rights Reserved | Design by{" "}
                  <a class="col_red" href="http://www.templateonweb.com">
                    TemplateOnWeb
                  </a>
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="footer_1r">
                <ul class="mb-0">
                  <li class="d-inline-block me-2">
                    <a href="#">Home</a>
                  </li>
                  <li class="d-inline-block me-2">
                    <a href="#">Features</a>
                  </li>
                  <li class="d-inline-block me-2">
                    <a href="#">Pages</a>
                  </li>
                  <li class="d-inline-block me-2">
                    <a href="#">Portfolio</a>
                  </li>
                  <li class="d-inline-block me-2">
                    <a href="#">Blog</a>
                  </li>
                  <li class="d-inline-block">
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Movies;
