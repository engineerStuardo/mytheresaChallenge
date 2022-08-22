import React from 'react';
import env from 'react-native-config';

import {
  ItemContainer,
  Container,
  Image,
  DetailContainer,
  AddWishlistButton,
  Title,
  ButtonText,
  Description,
} from './styled';

import {Colors} from '../../theme/colors';
import {useMovieDescription} from '../../hooks/useMovieDescription';
import useMovieStore from '../../store/useMovieStore';
import {Movie} from '../../types/interfaces';

export const MovieDescription = ({movie}: {movie: Movie}) => {
  const {category, wishList, movieSelected, setWishList, detail} =
    useMovieStore();

  const {font, colorButton, buttonStyle} = useMovieDescription(category);

  const movieAlreadyAdded = wishList.filter(
    (movieItem: Movie) => movieItem.id === movieSelected.id,
  );

  return (
    <ItemContainer>
      <Container>
        <Image
          resizeMode="cover"
          source={
            movie.poster_path
              ? {
                  uri: `${env.IMAGE_URL}${movie.poster_path}`,
                }
              : require('../../assets/images/placeholder.png')
          }
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
            disabled={movieAlreadyAdded.length > 0}
            onPress={() => {
              setWishList(movieSelected);
            }}>
            <ButtonText white={Colors.white} font={font}>
              {movieAlreadyAdded.length > 0
                ? 'Added to wishlist'
                : 'Add to wishlist'}
            </ButtonText>
          </AddWishlistButton>
        )}
        <Title color={Colors.yellow} font={font}>
          {movie.title}
        </Title>
        <Description font={font}>{movie.overview}</Description>
      </DetailContainer>
    </ItemContainer>
  );
};
