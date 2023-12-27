import { Routes, Route, Navigate } from 'react-router-dom';

import Cast from './Cast/Cast';

import Reviews from './Reviews/Reviews';
import SharedLayout from './SharedLayout/SharedLayout';

import { lazy } from 'react';
const HomePage = lazy(() => import('pages/HomePage'));
const FilmSearchPage = lazy(() => import('pages/FilmSearchPage'));
const FilmPage = lazy(() => import('pages/FilmPage'));

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
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
