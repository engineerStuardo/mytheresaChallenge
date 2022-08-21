import React from 'react';

import {MovieCarousel} from '../../components/MovieCarousel';
import {LoadingSpinner} from '../../components/LoadingSpinner';
import {TextMessage} from '../../components/TextMessage';
import {ScrollView} from './styled';

import {IHomeProps} from '../../types/interfaces';

export const Home = ({
  setMovieSelected,
  setIsHome,
  setCategory,
  popularMovies,
  upcomingMovies,
  familyMovies,
  isError,
  isLoading,
}: IHomeProps) => {
  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError || !popularMovies || !upcomingMovies || !familyMovies) {
    return <TextMessage text="Error with server api call..." />;
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
