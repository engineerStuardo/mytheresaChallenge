const apiUrl: string = 'https://api.themoviedb.org/3';
const apiKey: string = '949eb751d5ca24f1d34b3041669ce02f';

import {APIResponse} from '../types/interfaces';

export const getPopularMovies = async () => {
  const resp = await fetch(`${apiUrl}/movie/popular?api_key=${apiKey}`);
  const data: APIResponse = await resp.json();
  return data;
};

export const getUpcomingMovies = async () => {
  const resp = await fetch(`${apiUrl}/movie/upcoming?api_key=${apiKey}`);
  const data: APIResponse = await resp.json();
  return data;
};

export const getFamilyMovies = async () => {
  const resp = await fetch(
    `${apiUrl}/discover/movie?api_key=${apiKey}&with_genres=10751`,
  );
  const data: APIResponse = await resp.json();
  return data;
};
