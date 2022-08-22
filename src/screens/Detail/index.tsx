import React from 'react';
import {AdditionalInfo} from '../../components/AdditionalInfo';
import {MovieDescription} from '../../components/MovieDescription';
import {ScrollView} from './styled';
import useMovieStore from '../../store/useMovieStore';

export const Detail = () => {
  const {movieSelected} = useMovieStore();
  return (
    <ScrollView>
      <MovieDescription movie={movieSelected} />
      <AdditionalInfo />
    </ScrollView>
  );
};
