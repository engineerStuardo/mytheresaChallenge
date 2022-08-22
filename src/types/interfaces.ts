export enum OriginalLanguage {
  En = 'en',
  Ja = 'ja',
}

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: OriginalLanguage;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export interface APIResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface IMovieCarouselProps {
  title: string;
  data: Movie[];
}

export interface IAddWishlistButtonProps {
  buttonStyle: string;
  movieAlreadyAdded: [];
  disabledColor: string;
  enabledColor: string;
  colorButton: string;
}

export interface IButtonTextProps {
  font: string;
  white: string;
}

export interface ITitleProps {
  color: string;
  font: string;
}

export interface IDescriptionProps {
  font: string;
}

export interface IAddionalInfoProps {
  font: string;
}

export interface ITextProps {
  colorText: string;
  backgroundColor: string;
}

export interface INavigationProps {
  isWishList: boolean;
  wishList: Movie[];
  isHome: boolean;
  setMovieSelected: React.Dispatch<React.SetStateAction<any>>;
  setIsHome: React.Dispatch<React.SetStateAction<boolean>>;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  movieSelected?: Movie;
  setWishList: React.Dispatch<React.SetStateAction<Movie[]>>;
  category: string;
}

export type StatusBarStyle = 'light-content' | 'dark-content';

export type ParamList = {
  WishList: undefined;
  Detail: undefined;
};
