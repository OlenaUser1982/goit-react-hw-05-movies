import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'service/filmService';
import { Button, Form, Input } from './pages.styled';
import Loader from 'components/Loader/Loader';
const FilmSearchPage = () => {
  const [movies, setMovies] = useState(null);
  const [searchParam, setSearchParam] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const query = searchParam.get('query');
    if (!query) return;
    const fn = async () => {
      const data = await getMoviesByQuery(query);
      setMovies(data.results);
    };
    try {
      setIsLoading(true);
      fn();
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [searchParam]);
  const handleSubmit = e => {
    e.preventDefault();
    setSearchParam({ query: e.target.elements.search.value });
  };
  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Something went wrong...</p>}
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="search" />
        <Button type="submit">Submit</Button>
      </Form>
      {movies && <MoviesList movies={movies} />}
    </>
  );
};

export default FilmSearchPage;
