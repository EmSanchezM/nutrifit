import { Text, View } from 'react-native';

export default function ProfileScreen() {
  return (
    <View className='flex-1 items-center justify-center bg-neutral-900 px-6'>
      <View className='w-full max-w-sm'>
        <Text className='text-3xl font-bold text-center mb-8 text-white'>
          NutriFit
        </Text>
      </View>
      <View className='w-full max-w-sm'>
        <Text className='text-center text-white'>
          Profile screen
        </Text>
      </View>
    </View>
  );
}