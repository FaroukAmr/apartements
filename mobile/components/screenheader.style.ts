import { COLORS, SIZES } from '../constants';

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnImg: {
    width: '50%',
    height: '50%',
    borderRadius: SIZES.small / 1.25,
  },
});

export default styles;
