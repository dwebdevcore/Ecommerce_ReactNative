import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import {
  styles,
  colors,
  fonts,
  metrics,
} from '../../themes';

export default class Logo extends PureComponent {

  render() {
    return (
      <View style={[
        styles.row,
        style.container
      ]}>
        <Text style={style.firstText} >
          MRO
        </Text>
        <Text style={style.secondText}>
          SUPPLY
        </Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginLeft: metrics.baseMargin
  },
  firstText: {
    ...fonts.style.t15,
    color: colors.red
  },
  secondText: {
    ...fonts.style.t15,
    color: colors.primaryColor
  }
});