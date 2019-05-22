import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import {
  styles,
  metrics,
  colors,
  fonts
} from '../../themes';

class Info extends PureComponent {

  static propTypes = {
  };

  static defaultProps = {
  };

  render() {

    return (
      <View style={style.container}>
        <Text style={style.title}>
          Shipping Info
        </Text>
        <Text style={style.name}>
          Kirill Pavlov
        </Text>
        <Text style={style.detail}>
          276 Dabner St., San Leandro,
        </Text>
        <Text style={style.detail}>
          CA, 90002, United States
        </Text>
        <Text style={style.detail}>
          mail@gmail.com
        </Text>
        <Text style={style.detail}>
          (067) 113-66-33
        </Text>
      </View>
    );
  }
}
export default Info;

const style = StyleSheet.create({
  container: {
    flex: 1, 
    margin: metrics.baseMargin, 
    padding: metrics.baseMargin,
    backgroundColor: colors.white
  },
  title: {
    ...fonts.style.t14,
    color: colors.gray30,
    marginVertical: metrics.baseMargin,
  },
  name: {
    ...fonts.style.t12,
    ...fonts.style.bold,
    color: colors.black,
  },
  detail: {
    ...fonts.style.t10,
    color: colors.black,
  },

});   