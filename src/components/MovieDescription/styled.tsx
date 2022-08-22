import styled from 'styled-components/native';

import {
  IAddWishlistButtonProps,
  IButtonTextProps,
  ITitleProps,
  IDescriptionProps,
} from '../../types/interfaces';

export const ItemContainer = styled.View`
  margin-bottom: 10px;
  padding-top: 50px;
`;

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  height: 300px;
  width: 220px;
  border-radius: 20px;
`;

export const DetailContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding: 10px;
`;

export const AddWishlistButton = styled.TouchableOpacity<IAddWishlistButtonProps>`
  margin-bottom: 10px;
  padding: 10px;
  border-radius: ${({buttonStyle}) => buttonStyle};
  background-color: ${({movieAlreadyAdded, disabledColor, colorButton}) =>
    movieAlreadyAdded.length > 0 ? disabledColor : colorButton};
`;

export const ButtonText = styled.Text<IButtonTextProps>`
  font-size: 20px;
  color: ${({white}) => white};
  font-family: ${({font}) => font};
`;

export const Title = styled.Text<ITitleProps>`
  font-size: 25px;
  margin-bottom: 10px;
  color: ${({color}: {color: string}) => color};
  font-family: ${({font}) => font};
`;

export const Description = styled.Text<IDescriptionProps>`
  font-family: ${({font}) => font};
`;
