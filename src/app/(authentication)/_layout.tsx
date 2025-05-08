import { useAuth } from '@/providers/AuthProvider';
import { Stack, Redirect } from 'expo-router';

export default function AuthenticationLayout() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Redirect href='/(protected)/' />;
  }

  return (
    <Stack>
      <Stack.Screen name="welcome" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ title: "Iniciar sesión", headerBackButtonDisplayMode: 'minimal' }} />
      <Stack.Screen name="register" options={{ title: "Crear cuenta", headerBackButtonDisplayMode: 'minimal' }} />
      <Stack.Screen name="forgot-password" options={{ title: "Olvidé mi contraseña", headerBackButtonDisplayMode: 'minimal' }} />
    </Stack>
  );  
}