import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

const deviceWidth = width < height ? width : height;
const deviceHeight = width < height ? height : width;

// Dynamique value for responsive elemenet ( margin , Radius , sizeImage .....)
const metrics = {
  deviceWidth,
  deviceHeight,
  base: deviceWidth / 10,
  tinyMargin: deviceWidth / 120,
  marginApp: deviceWidth / 20,
  smallMargin: deviceWidth / 60,
  baseMargin: deviceWidth / 30,
  doubleBaseMargin: deviceWidth / 15,
  navBarHeight: (Platform.OS === 'ios') ? 72 : 50,
  radius: 3,
  border: 2,
  buttonHeight: 40,
  buttonHeightLarge: deviceHeight / 12,
  inputHeight: 50,
};

export default metrics;