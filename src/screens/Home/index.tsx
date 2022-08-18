import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

import {MovieCarousel} from '../../components/MovieCarousel';
import {LoadingSpinner} from '../../components/LoadingSpinner';
import {ScrollView} from './styled';

import {
  getPopularMovies,
  getFamilyMovies,
  getUpcomingMovies,
} from '../../services/services';

import {IHomeProps, Movie} from '../../types/interfaces';

export const Home = ({setMovieSelected, setIsHome}: IHomeProps) => {
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
      .catch(() => setIsError(true));
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return (
      <View>
        <Text>Error with the api...</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      {popularMovies && (
        <MovieCarousel
          title="Popular Movies"
          data={popularMovies}
          setMovieSelected={setMovieSelected}
          setIsHome={setIsHome}
        />
      )}
      {upcomingMovies && (
        <MovieCarousel
          title="Upcoming Movies"
          data={upcomingMovies}
          setMovieSelected={setMovieSelected}
          setIsHome={setIsHome}
        />
      )}
      {familyMovies && (
        <MovieCarousel
          title="Family Movies"
          data={familyMovies}
          setMovieSelected={setMovieSelected}
          setIsHome={setIsHome}
        />
      )}
    </ScrollView>
  );
};
