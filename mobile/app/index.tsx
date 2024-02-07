import { COLORS, SIZES, icons } from '../constants';
import { SafeAreaView, ScrollView, View } from 'react-native';

import Apartements from '../components/Apartements';
import ScreenHeaderBtn from '../components/ScreenHeaderBtn';
import { Stack } from 'expo-router';

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} handlePress={() => {}} />
          ),
          headerTitle: 'Apartements App',
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Apartements />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
