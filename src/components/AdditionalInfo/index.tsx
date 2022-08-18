import React from 'react';
import {Text} from 'react-native';

import {Container, Title} from './styled';

import {IAdditionalInfoProps} from '../../types/interfaces';

export const AdditionalInfo = ({language, date}: IAdditionalInfoProps) => {
  return (
    <Container>
      <Title>Additional Information</Title>
      <Text>Language: {language}</Text>
      <Text>Release date: {date.toString()}</Text>
    </Container>
  );
};
