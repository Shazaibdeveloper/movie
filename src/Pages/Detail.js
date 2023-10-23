import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Modal from "react-modal";
import { AiOutlinePlayCircle } from "react-icons/ai";
import Slider from "react-slick";

Modal.setAppElement("#root"); // Set the root element for React Modal

const Detail = ({ type }) => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [recommendations, setRecommendations] = useState([]);
  var settings = {
    dots: true,
    pauseOnHover: true,
    infinite: true,
    speed: 3000,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  useEffect(() => {
    const api_key = process.env.REACT_APP_API_KEY;
    const apiUrl = type === "movie" ? "movie" : "tv"; // Determine the API endpoint based on type

    // Fetch movie or TV series details
    axios
      .get(`https://api.themoviedb.org/3/${apiUrl}/${id}?api_key=${api_key}`)
      .then((response) => {
        setData(response.data);
        // Fetch movie or TV series trailer
        axios
          .get(
            `https://api.themoviedb.org/3/${apiUrl}/${id}/videos?api_key=${api_key}`
          )
          .then((trailerResponse) => {
            // Check if there is a trailer available
            const youtubeTrailer = trailerResponse.data.results.find(
              (video) => video.site === "YouTube"
            );

            if (youtubeTrailer) {
              setTrailer(`https://www.youtube.com/embed/${youtubeTrailer.key}`);
            }
          })
          .catch((trailerError) => {
            console.error("Error fetching trailer:", trailerError);
          });
      })
      .catch((error) => {
        console.error("Error fetching details:", error);
        // Handle the error, e.g., display an error message to the user
      });

    axios
      .get(
        `https://api.themoviedb.org/3/${apiUrl}/${id}/recommendations?api_key=${api_key}`
      )
      .then((recommendationsResponse) => {
        setRecommendations(recommendationsResponse.data.results);
      })
      .catch((recommendationsError) => {
        console.error("Error fetching recommendations:", recommendationsError);
      });
  }, [id, type]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  const {
    name,
    title,
    poster_path,
    release_date,
    genres,
    runtime,
    tagline,
    overview,
  } = data;

  return (
    <>
      <Navbar />
      <section className="container detail-section my-4">
        <div className="detail-main-div p-5">
          <div className="row">
            <div className="col-4">
              <div className="detail-img-div">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  className="w-100"
                  alt={name || title}
                />
              </div>
            </div>
            <div className="col-8">
              <div className="title">
                <h2>{name || title}</h2>
              </div>
              {release_date && (
                <div className="release-year-genre d-flex pb-2">
                  <p className="r-border">R</p>
                  <p>{release_date}</p>
                  {genres && (
                    <p>
                      {genres[0]?.name}, {genres[1]?.name}
                    </p>
                  )}
                  <p>{runtime} minutes</p>
                </div>
              )}
              <div className="trailer">
                <a
                  href={trailer}
                  onClick={(e) => {
                    e.preventDefault();
                    openModal();
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlinePlayCircle /> Watch Trailer
                </a>
              </div>
              <div className="modal">
                <Modal
                  isOpen={isModalOpen}
                  onRequestClose={closeModal}
                  contentLabel="Trailer Modal"
                >
                  <div className="modal-content">
                    <button onClick={closeModal} className="modal-btn">
                      x
                    </button>
                    <iframe
                      title="Trailer"
                      width="100%"
                      height="100%"
                      src={trailer}
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                </Modal>
              </div>
              <div className="tagline-div">
                <p>{tagline}</p>
              </div>
              <div className="overview-div">
                <h4>Overview</h4>
                <p>{overview}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row trend_1">
          <div className="col-md-6 col-6">
            <div className="trend_1l d-flex">
              <h4 className="mb-0">
                <i className="fa fa-youtube-play align-middle col_red me-1"></i>{" "}
                Recommended <span className="col_red"> Movies/Tvseries</span>
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
        {recommendations ? (
          <Slider {...settings}>
            {recommendations.map((recommendation) => (
              // Render each movie from the API
              <div
                className="col-md-12 col-6 px-3 my-4"
                key={recommendation.id}
                id={recommendation.id}
              >
                <Link
                  to={`/${type === "movie" ? "movies" : "tvseries"}/${
                    recommendation.id
                  }`}
                >
                  <div className="trend_2im clearfix position-relative">
                    <div className="trend_2im1 clearfix">
                      <div className="grid">
                        <figure className="effect-jazz mb-0">
                          <a href="#">
                            <img
                              src={`https://image.tmdb.org/t/p/w500/${recommendation.poster_path}`}
                              className="w-100"
                              alt={recommendation.title}
                            />
                          </a>
                        </figure>
                      </div>
                    </div>
                  </div>
                  <div className="trend_2ilast bg_grey p-3 clearfix">
                    <h5 className="title">
                      <a className="col_red " href="#">
                        {recommendation.title}
                      </a>
                    </h5>
                    <p className="mb-2 dotted-para">
                      {recommendation.overview}
                    </p>
                    <span className="col_red">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </span>
                    <p className="mb-0">{recommendation.popularity} Views</p>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        ) : (
          // Render loading message when movies are still being fetched
          <div>loading</div>
        )}
      </div>
      {/* {recommendation.map((recommendation) => (
        <div
          className="col-md-3 col-6 px-3 my-4"
          key={recommendation.id}
          id={recommendation.id}
        >
          {" "}
          <Link
            to={`/${type === "movie" ? "movies" : "tv"}/${recommendation.id}`}
          >
            <div className="trend_2im clearfix position-relative">
              <div className="trend_2im1 clearfix">
                <div className="grid">
                  <figure className="effect-jazz mb-0">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${recommendation.poster_path}`}
                      className="w-100"
                      alt={recommendation.title}
                    />
                  </figure>
                </div>
              </div>
            </div>
            <div className="trend_2ilast bg_grey p-3 clearfix">
              <h5 className="title">
                <a className="col_red " href="#">
                  {recommendation.title}
                </a>
              </h5>
              <p className="mb-2 dotted-para">{recommendation.overview}</p>
              <span className="col_red">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </span>
              <p className="mb-0">{recommendation.popularity} Views</p>
            </div>{" "}
          </Link>
        </div>
      ))} */}
      <Footer />
    </>
  );
};

export default Detail;
