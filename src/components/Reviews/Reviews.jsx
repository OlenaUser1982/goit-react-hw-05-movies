import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsByMovieId } from 'service/filmService';

const Reviews = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  // const [error, setError] = useState(null);
  useEffect(() => {
    const fn = async () => {
      try {
        setLoading(true);
        const result = await getReviewsByMovieId(movieId);
        setData(result.reviews);
      } catch (error) {
        console.error('Error fetching reviews:', error.message);
      } finally {
        setLoading(false);
      }
    };
    fn();
  }, [movieId]);
  return (
    <ul>
      {loading && <Loader />}
      {data &&
        data.map(({ id, author, content }) => (
          <li key={id}>
            <h3>{author}</h3>
            <p>{content}</p>
          </li>
        ))}
    </ul>
  );
};

export default Reviews;
