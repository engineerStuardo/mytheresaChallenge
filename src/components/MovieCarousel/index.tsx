import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';

import {Title, Image} from './styled';

import {IMovieCarouselProps} from '../../types/interfaces';

export const MovieCarousel = ({
  title,
  data,
  setMovieSelected,
  setIsHome,
  setCategory,
}: IMovieCarouselProps) => {
  return (
    <>
      <Title>{title}</Title>
      <FlatList
        data={data}
        horizontal={true}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              setCategory(title);
              setMovieSelected(item);
              setIsHome(false);
            }}
            style={{}}>
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
              }}
            />
          </TouchableOpacity>
        )}
      />
    </>
  );
};
