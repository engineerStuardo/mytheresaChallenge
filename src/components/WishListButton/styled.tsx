import styled from 'styled-components/native';

export const TouchableOpacity = styled.TouchableOpacity`
  padding: 10px;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 15px;
  color: ${(props: {colorText: string}) => props.colorText};
  background-color: ${({backgroundColor}: {backgroundColor: string}) =>
    backgroundColor};
  padding: 10px;
`;
