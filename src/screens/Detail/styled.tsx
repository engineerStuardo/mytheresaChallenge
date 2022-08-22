import styled from 'styled-components/native';

export const ScrollView: any = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    paddingBottom: 50,
  },
}))`
  height: 100%;
  padding-top: 30px;
`;
