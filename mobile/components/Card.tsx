import { Image, Text, TouchableOpacity, View } from 'react-native';

import { checkImageURL } from '../utils/checkImageURL';
import styles from './card.style';

const Card = ({ apartement, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleCardPress(apartement)}
    >
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: checkImageURL(apartement?.image)
              ? apartement.image
              : '../assets/images/t.jpg',
          }}
          resizeMode="cover"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.name}>{apartement.name}</Text>
      <Text style={styles.type}>{apartement.type}</Text>

      <Text style={styles.area}>
        {apartement.location} {String.fromCharCode(183)} {apartement.area}{' '}
        {String.fromCharCode(183)} {apartement.developer}
      </Text>

      <Text style={styles.description}>{apartement.description}</Text>
      <View style={styles.infoWrapper}>
        <Text>Bathrooms: {apartement.bathrooms}</Text>
        <Text> Bedrooms: {apartement.bedrooms}</Text>
      </View>

      <Text>{(apartement.price / 100).toLocaleString()} E£</Text>
    </TouchableOpacity>
  );
};

export default Card;
