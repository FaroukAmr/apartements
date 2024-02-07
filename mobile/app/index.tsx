import { COLORS, SIZES, icons, images } from '../constants';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import Apartements from '../components/Apartements';
import ScreenHeaderBtn from '../components/ScreenHeaderBtn';
import { useState } from 'react';

const Home = () => {
  const router = useRouter();
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
          headerRight: () => (
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
