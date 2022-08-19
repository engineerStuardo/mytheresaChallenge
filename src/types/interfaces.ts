export interface IHeaderProps {
  isHome: boolean;
  setIsHome: React.Dispatch<React.SetStateAction<boolean>>;
  setIsWishList: React.Dispatch<React.SetStateAction<boolean>>;
  isWishList: boolean;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

export interface IHeaderTitleProps {
  isWishList: boolean;
  isHome: boolean;
}

export interface IBackHomeButtonProps {
  isWishList: boolean;
  setIsWishList: React.Dispatch<React.SetStateAction<boolean>>;
  setIsHome: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IWishListButton {
  setIsWishList: React.Dispatch<React.SetStateAction<boolean>>;
  setIsHome: React.Dispatch<React.SetStateAction<boolean>>;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

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

export interface IMovieProps {
  wishList: Movie[];
}

export interface IMovieDescriptionProps {
  posterPath: string;
  setWishList?: React.Dispatch<React.SetStateAction<Movie[]>>;
  wishList?: Movie[];
  movieSelected?: Movie;
  movieAlreadyAdded?: Movie[];
  title: string;
  description: string;
  detail?: boolean;
  category?: string;
}

export interface IHomeProps {
  setMovieSelected: React.Dispatch<React.SetStateAction<Movie | undefined>>;
  setIsHome: React.Dispatch<React.SetStateAction<boolean>>;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

export interface IMovieCarouselProps {
  title: string;
  data: Movie[];
  setMovieSelected: React.Dispatch<React.SetStateAction<any>>;
  setIsHome: React.Dispatch<React.SetStateAction<boolean>>;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

export interface IDetailPops {
  movieSelected: Movie | any;
  setWishList: React.Dispatch<React.SetStateAction<Movie[]>>;
  wishList: Movie[];
  category: string;
}

export interface IAdditionalInfoProps {
  language: string;
  date: Date;
  category: string;
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
