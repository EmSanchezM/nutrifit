import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '@/shared/constants/colors';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View className='flex-1 items-center justify-center bg-neutral-900 px-6'>
      <View className='w-full max-w-sm'>
        <Text className='text-3xl font-bold text-center mb-8 text-white'>
          NutriFit
        </Text>
      </View>
      <View className='w-full max-w-sm'>
        <Text className='text-center text-white'>
          “Una alimentación Balanceada es la clave para un cuerpo fuerte y una mente saludable”
        </Text>
      </View>
      <View className='w-full max-w-sm'>
        Imagen 
      </View>
      <View className='w-full max-w-sm'>
        <Button 
          title='Iniciar sesión'
          onPress={() => router.push('login')}
          color={Colors.light.primary}
        />
      </View>
    </View>
  );
}