import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
} from 'react-native';

import Icon from "./Icon";

import {
  colors,
  metrics,
  styles,
  fonts,
} from '../../themes';

export default class Link extends PureComponent {

  static propTypes = {
    firstTitle: PropTypes.string,
    secondTitle: PropTypes.string,
    icon: PropTypes.any,
    onPress: PropTypes.func
  };

  static defaultProps = {
    firstTitle: "",
    secondTitle: "",
    icon: null,
    onPress: () => { }
  };

  render() {

    const {
      icon,
      firstTitle,
      secondTitle,
      onPress
      } = this.props;

    return (
      <TouchableOpacity
        style={[
          styles.row,
          style.container
        ]}
        onPress={onPress}
      >
        <View style={styles.start}>
          <Icon
            width={20}
            image={icon}
          />
        </View>
        <View >
          <Text style={style.title}>
            {firstTitle}
          </Text>
          <Text style={style.title}>
            {secondTitle}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1 
  },
  title: {
    ...fonts.style.t12,
    color: colors.primaryColor,
  }
})
