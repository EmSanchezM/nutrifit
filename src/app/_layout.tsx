import '../../global.css';

import { Slot } from 'expo-router';

import { ThemeProvider } from '@react-navigation/native';
import { theme } from '@/shared/theme';

export default function RootLayout() {
  return (
    <ThemeProvider value={theme}>
      <Slot />
    </ThemeProvider>
  );
}