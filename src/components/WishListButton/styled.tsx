import styled from 'styled-components/native';

import {ITextProps} from '../../types/interfaces';

export const TouchableOpacity = styled.TouchableOpacity`
  padding: 10px;
  align-items: center;
`;

export const Text = styled.Text<ITextProps>`
  font-size: 15px;
  width: 300px;
  overflow: hidden;
  text-align: center;
  border-radius: 20px;
  color: ${({colorText}) => colorText};
  background-color: ${({backgroundColor}) => backgroundColor};
  padding: 10px;
  font-family: 'Silkscreen-Regular';
`;
