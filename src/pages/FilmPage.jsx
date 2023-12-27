import { makeFullUrlForImages } from 'helpers/makeFullUrlForImages';
import { Back, Ul, Grate, P, Obgrate, Span } from './pages.styled';
import { makeGenresList } from 'helpers/makeGenresList';
import { useEffect, useState, Suspense, useRef } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from 'service/filmService';
import Loader from 'components/Loader/Loader';
const FilmPage = () => {
  const [data, setData] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');
  useEffect(() => {
    const fn = async () => {
      const data = await getMovieById(movieId);
      setData(data);
    };
    try {
      setIsLoading(true);
      fn();
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [movieId]);
  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Something went wrong...</p>}
      {data && (
        <Obgrate>
          {data && (
            <div>
              <Back to={backLink.current}>Go back</Back>
              <div>
                <Grate>
                  <img
                    src={makeFullUrlForImages(data.poster_path)}
                    alt={data.title}
                    width="250"
                  />
                  <div>
                    <h2>
                      <Span>{data.title}</Span>
                    </h2>
                    <Grate>
                      <p>User Score: </p>
                      <p> {data.vote_average * 10}%</p>
                    </Grate>
                    <P>Overview </P>
                    <p>{data.overview}</p>
                    <P>Genres </P>
                    <p>{makeGenresList(data.genres)} </p>
                  </div>
                </Grate>
              </div>
              <Ul>
                <li>
                  <Back to="cast">Cast</Back>
                </li>
                <li>
                  <Back to="reviews">Reviews</Back>
                </li>
              </Ul>
              <Suspense>
                <Outlet />
              </Suspense>
            </div>
          )}
        </Obgrate>
      )}
    </>
  );
};
export default FilmPage;
