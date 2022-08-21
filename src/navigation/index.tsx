import React from 'react';
import {useHome} from '../hooks/useHome';

import {Detail} from '../screens/Detail';
import {Home} from '../screens/Home';
import {WishList} from '../screens/WishList';

import {INavigationProps} from '../types/interfaces';

export const Navigation = ({
  isWishList,
  wishList,
  isHome,
  setMovieSelected,
  setIsHome,
  setCategory,
  movieSelected,
  setWishList,
  category,
}: INavigationProps) => {
  const {popularMovies, upcomingMovies, familyMovies, isError, isLoading} =
    useHome();

  if (isWishList) {
    return <WishList wishList={wishList} />;
  }

  if (isHome) {
    return (
      <Home
        setMovieSelected={setMovieSelected}
        setIsHome={setIsHome}
        setCategory={setCategory}
        popularMovies={popularMovies}
        upcomingMovies={upcomingMovies}
        familyMovies={familyMovies}
        isError={isError}
        isLoading={isLoading}
      />
    );
  }
  return (
    <Detail
      movieSelected={movieSelected}
      setWishList={setWishList}
      wishList={wishList}
      category={category}
    />
  );
};
