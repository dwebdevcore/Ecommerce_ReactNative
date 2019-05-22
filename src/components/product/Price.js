import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import {
  colors,
  metrics,
  styles,
  fonts,
} from '../../themes';

class Price extends PureComponent {

  static propTypes = {
    item: PropTypes.object.isRequired,
    selected: PropTypes.bool,
    onPress: PropTypes.func.isRequired,
  };

  static defaultProps = {
    selected: false,
    onPress: () => { }
  };

  render() {

    const {
      item,
      selected,
      onPress
    } = this.props

    return (
      <TouchableOpacity
        onPress={onPress}
        style={[
          style.container,
          selected ? style.containerEnable : style.containerDisable
        ]}>
        <Text style={selected ? style.textPriceEnable : style.textPrice}> {item.price}</Text>
        <Text style={style.text}>{item.text}</Text>
      </TouchableOpacity>
    );
  }
}
export default (Price);

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: metrics.baseMargin, 
    marginRight: metrics.doubleBaseMargin
  },
  containerEnable: {
    borderBottomWidth: 2,
    borderBottomColor: colors.primaryColor,
  },
  containerDisable: {
  },
  text: {
    ...fonts.style.t10,
    color: colors.gray54
  },
  textPrice: {
    ...fonts.style.t22,
    color: colors.gray54,
    marginLeft: -metrics.smallMargin
  },
  textPriceEnable: {
    ...fonts.style.t22,
    color: colors.red86,
    marginLeft: -metrics.smallMargin
  }
})