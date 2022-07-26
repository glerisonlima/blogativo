import styled from "styled-components/native";

export const StatusBarApp = styled.StatusBar`
  background-color: ${({ theme }) => theme.colors.gray[700]};
`;

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.gray[700]};
`

export const TextTitle = styled.Text`
  color: ${({ theme }) => theme.colors.gray[100]};
`

export const ListPosts = styled.FlatList`

`