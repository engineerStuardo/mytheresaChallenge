import {useState} from 'react';

import {IHeaderProps, INavigationProps, Movie} from '../types/interfaces';

export const useApp = () => {
  const [isHome, setIsHome] = useState<boolean>(true);
  const [movieSelected, setMovieSelected] = useState<Movie>();
  const [isWishList, setIsWishList] = useState<boolean>(false);
  const [wishList, setWishList] = useState<Movie[]>([]);
  const [category, setCategory] = useState<string>('');

  const navigationProps: INavigationProps = {
    isWishList,
    wishList,
    isHome,
    setMovieSelected,
    setIsHome,
    setCategory,
    movieSelected,
    setWishList,
    category,
  };

  const headerProps: IHeaderProps = {
    isHome,
    setIsHome,
    setIsWishList,
    isWishList,
    setCategory,
  };

  return {navigationProps, headerProps};
};
