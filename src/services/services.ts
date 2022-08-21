import env from 'react-native-config';

import {APIResponse} from '../types/interfaces';

export const getPopularMovies = async () => {
  const resp = await fetch(
    `${env.BASE_URL}/movie/popular?api_key=${env.API_KEY}`,
  );
  const data: APIResponse = await resp.json();
  return data;
};

export const getUpcomingMovies = async () => {
  const resp = await fetch(
    `${env.BASE_URL}/movie/upcoming?api_key=${env.API_KEY}`,
  );
  const data: APIResponse = await resp.json();
  return data;
};

export const getFamilyMovies = async () => {
  const resp = await fetch(
    `${env.BASE_URL}/discover/movie?api_key=${env.API_KEY}&with_genres=10751`,
  );
  const data: APIResponse = await resp.json();
  return data;
};
