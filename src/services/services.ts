import env from 'react-native-config';

import axios from '../lib/axiosClient';
import {APIResponse} from '../types/interfaces';

export const getPopularMovies = async () => {
  const {data} = await axios.get(`/movie/popular?api_key=${env.API_KEY}`);
  const results: APIResponse = data;
  return results;
};

export const getUpcomingMovies = async () => {
  const {data} = await axios.get(`/movie/upcoming?api_key=${env.API_KEY}`);
  const results: APIResponse = data;
  return results;
};

export const getFamilyMovies = async () => {
  const {data} = await axios.get(
    `/discover/movie?api_key=${env.API_KEY}&with_genres=10751`,
  );
  const results: APIResponse = data;
  return results;
};
