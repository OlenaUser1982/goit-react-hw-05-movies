import MoviesList from 'components/MoviesList/MoviesList';

import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'service/filmService';
const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fn = async () => {
      const { results } = await getTrendingMovies();
      setMovies(results);
    };
    fn();
  }, []);
  return <MoviesList movies={movies}></MoviesList>;
};
export default HomePage;
