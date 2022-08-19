import React from 'react';
import {View, Text} from 'react-native';

import {MovieCarousel} from '../../components/MovieCarousel';
import {LoadingSpinner} from '../../components/LoadingSpinner';
import {ScrollView} from './styled';

import {IHomeProps} from '../../types/interfaces';
import {useHome} from '../../hooks/useHome';

export const Home = ({
  setMovieSelected,
  setIsHome,
  setCategory,
}: IHomeProps) => {
  const {popularMovies, upcomingMovies, familyMovies, isError, isLoading} =
    useHome();

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
          setCategory={setCategory}
        />
      )}
      {upcomingMovies && (
        <MovieCarousel
          title="Upcoming Movies"
          data={upcomingMovies}
          setMovieSelected={setMovieSelected}
          setIsHome={setIsHome}
          setCategory={setCategory}
        />
      )}
      {familyMovies && (
        <MovieCarousel
          title="Family Movies"
          data={familyMovies}
          setMovieSelected={setMovieSelected}
          setIsHome={setIsHome}
          setCategory={setCategory}
        />
      )}
    </ScrollView>
  );
};
