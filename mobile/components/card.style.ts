import { COLORS, FONT, SHADOWS, SIZES } from '../constants';

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 250,
    padding: SIZES.xLarge,
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.medium,
    justifyContent: 'space-between',
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  },
  logoContainer: {
    width: 200,
    height: 200,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  name: {
    fontSize: SIZES.large,
    fontFamily: FONT.regular,
    color: '#000',
    marginTop: SIZES.small / 1.5,
  },
  type: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: '#B3AEC6',
  },
  area: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: '#B3AEC6',
    marginBottom: SIZES.small / 1.5,
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'column',
  },
  infoContainer: {
    marginTop: SIZES.large,
  },
  jobName: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: '#000',
  },
  description: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
  },
  infoWrapper: {
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  publisher: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: '#000',
  },
  location: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: '#B3AEC6',
  },
});

export default styles;
