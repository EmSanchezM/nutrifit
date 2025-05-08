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

export default function RegisterScreen() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [age, setAge] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if(!name || !email || !password || !confirmPassword || !age) {
      Alert.alert('Por favor, ingrese todos los datos');
      return;
    }
    if(password !== confirmPassword) {
      Alert.alert('Las contraseñas no coinciden');
      return;
    }

    try {
      setLoading(true);
      console.log('Register');
      console.log({ name, email, password, confirmPassword, age });
      router.push('login');
    } catch (error) {
      console.error("Error al registrar", error);
      Alert.alert("Error al registrar");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className='flex-1 items-center justify-center bg-neutral-900 px-6'>
      <View className='w-full max-w-sm'>
        <Text className='text-3xl font-bold text-center mb-8 text-white'>
          Crear cuenta
        </Text>

        <View className='gap-4'>
          <View>
            <Text className='text-sm font-medium text-gray-300 mb-1'>
              Nombre completo
            </Text>
            <TextInput
              className='w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder:text-gray-500 focus:border-blue-500'
              placeholder=''
              placeholderTextColor='#6B7280'
              keyboardType='default'
              autoCapitalize='none'
              value={name}
              onChangeText={setName}
            />
          </View>
          <View>
            <Text className='text-sm font-medium text-gray-300 mb-1'>
              Correo electrónico
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
              Contraseña
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

          <View>
            <Text className='text-sm font-medium text-gray-300 mb-1'>
              Edad
            </Text>
            <TextInput
              className='w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder:text-gray-500 focus:border-blue-500'
              placeholder=''
              placeholderTextColor='#6B7280'
              keyboardType='numeric'
              autoCapitalize='none'
              value={age}
              onChangeText={setAge}
            />
          </View>

          <TouchableOpacity
            className='w-full bg-white py-3 rounded-lg mt-6'
            activeOpacity={0.8}
            onPress={handleRegister}
            disabled={loading}
          >
            <Text className='text-black text-center font-semibold'>
              {loading ? 'Creando cuenta...' : 'Crear cuenta'}
            </Text>
          </TouchableOpacity>

          <View className='flex-row justify-center mt-4'>
            <Text className='text-gray-400'>Ya tienes una cuenta? </Text>
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