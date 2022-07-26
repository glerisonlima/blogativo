import React from 'react';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { ThemeProvider } from 'styled-components/native';


import { PagePosts } from './src/screens/PagePosts';
import theme from './src/global/theme';
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })



  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <PagePosts /> : <Loading />}
    </ThemeProvider>
  );
}


