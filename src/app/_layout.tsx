import '../../global.css';

import { Slot } from 'expo-router';

import { ThemeProvider } from '@react-navigation/native';
import { theme } from '@/shared/theme';
import { AuthProvider } from '@/providers/AuthProvider';

export default function RootLayout() {
  return (
    <ThemeProvider value={theme}>
      <AuthProvider>
        <Slot />
      </AuthProvider>
    </ThemeProvider>
  );
}