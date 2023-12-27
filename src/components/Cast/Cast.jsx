import { makeFullUrlForImages } from 'helpers/makeFullUrlForImages';
import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastByMovieId } from 'service/filmService';
import { Ul } from './Cast.styled';

const Cast = () => {
  const defaultImg = `https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700`;
  const { movieId } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fn = async () => {
      try {
        setLoading(true);
        const result = await getCastByMovieId(movieId);
        setData(result.cast);
      } catch (error) {
        setError(error);
        console.error('Error fetching cast:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fn();
  }, [movieId]);

  return (
    <Ul>
      {loading && <Loader />}
      {error && <p>Something went wrong...</p>}
      {data &&
        data.map(({ id, name, profile_path }) => (
          <li key={id}>
            <img
              src={
                profile_path ? makeFullUrlForImages(profile_path) : defaultImg
              }
              alt={name}
              width="150"
            />
            <h3>{name}</h3>
          </li>
        ))}
    </Ul>
  );
};

export default Cast;
