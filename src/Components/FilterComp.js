import React from "react";

const FilterComp = () => {
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
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions1"
                  data-bs-slide-to="0"
                  className="active"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions1"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                  className=""
                  aria-current="true"
                ></button>
              </div>
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
                <div className="carousel-item">
                  <div className="trend_2i row">
                    <div className="col-md-3 col-6">
                      <div className="trend_2im clearfix position-relative">
                        <div className="trend_2im1 clearfix">
                          <div className="grid">
                            <figure className="effect-jazz mb-0">
                              <a href="#">
                                <img
                                  src="img/8.jpg"
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
                                  src="img/9.jpg"
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
                                  src="img/10.jpg"
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
                                  src="img/11.jpg"
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
    </>
  );
};

export default FilterComp;
