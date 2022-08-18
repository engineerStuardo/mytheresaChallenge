import React from 'react';
import {Text} from 'react-native';

import {
  Container,
  Image,
  DetailContainer,
  AddWishlistButton,
  Title,
  ButtonText,
} from './styled';

import {IMovieDescriptionProps} from '../../types/interfaces';

import {Colors} from '../../theme/colors';

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
      <Container>
        <Image
          resizeMode="cover"
          source={{
            uri: `https://image.tmdb.org/t/p/w500${posterPath}`,
          }}
        />
      </Container>
      <DetailContainer>
        {detail && (
          <AddWishlistButton
            movieAlreadyAdded={movieAlreadyAdded}
            disabledColor={Colors.disabled}
            enabledColor={Colors.enabled}
            disabled={movieAlreadyAdded && movieAlreadyAdded.length > 0}
            onPress={() => {
              setWishList &&
                wishList &&
                movieSelected &&
                setWishList([...wishList, movieSelected]);
            }}>
            <ButtonText white={Colors.white}>
              {movieAlreadyAdded && movieAlreadyAdded.length > 0
                ? 'Added to wishlist'
                : 'Add to wishlist'}
            </ButtonText>
          </AddWishlistButton>
        )}
        <Title color={Colors.yellow}>{title}</Title>
        <Text>{description}</Text>
      </DetailContainer>
    </>
  );
};
