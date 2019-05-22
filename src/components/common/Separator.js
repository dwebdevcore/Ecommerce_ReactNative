import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {
  styles,
  colors,
  fonts,
  metrics,
} from '../../themes';

export default class Separator extends PureComponent {

  static propTypes = {
    size: PropTypes.number,
    color: PropTypes.string,  
    marginHorizontal: PropTypes.number
  };

  static defaultProps = {
    size: 1,
    color: colors.separator, 
    marginHorizontal: 0
  };

  render() {
    const {
      size,
      color, 
      marginHorizontal
    } = this.props;

    return (
      <View style={[
        style.container,  
        {
          backgroundColor: color,
          height: size,
          marginHorizontal: marginHorizontal
        }
      ]}
      />
    );
  }
}

const style = StyleSheet.create({
  container: { 
  },
});