import React from "react";
import img1 from "../Images/img1.jpg";
import img2 from "../Images/img2.webp";
import img3 from "../Images/img3.jpg";
import pic1 from "../Images/pic1.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section id="footer">
        <div className="footer_m clearfix">
          <div className="container">
            <div className="row footer_1">
              <div className="col-md-4">
                <div className="footer_1i">
                  <h3>
                    <a className="text-white" href="index.html">
                      <i className="fa fa-video-camera col_red me-1"></i> Planet
                    </a>
                  </h3>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consect etur adi pisicing elit
                    sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet
                    consect etur.{" "}
                  </p>
                  <h6 className="fw-normal">
                    <i className="fa fa-map-marker fs-5 align-middle col_red me-1"></i>{" "}
                    Saddar, Rawalpindi
                  </h6>
                  <h6 className="fw-normal mt-3">
                    <i className="fa fa-envelope fs-5 align-middle col_red me-1"></i>{" "}
                    shahzaibmuhammad627@gmail.com
                  </h6>
                  <h6 className="fw-normal mt-3 mb-0">
                    <i className="fa fa-phone fs-5 align-middle col_red me-1"></i>{" "}
                    0317 5188580
                  </h6>
                </div>
              </div>
              <div className="col-md-4">
                <div className="footer_1i">
                  <h4>
                    Flickr <span className="col_red">Stream</span>
                  </h4>
                  <div className="footer_1i1 row mt-4">
                    <div className="col-md-3 col-3">
                      <div className="footer_1i1i">
                        <div className="grid clearfix">
                          <figure className="effect-jazz mb-0">
                            <a href="#">
                              <img
                                src={img1}
                                height="70"
                                className="w-100"
                                alt="abc"
                              />
                            </a>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-3">
                      <div className="footer_1i1i">
                        <div className="grid clearfix">
                          <figure className="effect-jazz mb-0">
                            <a href="#">
                              <img
                                src={img3}
                                height="70"
                                className="w-100"
                                alt="abc"
                              />
                            </a>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-3">
                      <div className="footer_1i1i">
                        <div className="grid clearfix">
                          <figure className="effect-jazz mb-0">
                            <a href="#">
                              <img
                                src={img2}
                                height="70"
                                className="w-100"
                                alt="abc"
                              />
                            </a>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-3">
                      <div className="footer_1i1i">
                        <div className="grid clearfix">
                          <figure className="effect-jazz mb-0">
                            <a href="#">
                              <img
                                src={pic1}
                                height="70"
                                className="w-100"
                                alt="abc"
                              />
                            </a>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="footer_1i1 row mt-3">
                    <div className="col-md-3 col-3">
                      <div className="footer_1i1i">
                        <div className="grid clearfix">
                          <figure className="effect-jazz mb-0">
                            <a href="#">
                              <img
                                src={img3}
                                height="70"
                                className="w-100"
                                alt="abc"
                              />
                            </a>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-3">
                      <div className="footer_1i1i">
                        <div className="grid clearfix">
                          <figure className="effect-jazz mb-0">
                            <a href="#">
                              <img
                                src={img2}
                                height="70"
                                className="w-100"
                                alt="abc"
                              />
                            </a>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-3">
                      <div className="footer_1i1i">
                        <div className="grid clearfix">
                          <figure className="effect-jazz mb-0">
                            <a href="#">
                              <img
                                src={img1}
                                height="70"
                                className="w-100"
                                alt="abc"
                              />
                            </a>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-3">
                      <div className="footer_1i1i">
                        <div className="grid clearfix">
                          <figure className="effect-jazz mb-0">
                            <a href="#">
                              <img
                                src={pic1}
                                height="70"
                                className="w-100"
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
              <div className="col-md-4">
                <div className="footer_1i">
                  <h4>
                    Sign <span className="col_red">Newsletter</span>
                  </h4>
                  <p className="mt-3">
                    Subscribe to our newsletter list to get latest news and
                    updates from us
                  </p>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control bg-black"
                      placeholder="Email"
                    />
                    <span className="input-group-btn">
                      <button
                        className="btn btn text-white bg_red rounded-0 border-0"
                        type="button"
                      >
                        Subscribe
                      </button>
                    </span>
                  </div>
                  <ul className="social-network social-circle mb-0 mt-4">
                    <li>
                      <a
                        href="https://www.instagram.com/shahzaib_coder/"
                        class="icoRss"
                        title="Rss"
                      >
                        <i class="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/MuhammadShahzaib69/"
                        class="icoFacebook"
                        title="Facebook"
                      >
                        <i class="fa fa-facebook"></i>
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://www.linkedin.com/in/moshahzaib/"
                        class="icoLinkedin"
                        title="Linkedin"
                      >
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

      <section id="footer_b" className="pt-3 pb-3 bg_grey">
        <div className="container">
          <div className="row footer_1">
            <div className="col-md-8">
              <div className="footer_1l">
                <p className="mb-0">
                  © 2013 Planet. All Rights Reserved | Design by
                  <a
                    className="col_red"
                    href="https://www.linkedin.com/in/moshahzaib/"
                  >
                    Muhammad Shahzaib
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer_1r">
                <ul className="mb-0">
                  <li className="d-inline-block me-2">
                    <Link to="/home">Home</Link>
                  </li>

                  <li className="d-inline-block me-2">
                    <Link to="/movies">Movies</Link>
                  </li>
                  <li className="d-inline-block">
                    <Link to="/">tvseries</Link>
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

export default Footer;
