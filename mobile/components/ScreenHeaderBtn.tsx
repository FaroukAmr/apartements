import { Image, TouchableOpacity } from 'react-native';

import styles from './screenheader.style';

const ScreenHeaderBtn = ({ iconUrl, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image source={iconUrl} resizeMode="cover" style={styles.btnImg} />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
