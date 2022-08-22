import React from 'react';
import {ShowWishList} from '../../components/ShowWishList';
import {TextMessage} from '../../components/TextMessage';
import useMovieStore from '../../store/useMovieStore';

export const WishList = () => {
  const {wishList} = useMovieStore();

  if (wishList.length === 0) {
    return <TextMessage text="Empty..." />;
  }

  return <ShowWishList />;
};
