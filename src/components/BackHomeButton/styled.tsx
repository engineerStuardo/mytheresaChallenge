import styled from 'styled-components/native';

export const TouchableOpacity = styled.TouchableOpacity`
  padding: 10px;
  margin-bottom: 20px;
`;

export const Text = styled.Text`
  font-size: 15px;
  color: ${({colorText}: {colorText: string}) => colorText};
  font-family: 'Silkscreen-Regular';
`;
