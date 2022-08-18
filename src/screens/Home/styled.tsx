import styled from 'styled-components/native';

export const ScrollView: any = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    paddingBottom: 140,
  },
}))`
  height: 100%;
  padding: 10px;
`;
