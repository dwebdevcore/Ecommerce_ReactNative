import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Icon from "./Icon";
import {
  styles,
  colors,
  fonts,
  metrics,
} from '../../themes';

export default class Button extends PureComponent {

  static propTypes = {
    styleButton: PropTypes.any,
    text: PropTypes.string,
    styleText: PropTypes.any,
    iconRight: PropTypes.any,
    tintIconRight: PropTypes.string,
    iconLeft: PropTypes.any,
    tintIconLeft: PropTypes.string,
    onPress: PropTypes.func,
  };

  static defaultProps = {
    styleButton: {},
    text: "",
    styleText: {},
    iconRight: null,
    tintIconRight: colors.primaryColor,
    iconLeft: null,
    tintIconLeft: colors.primaryColor,
    onPress: () => { },
  };

  render() {
    const {
      styleButton,
      text,
      styleText,
      iconRight,
      tintIconRight,
      iconLeft,
      tintIconLeft,
      onPress
    } = this.props;

    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={onPress}
        style={[
          styles.row,
          style.container,
          styleButton,
        ]}
      >
        {
          iconLeft !== null ?
            <Icon
              width={30}
              image={iconLeft}
              color={tintIconLeft}
            />
            :
            <View style={{ flex: 1 }} />
        }
        <Text style={[
          style.text,
          styleText
        ]} >
          {text}
        </Text>
        {
          iconRight !== null ?
            <Icon
              width={30}
              image={iconRight}
              color={tintIconRight}
            />
            :
            <View style={{ flex: 1 }} />
        }
      </TouchableOpacity>
    );
  }
}

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryColor, 
    alignItems: 'center' 
  },
  text: {
    ...fonts.style.t15,
    marginHorizontal: metrics.smallMargin
  }
});