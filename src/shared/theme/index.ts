import { DarkTheme } from '@react-navigation/native';

export const theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: 'white',
    background: '#000',
    card: '#90A955',
  },
};