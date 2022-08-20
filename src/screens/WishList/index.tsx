import React from 'react';

import {TextMessage} from '../../components/TextMessage';
import {ShowWishList} from '../../components/ShowWishList';

import {IMovieProps} from '../../types/interfaces';

export const WishList = ({wishList}: IMovieProps) => {
  if (wishList.length === 0) {
    return <TextMessage text="Empty..." />;
  }

  return <ShowWishList wishList={wishList} />;
};
