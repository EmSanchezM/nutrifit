import { useAuth } from '@/providers/AuthProvider';
import { Stack, Redirect } from 'expo-router';

export default function ProtectedLayout() {
  const { user } = useAuth();

  if (!user) {
    return <Redirect href='/(authentication)/login' />;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}