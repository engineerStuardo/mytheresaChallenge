import {useState} from 'react';
import {Platform} from 'react-native';

import {
  IHeaderProps,
  INavigationProps,
  Movie,
  StatusBarStyle,
} from '../types/interfaces';

export const useApp = () => {
  const [isHome, setIsHome] = useState<boolean>(true);
  const [movieSelected, setMovieSelected] = useState<Movie>();
  const [isWishList, setIsWishList] = useState<boolean>(false);
  const [wishList, setWishList] = useState<Movie[]>([]);
  const [category, setCategory] = useState<string>('');

  const statusBarStyle: StatusBarStyle =
    Platform.OS === 'android' ? 'light-content' : 'dark-content';

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

  return {navigationProps, headerProps, statusBarStyle};
};
