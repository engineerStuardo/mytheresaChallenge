import React from 'react';
import {Platform} from 'react-native';

import {
  Container,
  Image,
  DetailContainer,
  AddWishlistButton,
  Title,
  ButtonText,
  Description,
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
  category,
}: IMovieDescriptionProps) => {
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

  const colorButton =
    category === 'Popular Movies'
      ? Colors.yellow
      : category === 'Upcoming Movies'
      ? Colors.primary
      : Colors.green;

  const buttonStyle =
    category === 'Popular Movies'
      ? '100px'
      : category === 'Upcoming Movies'
      ? '10px'
      : '0px';

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
            colorButton={colorButton}
            buttonStyle={buttonStyle}
            disabled={movieAlreadyAdded && movieAlreadyAdded.length > 0}
            onPress={() => {
              setWishList &&
                wishList &&
                movieSelected &&
                setWishList([...wishList, movieSelected]);
            }}>
            <ButtonText white={Colors.white} font={font}>
              {movieAlreadyAdded && movieAlreadyAdded.length > 0
                ? 'Added to wishlist'
                : 'Add to wishlist'}
            </ButtonText>
          </AddWishlistButton>
        )}
        <Title color={Colors.yellow} font={font}>
          {title}
        </Title>
        <Description font={font}>{description}</Description>
      </DetailContainer>
    </>
  );
};
