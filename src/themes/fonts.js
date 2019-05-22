import colors from './colors';

const type = {
  base: 'HelveticaNeue',
};
 
const fontWeight = {
  normal: 'normal',
  bold: 'bold',
  f100: '100',
  f200: '200',
  f300: '300',
  f400: '400',
  f500: '500',
};

const defaultText = {
  fontFamily: type.base,
  color: colors.black,
  fontWeight: fontWeight.normal,
  backgroundColor: 'transparent',
};

const style = {
  h1: {
    fontSize: 35,
  },
  h2: {
    fontSize: 30,
    ...defaultText,
  },  
  t9: {
    fontSize: 9,
    ...defaultText,
  },
  t10: {
    fontSize: 10,
    ...defaultText,
  }, 
  t11: {
    fontSize: 11,
    ...defaultText,
  }, 
  t12: {
    fontSize: 12,
    ...defaultText,
  },
  t13: {
    fontSize: 13,
    ...defaultText,
  },
  t14: {
    fontSize: 14,
    ...defaultText,
  },
  t15: {
    fontSize: 15,
    ...defaultText,
  },
  t16: {
    fontSize: 16,
    ...defaultText,
  },
  t17: {
    fontSize: 17,
    ...defaultText,
  },
  t18: {
    fontSize: 18,
    ...defaultText,
  },
  h9: {
    fontSize: 19,
    ...defaultText,
  },
  t20: {
    fontSize: 20,
    ...defaultText,
  },
  t22: {
    fontSize: 22,
    ...defaultText,
  },
  t24: {
    fontSize: 24,
    ...defaultText,
  },
  t25: {
    fontSize: 25,
   ...defaultText,
  },
  textWhite: {
    color: colors.white,
  },
  textBlack: {
    color: colors.black,
  },
  bold: {
    ...defaultText,
    fontWeight: 'bold',
  },
  mediumBold: {
    ...defaultText,
    fontWeight: fontWeight.medium
  },
};

export default {
  type,
  style,
  fontWeight,
};