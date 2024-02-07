import { ActivityIndicator, Text, View } from 'react-native';

import { COLORS } from '../../constants';
import Card from '../../components/Card';
import styles from '../../components/Apartements.style';
import useFetch from '../../hook/useFetch';
import { useLocalSearchParams } from 'expo-router';

export default function Page() {
  const params = useLocalSearchParams();
  let { data, isLoading, error } = useFetch('apartements/' + params.id, {});

  const renderContent = () => {
    if (isLoading) {
      return <ActivityIndicator size="large" color={COLORS.primary} />;
    }

    if (error) {
      return <Text>Something went wrong</Text>;
    }

    if (data) {
      return <Card apartement={data} handleCardPress={() => {}} />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{''}</Text>
      </View>
      <View style={styles.cardsContainer}>{renderContent()}</View>
    </View>
  );
}
