import React from 'react';

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
import {useMovieDescription} from '../../hooks/useMovieDescription';

export const MovieDescription = ({
  posterPath,
  setWishList,
  wishList,
  movieSelected,
  title,
  description,
  detail,
  category,
}: IMovieDescriptionProps) => {
  const {font, colorButton, buttonStyle} = useMovieDescription(category || '');

  const movieAlreadyAdded =
    wishList &&
    movieSelected &&
    wishList.filter(movie => movie.id === movieSelected.id);

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
