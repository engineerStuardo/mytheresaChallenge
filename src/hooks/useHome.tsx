import {useEffect, useState} from 'react';

import {
  getFamilyMovies,
  getPopularMovies,
  getUpcomingMovies,
} from '../services/services';
import {Movie} from '../types/interfaces';

export const useHome = () => {
  const [popularMovies, setPopularMovies] = useState<Movie[]>();
  const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>();
  const [familyMovies, setFamilyMovies] = useState<Movie[]>();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getMovies = () => {
    return Promise.all([
      getUpcomingMovies(),
      getPopularMovies(),
      getFamilyMovies(),
    ]);
  };

  useEffect(() => {
    setIsLoading(true);
    getMovies()
      .then(([upcomingMoviesData, popularMoviesData, familyMoviesData]) => {
        setUpcomingMovies(upcomingMoviesData.results);
        setPopularMovies(popularMoviesData.results);
        setFamilyMovies(familyMoviesData.results);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  return {popularMovies, upcomingMovies, familyMovies, isError, isLoading};
};
