import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 bg-[#8FB566] px-6 py-4">
        {/* Back button */}
        <TouchableOpacity 
          className="h-10 w-10 items-center justify-center rounded-full"
          onPress={() => router.back()}
        >
          <Text className="text-2xl text-black">←</Text>
        </TouchableOpacity>

        {/* Content Container */}
        <View className="flex-1 items-center justify-between py-4">
          {/* Top Image */}
          <View className="w-full items-center">
            <Image 
              source={require('../../../assets/images/welcome-nutrifit.svg')} 
              className="h-40 w-full"
              resizeMode="contain"
            />
          </View>

          {/* Middle Content */}
          <View className="w-full bg-white rounded-lg p-6 items-center space-y-6">
            {/* Logo / Title */}
            <Text className="text-3xl font-bold text-black">
              NutriFit
            </Text>

            {/* Quote */}
            <Text className="text-center text-black text-base">
              "Una alimentación Balanceada es la clave para 
              un cuerpo fuerte y una mente saludable"
            </Text>

            {/* Heart Image */}
            <Image 
              source={require('../../../assets/images/welcome-nutrifit.svg')} 
              className="h-36 w-36"
              resizeMode="contain"
            />

            {/* Start Button */}
            <TouchableOpacity
              className="w-full bg-[#8FB566] py-3 rounded-md items-center"
              onPress={() => router.push('/login')}
            >
              <Text className="text-black font-medium text-base">INICIAR</Text>
            </TouchableOpacity>
          </View>

          <Text className="text-center text-black text-sm mt-4">
            ¿Tienes alguna condición o restricción alimenticia?
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}