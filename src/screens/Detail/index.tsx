import React from 'react';
import {ScrollView} from 'react-native';

import {AdditionalInfo} from '../../components/AdditionalInfo';
import {MovieDescription} from '../../components/MovieDescription';

import {IDetailPops} from '../../types/interfaces';

export const Detail = ({movieSelected, setWishList, wishList}: IDetailPops) => {
  const movieAlreadyAdded = wishList.filter(
    movie => movie.id === movieSelected.id,
  );

  return (
    <ScrollView
      style={{
        height: '100%',
      }}
      contentContainerStyle={{
        paddingBottom: 150,
      }}>
      <MovieDescription
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
        language={movieSelected.original_language}
        date={movieSelected.release_date}
      />
    </ScrollView>
  );
};
