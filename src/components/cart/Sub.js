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

class Sub extends PureComponent {

  static propTypes = {
    firstText: PropTypes.string,
    secondText: PropTypes.string
  };

  static defaultProps = {
    firstText: "",
    secondText: ""
  };

  render() {

    const { firstText, secondText } = this.props

    return (
      <View style={[
        styles.row,
        styles.spaceBetween,
        style.container
      ]}>
        <Text style={style.firstText}>
          {firstText}
        </Text>
        <Text style={style.secondText}>
          {secondText}
        </Text>
      </View>
    );
  }
}
export default Sub;

const style = StyleSheet.create({
  container: {
    marginVertical: metrics.smallMargin,
    alignItems: "center"
  },
  firstText: {
    ...fonts.style.t12,
    color: colors.black
  },
  secondText: {
    ...fonts.style.t13,
    ...fonts.style.bold,
    color: colors.black
  }
});   