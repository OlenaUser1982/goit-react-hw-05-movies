import { makeFullUrlForImages } from 'helpers/makeFullUrlForImages';
import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastByMovieId } from 'service/filmService';
import { Ul } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fn = async () => {
      try {
        setLoading(true);
        const result = await getCastByMovieId(movieId);
        setData(result.cast);
      } catch (error) {
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
      {data &&
        data.map(({ id, name, profile_path }) => (
          <li key={id}>
            <img
              src={makeFullUrlForImages(profile_path)}
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
