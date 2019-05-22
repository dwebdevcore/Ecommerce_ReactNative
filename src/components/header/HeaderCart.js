import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation';

import {
  colors,
  metrics,
  styles,
  fonts,
} from '../../themes';

class HeaderCart extends PureComponent {

  static propTypes = {
    number: PropTypes.number
  };

  static defaultProps = {
    number: 0
  };

  render() {

    const { number } = this.props;

    return (
      <View style={[
        style.container,
        styles.row,
        styles.spaceBetween
      ]}>
        <View style={[styles.row]}>
          <Text style={style.textBold}>
            Cart
          </Text>
          <Text style={style.number}>
            {number} items
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
        >
          <Text style={style.textBlack}>
            Back to Shopping
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(HeaderCart);

const style = StyleSheet.create({
  container: {
    height: 50,
    alignItems: "center",
    marginHorizontal: metrics.baseMargin
  },
  text: {
    ...fonts.style.t16,
    color: colors.gray30
  },
  textBold: {
    ...fonts.style.t16,
    color: colors.gray30,
    ...fonts.style.bold
  },
  number: {
    ...fonts.style.t9,
    color: colors.gray30,
    marginTop: 2
  }
})
