import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {
  View,
  StyleSheet,
  Dimensions
} from 'react-native';

import {
  styles,
  colors,
  fonts,
  metrics,
} from '../../themes';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

export default class SlideBar extends PureComponent {

  static propTypes = {
    size: PropTypes.number,
    color: PropTypes.string,
    width: PropTypes.number
  };

  static defaultProps = {
    size: 10,
    color: colors.green76,
    width: 0
  };

  render() {
    const {
      size,
      color,
      width
    } = this.props;

    return (
      <View style={[
        style.container,
        {
          height: size,
          borderRadius: size / 2
        }
      ]}>
        <View style={[
          style.bar,
          {
            backgroundColor: color,
            height: size,
            width: wp(width)
          }
        ]}
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.gray97,
    marginVertical: metrics.baseMargin
  },
  bar: {
  },
});