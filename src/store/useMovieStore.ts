import create from 'zustand';
import {Movie} from '../types/interfaces';

interface Props {
  movieSelected: Movie;
  wishList: Movie[];
  category: string;
  detail: boolean;
  setMovieSelected: (movieSelected: Movie) => void;
  setWishList: (movie: Movie) => void;
  setCategory: (category: string) => void;
  setDetail: (detail: boolean) => void;
}

const movieSelectedInitialState: Movie = {
  adult: false,
  backdrop_path: '',
  genre_ids: [],
  id: 0,
  //@ts-ignore
  original_language: '',
  original_title: '',
  overview: '',
  popularity: 8660.942,
  poster_path: '',
  //@ts-ignore
  release_date: '',
  title: '',
  video: false,
  vote_average: 0,
  vote_count: 0,
};

const useMovieStore = create<Props>((set, get) => ({
  movieSelected: movieSelectedInitialState,
  wishList: [],
  category: '',
  detail: false,
  setMovieSelected: (movieSelected: Movie) => {
    set({movieSelected});
  },
  setWishList: (movie: Movie) => {
    set({wishList: [...get().wishList, movie]});
  },
  setCategory: (category: string) => {
    set({category});
  },
  setDetail: (detail: boolean) => {
    set({detail});
  },
}));

export default useMovieStore;
