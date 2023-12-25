import { Link } from 'react-router-dom';

const MovieDetails = ({ data }) => {
  const { movieId } = data.params;

  return (
    <div className="movie-details">
      <h2>Movie Details Page</h2>
      <p>Movie ID: {movieId}</p>
      <nav>
        <ul>
          <li>
            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MovieDetails;
