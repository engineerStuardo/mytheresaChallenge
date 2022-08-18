import styled from 'styled-components/native';

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

export const AddWishlistButton = styled.TouchableOpacity`
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 8px;
  background-color: ${(props: {
    movieAlreadyAdded: [];
    disabledColor: string;
    enabledColor: string;
  }) =>
    props.movieAlreadyAdded.length > 0
      ? props.disabledColor
      : props.enabledColor};
`;

export const ButtonText = styled.Text`
  color: ${({white}: {white: string}) => white};
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${({color}: {color: string}) => color};
`;
