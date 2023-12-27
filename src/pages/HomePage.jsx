import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';

import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'service/filmService';
const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fn = async () => {
      const { results } = await getTrendingMovies();
      setMovies(results);
    };
    try {
      setIsLoading(true);
      fn();
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, []);
  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Something went wrong...</p>}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};
export default HomePage;
