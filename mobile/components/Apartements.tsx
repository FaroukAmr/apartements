import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { COLORS, SIZES } from '../constants';

import Card from './Card';
import styles from './Apartements.style';
import useFetch from '../hook/useFetch';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export default function Apartements() {
  const router = useRouter();
  const { data, isLoading, error } = useFetch('apartements', {});
  const [selectedJob, setSelectedJob] = useState();
  const handleCardPress = (apartement) => {
    router.push(`/apartements/${apartement.id}`);
    setSelectedJob(apartement.job_id);
  };

  const renderContent = () => {
    if (isLoading) {
      return <ActivityIndicator size="large" color={COLORS.primary} />;
    }

    if (error) {
      return <Text>Something went wrong</Text>;
    }

    if (data && data instanceof Array) {
      return (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Card apartement={item} handleCardPress={handleCardPress} />
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ columnGap: SIZES.medium }}
          horizontal
        />
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Apartements List</Text>
      </View>
      <View style={styles.cardsContainer}>{renderContent()}</View>
    </View>
  );
}
