import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import img from "../Images/pic1.jpg";
import Modal from "react-modal";
import { AiOutlinePlayCircle } from "react-icons/ai";

Modal.setAppElement("#root"); // Set the root element for React Modal

const Detail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const api_key = process.env.REACT_APP_API_KEY;

    // Fetch movie details
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`)
      .then((response) => {
        setMovie(response.data);

        // Fetch movie trailer
        axios
          .get(
            `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api_key}`
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
        console.error("Error fetching movie details:", error);
        // Handle the error, e.g., display an error message to the user
      });
  }, [id]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <section className="container detail-section my-4 ">
        <div className="detail-main-div p-5">
          <div className="row">
            <div className="col-4">
              <div className="detail-img-div">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  className="w-100"
                  alt={movie.title}
                />
              </div>
            </div>
            <div className="col-8">
              <div className="title">
                <h2>{movie.title}</h2>
              </div>

              <div className="release-year-genre d-flex pb-2">
                <p className="r-border">R</p>
                <p> {movie.release_date}</p>
                <p>
                  {movie.genres[0].name}, {movie.genres[1].name}
                </p>
                <p>{movie.runtime} mints</p>
              </div>
              <div className="trailer">
                <a
                  href={trailer}
                  onClick={(e) => {
                    e.preventDefault(); // Prevent the default behavior of the button (opening a new tab)
                    openModal();
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlinePlayCircle /> Watch Trailer
                </a>
              </div>
              <div className="modal">
                {" "}
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
                      height="100% "
                      src={trailer}
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                </Modal>
              </div>
              <div className="tagline-div">
                {" "}
                <p>{movie.tagline}</p>
              </div>
              <div className="overview-div">
                <h4>Overview</h4>
                <p>{movie.overview}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Detail;
