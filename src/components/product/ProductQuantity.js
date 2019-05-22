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

class ProductQuantity extends PureComponent {

  static propTypes = {
    item: PropTypes.object.isRequired,
    selected: PropTypes.bool,
    onPress: PropTypes.func.isRequired,
  };

  static defaultProps = {
    selected: false,
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
        <Text style={style.textNumber}> {item.id}</Text>
        <Text style={style.textPrice}>{item.price}</Text>
        <Text style={style.textCurrency}>{item.currency}</Text>
      </TouchableOpacity>
    );
  }
}
export default (ProductQuantity);

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: metrics.smallMargin,
    marginVertical: metrics.smallMargin,
    marginHorizontal: metrics.smallMargin / 2,
    borderWidth: 2,
    borderRadius: 2,
  },
  containerEnable: {
    borderColor: colors.primaryColor,
    backgroundColor: colors.white
  },
  containerDisable: {
    borderColor: colors.gray94,
    backgroundColor: colors.gray94
  },
  textNumber: {
    ...fonts.style.t12,
    ...fonts.style.bold,
    color: colors.black
  },
  textPrice: {
    ...fonts.style.t10,
    color: colors.red86
  },
  textCurrency: {
    ...fonts.style.t10,
    color: colors.gray54
  }
})