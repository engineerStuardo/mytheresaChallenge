import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';

import {IMovieCarouselProps} from '../../types/interfaces';

export const MovieCarousel = ({
  title,
  data,
  setMovieSelected,
  setIsHome,
}: IMovieCarouselProps) => {
  return (
    <>
      <View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginTop: 20,
            marginBottom: 10,
          }}>
          {title}
        </Text>
      </View>
      <View>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                setMovieSelected(item);
                setIsHome(false);
              }}
              style={{}}>
              <Image
                resizeMode="cover"
                style={{
                  height: 200,
                  width: 120,
                  borderRadius: 20,
                  marginRight: 10,
                }}
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                }}
              />
            </TouchableOpacity>
          )}
          horizontal={true}
        />
      </View>
    </>
  );
};
