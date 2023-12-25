import { makeFullUrlForImages } from 'helpers/makeFullUrlForImages';
import { H2, Back, Ul, Div, Grate, P } from './pages.styled';
import { makeGenresList } from 'helpers/makeGenresList';
import { useEffect, useState, Suspense, useRef } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from 'service/filmService';
const FilmPage = () => {
  const [data, setData] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');
  useEffect(() => {
    const fn = async () => {
      const data = await getMovieById(movieId);
      setData(data);
    };

    fn();
  }, [movieId]);
  return (
    <>
      {data && (
        <Div>
          <Back to={backLink.current}>Go back</Back>
          <Grate>
            <img
              src={makeFullUrlForImages(data.poster_path)}
              alt={data.title}
              width="250"
            />
            <H2>
              <span>{data.title}</span>
            </H2>
            <P>User Score: </P>
            <p> {data.vote_average * 10}%</p>
            <P>Overview </P>
            <p>{data.overview}</p>
            <P>Genres </P>
            <p>{makeGenresList(data.genres)} </p>
          </Grate>
          <Ul>
            <li>
              <Back to="cast">Cast</Back>
            </li>
            <li>
              <Back>Reviews</Back>
            </li>
          </Ul>
          <Suspense>
            <Outlet />
          </Suspense>
        </Div>
      )}
    </>
  );
};
export default FilmPage;
