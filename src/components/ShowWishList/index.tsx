import React from 'react';
import {FlatList} from 'react-native';

import {MovieDescription} from '../MovieDescription';

import {Container, ItemContainer} from './styled';

import {IMovieProps} from '../../types/interfaces';

export const ShowWishList = ({wishList}: IMovieProps) => {
  return (
    <Container>
      <FlatList
        data={wishList}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <ItemContainer>
            <MovieDescription
              posterPath={item.poster_path}
              title={item.title}
              description={item.overview}
            />
          </ItemContainer>
        )}
      />
    </Container>
  );
};
