import React from 'react';
import {FlatList} from 'react-native';

import {Title} from './styled';

import {IMovieCarouselProps} from '../../types/interfaces';
import {ImageItem} from '../ImageItem';

export const MovieCarousel = ({title, data}: IMovieCarouselProps) => {
  return (
    <>
      <Title>{title}</Title>
      <FlatList
        data={data}
        horizontal={true}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <ImageItem item={item} title={title} />}
      />
    </>
  );
};
