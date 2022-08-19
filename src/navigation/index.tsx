import React from 'react';

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
  return (
    <>
      {isWishList ? (
        <WishList wishList={wishList} />
      ) : isHome ? (
        <Home
          setMovieSelected={setMovieSelected}
          setIsHome={setIsHome}
          setCategory={setCategory}
        />
      ) : (
        <Detail
          movieSelected={movieSelected}
          setWishList={setWishList}
          wishList={wishList}
          category={category}
        />
      )}
    </>
  );
};
