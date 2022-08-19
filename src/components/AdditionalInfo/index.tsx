import React from 'react';

import {Container, Title, Text} from './styled';

import {IAdditionalInfoProps} from '../../types/interfaces';
import {useMovieDescription} from '../../hooks/useMovieDescription';

export const AdditionalInfo = ({
  language,
  date,
  category,
}: IAdditionalInfoProps) => {
  const {font} = useMovieDescription(category);

  return (
    <Container>
      <Title font={font}>Additional Information</Title>
      <Text font={font}>Language: {language}</Text>
      <Text font={font}>Release date: {date.toString()}</Text>
    </Container>
  );
};
