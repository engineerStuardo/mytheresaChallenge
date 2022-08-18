import React from 'react';
import {FlatList, View} from 'react-native';

import {MovieDescription} from '../MovieDescription';

import {IMovieProps} from '../../types/interfaces';

export const ShowWishList = ({wishList}: IMovieProps) => {
  return (
    <View style={{flexGrow: 1, marginBottom: 240}}>
      <FlatList
        data={wishList}
        renderItem={({item}) => (
          <View style={{marginBottom: 50}}>
            <MovieDescription
              posterPath={item.poster_path}
              title={item.title}
              description={item.overview}
            />
          </View>
        )}
      />
    </View>
  );
};
