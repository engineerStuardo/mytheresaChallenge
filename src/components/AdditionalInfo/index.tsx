import React from 'react';
import {Platform} from 'react-native';

import {Container, Title, Text} from './styled';

import {IAdditionalInfoProps} from '../../types/interfaces';

export const AdditionalInfo = ({
  language,
  date,
  category,
}: IAdditionalInfoProps) => {
  const font =
    category === 'Popular Movies'
      ? Platform.OS === 'ios'
        ? 'IndieFlower'
        : 'IndieFlower-Regular'
      : category === 'Upcoming Movies'
      ? Platform.OS === 'ios'
        ? 'ShadowsIntoLight'
        : 'ShadowsIntoLight-Regular'
      : category === 'Family Movies'
      ? 'Lobster-Regular'
      : 'Silkscreen-Regular';

  return (
    <Container>
      <Title font={font}>Additional Information</Title>
      <Text font={font}>Language: {language}</Text>
      <Text font={font}>Release date: {date.toString()}</Text>
    </Container>
  );
};
