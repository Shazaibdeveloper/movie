import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const api_key = process.env.REACT_APP_API_KEY;

    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`)
      .then((response) => setMovie(response.data))
      .catch((error) => {
        console.error("Error fetching movie details:", error);
        // Handle the error, e.g., display an error message to the user
      });
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      {/* Display other movie details */}
    </div>
  );
};

export default Detail;
