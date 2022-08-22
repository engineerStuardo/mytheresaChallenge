import React from 'react';

import {Container, Title, Text} from './styled';

import {useMovieDescription} from '../../hooks/useMovieDescription';
import useMovieStore from '../../store/useMovieStore';

export const AdditionalInfo = () => {
  const {category, movieSelected} = useMovieStore();
  const {font} = useMovieDescription(category);

  return (
    <Container>
      <Title font={font}>Additional Information</Title>
      <Text font={font}>Language: {movieSelected.original_language}</Text>
      <Text font={font}>
        Release date: {movieSelected.release_date.toString()}
      </Text>
    </Container>
  );
};
