import { Link, useLocation } from 'react-router-dom';
import { makeFullUrlForImages } from 'helpers/makeFullUrlForImages';
import { Ul, Img } from './MoviesList.styled';
const MoviesList = ({ movies }) => {
  const defaultImg = `https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700`;
  const location = useLocation();
  return (
    <Ul>
      {movies.map(({ id, title, poster_path }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <Img
              src={
                makeFullUrlForImages(poster_path)
                  ? [`https://image.tmdb.org/t/p/w500${poster_path}`]
                  : defaultImg
              }
              width="250"
              alt={title}
            />
          </Link>
        </li>
      ))}
    </Ul>
  );
};

export default MoviesList;
