import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  Alert,
} from 'react-native';
import { Link, useRouter } from 'expo-router';
import { useState } from 'react';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLoginWithEmail = async () => {
    if(!email || !password) {
      Alert.alert('Por favor, ingrese correo y contraseña');
      return;
    }

    try {
      setLoading(true);
      console.log('Login with email');
      console.log({ email, password });
      router.push('protected');
    } catch (error) {
      console.error("Error al iniciar sesión", error);
      Alert.alert("Error al iniciar sesión");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className='flex-1 items-center justify-center bg-neutral-900 px-6'>
      <View className='w-full max-w-sm'>
        <Text className='text-3xl font-bold text-center mb-8 text-white'>
          Iniciar sesion
        </Text>

        <View className='gap-4'>
          <View>
            <Text className='text-sm font-medium text-neutral-300 mb-1'>
              Correo electrónico
            </Text>
            <TextInput
              className='w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder:text-gray-500 focus:border-blue-500'
              placeholder='Correo electrónico'
              placeholderTextColor='#6B7280'
              keyboardType='email-address'
              autoCapitalize='none'
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View>
            <Text className='text-sm font-medium text-neutral-300 mb-1'>
              Contraseña
            </Text>
            <TextInput
              className='w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder:text-gray-500 focus:border-blue-500'
              placeholder='Contraseña'
              placeholderTextColor='#6B7280'
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <TouchableOpacity
            className='w-full bg-white py-3 rounded-lg mt-6'
            activeOpacity={0.8}
            onPress={handleLoginWithEmail}
            disabled={loading}
          >
            <Text className='text-black text-center font-semibold'>
              {loading ? 'Iniciando sesión...' : 'Iniciar sesión'}
            </Text>
          </TouchableOpacity>

          <View className='flex-row justify-center mt-4'>
            <Text className='text-gray-400'>He olvidado mi contraseña? </Text>
            <Link href='/forgot-password' asChild>
              <Pressable>
                <Text className='text-blue-400 font-medium'>Recuperar</Text>
              </Pressable>
            </Link>
          </View>

          <View className='flex-row justify-center mt-4'>
            <Text className='text-gray-400'>Aún no tienes una cuenta? </Text>
            <Link href='/register' asChild>
              <Pressable>
                <Text className='text-blue-400 font-medium'>Crear una cuenta</Text>
              </Pressable>
            </Link>
          </View>
        </View>
      </View>
    </View>
  );
}