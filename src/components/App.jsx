import { Routes, Route } from 'react-router-dom';
// import HomePage from 'pages/HomePage';
// import FilmSearchPage from 'pages/FilmSearchPage';
// import MovieDetails from './MovieDetails';
import Cast from './Cast/Cast';
// import Loader from './Loader/Loader';
import Reviews from './Reviews/Reviews';
import SharedLayout from './SharedLayout/SharedLayout';
// import FilmPage from 'pages/FilmPage';
import { lazy } from 'react';
const HomePage = lazy(() => import('pages/HomePage'));
const FilmSearchPage = lazy(() => import('pages/FilmSearchPage'));
const FilmPage = lazy(() => import('pages/FilmPage'));
// const [isLoading, setIsLoading] = useState(false);
// const [showLoadMore, setShowLoadMore] = useState(false);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout></SharedLayout>}>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<FilmSearchPage />} />
        <Route path="/movies/:movieId" element={<FilmPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
