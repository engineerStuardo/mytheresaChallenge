import React from 'react';
import {LoadingSpinner} from '../../components/LoadingSpinner';
import {MovieCarousel} from '../../components/MovieCarousel';
import {TextMessage} from '../../components/TextMessage';
import {WishListButton} from '../../components/WishListButton';
import {useHome} from '../../hooks/useHome';

import {ScrollView} from './styled';

export const Home = () => {
  const {popularMovies, upcomingMovies, familyMovies, isError, isLoading} =
    useHome();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError || !popularMovies || !upcomingMovies || !familyMovies) {
    return <TextMessage text="Error with server api call..." />;
  }

  return (
    <>
      <ScrollView>
        <WishListButton />
        {popularMovies && (
          <MovieCarousel title="Popular Movies" data={popularMovies} />
        )}
        {upcomingMovies && (
          <MovieCarousel title="Upcoming Movies" data={upcomingMovies} />
        )}
        {familyMovies && (
          <MovieCarousel title="Family Movies" data={familyMovies} />
        )}
      </ScrollView>
    </>
  );
};
