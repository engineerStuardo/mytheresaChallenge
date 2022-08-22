import React from 'react';
import {FlatList} from 'react-native';

import {MovieDescription} from '../MovieDescription';

import {Container} from './styled';
import useMovieStore from '../../store/useMovieStore';
import {Movie} from '../../types/interfaces';

export const ShowWishList = () => {
  const {wishList} = useMovieStore();

  return (
    <Container>
      <FlatList
        data={wishList}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}: {item: Movie}) => (
          <MovieDescription movie={item} />
        )}
      />
    </Container>
  );
};
