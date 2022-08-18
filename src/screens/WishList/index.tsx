import React from 'react';

import {EmptyWishList} from '../../components/EmptyWishList';
import {ShowWishList} from '../../components/ShowWishList';

import {IMovieProps} from '../../types/interfaces';

export const WishList = ({wishList}: IMovieProps) => {
  if (wishList.length === 0) {
    return <EmptyWishList />;
  }

  return <ShowWishList wishList={wishList} />;
};
