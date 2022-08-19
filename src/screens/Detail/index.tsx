import React from 'react';

import {ScrollView} from './styled';

import {AdditionalInfo} from '../../components/AdditionalInfo';
import {MovieDescription} from '../../components/MovieDescription';

import {IDetailPops} from '../../types/interfaces';

export const Detail = ({
  movieSelected,
  setWishList,
  wishList,
  category,
}: IDetailPops) => {
  const movieAlreadyAdded = wishList.filter(
    movie => movie.id === movieSelected.id,
  );

  return (
    <ScrollView>
      <MovieDescription
        category={category}
        posterPath={movieSelected.poster_path}
        setWishList={setWishList}
        wishList={wishList}
        movieSelected={movieSelected}
        movieAlreadyAdded={movieAlreadyAdded}
        title={movieSelected.title}
        description={movieSelected.overview}
        detail
      />
      <AdditionalInfo
        category={category}
        language={movieSelected.original_language}
        date={movieSelected.release_date}
      />
    </ScrollView>
  );
};
