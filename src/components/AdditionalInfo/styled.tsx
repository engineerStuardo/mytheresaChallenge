import styled from 'styled-components/native';

import {IAddionalInfoProps} from '../../types/interfaces';

export const Container = styled.View`
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text<IAddionalInfoProps>`
  font-size: 18px;
  font-family: ${({font}) => font};
`;

export const Text = styled.Text<IAddionalInfoProps>`
  font-family: ${({font}) => font};
`;
