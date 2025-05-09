import { Text, View, TouchableOpacity, Image, Alert, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';

import { supabase } from '@/lib/supabase';
import { useAuth } from '@/providers/AuthProvider';

export default function ProfileScreen() {
  const router = useRouter();
  const { session } = useAuth();

  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState('');
  const [fullName, setFullname] = useState('');
  const [website, setWebsite] = useState('');
  const [age, setAge] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        throw error;
      }
      router.replace('/(authentication)/login');
    } catch (error: any) {
      console.error('Error al cerrar sesión:', error);
      Alert.alert('Error', error?.message);
    }
  };

  useEffect(() => {
    if (session && session !== null) getProfile();
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);
      if (!session?.user) throw new Error('No user on the session!');

      const { data, error, status } = await supabase
        .from('profiles')
        .select(`username, website, avatar_url, full_name, age`)
        .eq('id', session?.user.id)
        .single();
      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
        setWebsite(data.website);
        setAvatarUrl(data.avatar_url);
        setFullname(data.full_name);
        setAge(data.age);
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <View className='flex-1 bg-neutral-900 px-6'>
      <View className='flex-1 items-center justify-start pt-12'>
        {/* Profile Header */}
        <View className='w-32 h-32 rounded-full bg-neutral-700 mb-8 overflow-hidden'>
          <Image 
            source={avatarUrl ? { uri: avatarUrl } : { uri: 'https://ui-avatars.com/api/?name=User+Name&background=0D8ABC&color=fff&size=128' }}
            className='w-full h-full'
            defaultSource={require('../../../../assets/images/default-profile.svg')}
          />
        </View>
  
        {/* Profile Info */}
        <View className='w-full space-y-6'>
          <View className='mb-4'>
            <Text className='text-sm font-medium text-gray-300 mb-2'>
              Nombre de usuario
            </Text>
            <TextInput
              className='w-full px-4 py-3.5 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder:text-gray-500 focus:border-blue-500'
              placeholder=''
              placeholderTextColor='#6B7280'
              keyboardType='default'
              autoCapitalize='none'
              value={username ?? 'Ingresar nombre de usuario'}
              readOnly
            />
          </View>
          <View className='mb-4'>
            <Text className='text-sm font-medium text-gray-300 mb-2'>
              Nombre completo
            </Text>
            <TextInput
              className='w-full px-4 py-3.5 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder:text-gray-500 focus:border-blue-500'
              placeholder=''
              placeholderTextColor='#6B7280'
              keyboardType='default'
              autoCapitalize='none'
              value={fullName ?? 'Ingresar nombre completo'}
              readOnly
            />
          </View>
  
          <View className='mb-4'>
            <Text className='text-sm font-medium text-neutral-300 mb-2'>
              Correo electrónico
            </Text>
            <TextInput
              className='w-full px-4 py-3.5 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder:text-gray-500 focus:border-blue-500'
              placeholder='Correo electrónico'
              placeholderTextColor='#6B7280'
              keyboardType='email-address'
              autoCapitalize='none'
              value={session?.user?.email}
              readOnly
            />
          </View>
  
          <View className='mb-4'>
            <Text className='text-sm font-medium text-gray-300 mb-2'>
              Edad
            </Text>
            <TextInput
              className='w-full px-4 py-3.5 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder:text-gray-500 focus:border-blue-500'
              placeholder=''
              placeholderTextColor='#6B7280'
              keyboardType='numeric'
              autoCapitalize='none'
              value={age}
              readOnly
            />
          </View>
  
          <TouchableOpacity 
            onPress={handleSignOut}
            className='w-full mt-8 bg-gray-800 p-4 rounded-lg'
          >
            <Text className='text-white text-center font-semibold'>
              Cerrar Sesión
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}