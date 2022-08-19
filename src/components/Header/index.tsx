import React from 'react';

import {WishListButton} from '../WishListButton';
import {BackHomeButton} from '../BackHomeButton';
import {HeaderTitle} from '../HeaderTitle';

import {IHeaderProps} from '../../types/interfaces';

export const Header = ({
  isHome,
  setIsHome,
  setIsWishList,
  isWishList,
  setCategory,
}: IHeaderProps) => {
  return (
    <>
      <HeaderTitle isWishList={isWishList} isHome={isHome} />
      {!isHome && (
        <BackHomeButton
          isWishList={isWishList}
          setIsWishList={setIsWishList}
          setIsHome={setIsHome}
        />
      )}
      {isHome && !isWishList && (
        <WishListButton
          setIsWishList={setIsWishList}
          setIsHome={setIsHome}
          setCategory={setCategory}
        />
      )}
    </>
  );
};
