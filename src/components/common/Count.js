import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';

import Button from './Button';
import {
  colors,
  metrics,
  styles,
  fonts,
} from '../../themes';

export default class Count extends PureComponent {
  render() {
    return (
      <View style={[
        style.container,
        styles.row,
        styles.spaceBetween
      ]}>
        <Button
          text={"-"}
          styleButton={[
            style.button,
            styles.radius
          ]}
          styleText={style.text}
        />
        <View style={[
          styles.center,
          style.containerCount,
          styles.radius
        ]}
        >
          <Text style={style.text}>
            1
          </Text>
        </View>
        <Button
          text={"+"}
          styleButton={[
            style.button,
            styles.radius
          ]}
          styleText={style.text}
        />
      </View>
    );
  }
}


const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerCount: {
    flex: 1,
    backgroundColor: colors.gray97,
    marginHorizontal: metrics.smallMargin
  },
  button: {
    flex: 1,
    backgroundColor: colors.gray92,
    height: null
  },
  text: {
    ...fonts.style.t14,
    color: colors.gray77,
  }
})
