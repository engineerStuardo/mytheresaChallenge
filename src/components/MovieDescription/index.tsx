import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import {IMovieDescriptionProps} from '../../types/interfaces';

export const MovieDescription = ({
  posterPath,
  setWishList,
  wishList,
  movieSelected,
  movieAlreadyAdded,
  title,
  description,
  detail,
}: IMovieDescriptionProps) => {
  return (
    <>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          resizeMode="cover"
          style={{
            height: 300,
            width: 220,
            borderRadius: 20,
          }}
          source={{
            uri: `https://image.tmdb.org/t/p/w500${posterPath}`,
          }}
        />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
          padding: 10,
        }}>
        {detail && (
          <TouchableOpacity
            style={{
              marginBottom: 10,
              padding: 10,
              borderRadius: 8,
              backgroundColor:
                movieAlreadyAdded && movieAlreadyAdded.length > 0
                  ? '#717fd9'
                  : '#343e80',
            }}
            disabled={movieAlreadyAdded && movieAlreadyAdded.length > 0}
            onPress={() => {
              setWishList &&
                wishList &&
                movieSelected &&
                setWishList([...wishList, movieSelected]);
            }}>
            <Text style={{color: 'white'}}>
              {movieAlreadyAdded && movieAlreadyAdded.length > 0
                ? 'Added to wishlist'
                : 'Add to wishlist'}
            </Text>
          </TouchableOpacity>
        )}
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 10,
            color: '#ecad00',
          }}>
          {title}
        </Text>
        <Text>{description}</Text>
      </View>
    </>
  );
};
