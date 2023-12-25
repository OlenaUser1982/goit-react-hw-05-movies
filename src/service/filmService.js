import axios from 'axios';
const API_KEY = 'aeefe06fbbe4ba7db8cb4cd1bd83ad48';
export const getTrendingMovies = async () => {
  const { data } = await axios(
    `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`
  );
  return data;
};
export const getMovieById = async id => {
  const { data } = await axios(
    `
https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  );
  return data;
};

export const getCastByMovieId = async id => {
  const { data } = await axios(
    `
https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`
  );
  return data;
};
export const getReviewsByMovieId = async id => {
  const { data } = await axios(
    `
https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}`
  );
  return data;
};
export const getMoviesByQuery = async query => {
  const { data } = await axios(
    `
https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`
  );
  return data;
};
