import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  Alert,
} from 'react-native';
import { Link } from 'expo-router';
import { useState } from 'react';

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handleForgotPassword = async () => {
    if(!email || !password || !confirmPassword) {
      Alert.alert('Por favor, ingrese todos los datos');
      return;
    }
    if(password !== confirmPassword) {
      Alert.alert('Las contraseñas no coinciden');
      return;
    }

    try {
      setLoading(true);
      console.log('Forgot password');
      console.log({ email, password, confirmPassword });

    } catch (error) {
      console.error("Error al reestablecer la contraseña", error);
      Alert.alert("Error al reestablecer la contraseña");
    } finally {
      setLoading(false);
    }
  };
  
  return (
      <View className='flex-1 items-center justify-center bg-neutral-900 px-6'>
        <View className='w-full max-w-sm'>
          <Text className='text-3xl font-bold text-center mb-8 text-white'>
            Olvidaste tu contraseña?
          </Text>
  
          <View className='gap-4'>
            <View>
              <Text className='text-sm font-medium text-gray-300 mb-1'>
                Escriba su correo electrónico
              </Text>
              <TextInput
                className='w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder:text-gray-500 focus:border-blue-500'
                placeholder=''
                placeholderTextColor='#6B7280'
                keyboardType='email-address'
                autoCapitalize='none'
                value={email}
                onChangeText={setEmail}
              />
            </View>
  
            <View>
              <Text className='text-sm font-medium text-gray-300 mb-1'>
                Nueva contraseña
              </Text>
              <TextInput
                className='w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder:text-gray-500 focus:border-blue-500'
                placeholder=''
                placeholderTextColor='#6B7280'
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
            </View>
  
            <View>
              <Text className='text-sm font-medium text-gray-300 mb-1'>
                Confirmar contraseña
              </Text>
              <TextInput
                className='w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder:text-gray-500 focus:border-blue-500'
                placeholder=''
                placeholderTextColor='#6B7280'
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
            </View>
    
            <TouchableOpacity
              className='w-full bg-white py-3 rounded-lg mt-6'
              activeOpacity={0.8}
              onPress={handleForgotPassword}
              disabled={loading}
            >
              <Text className='text-black text-center font-semibold'>
                {loading ? 'Enviando...' : 'Enviar'}
              </Text>
            </TouchableOpacity>
  
            <View className='flex-row justify-center mt-4'>
              <Text className='text-gray-400'>Volver a iniciar sesión</Text>
              <Link href='/login' asChild>
                <Pressable>
                  <Text className='text-blue-400 font-medium'>Iniciar sesión</Text>
                </Pressable>
              </Link>
            </View>
          </View>
        </View>
      </View>
  );
}