import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import theme from "../../global/theme";

import {
  Container,
  ListPosts,
  StatusBarApp,
  TextTitle
} from './styles'

interface PropsData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export function PagePosts() {

  const data = [
    'post t1',
    'post t2',
    'post t3'
  ]

  const [dados, setDados] = useState<PropsData>([]);

  useEffect(() => {

  }, []);

  return (
    <Container>
      <StatusBarApp backgroundColor={theme.colors.gray[700]} />
      <TextTitle>Pagina de posts com styles</TextTitle>
      <ListPosts
        data={data}
        renderItem={({ item }) => <TextTitle>{item}</TextTitle>}
      />
    </Container>

  )
}