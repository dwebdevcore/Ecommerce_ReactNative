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

class ProductRef extends PureComponent {

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
        style={style.container}>
        <Text style={selected ? style.textEnable : style.textDisable}> {item.ref}</Text>
      </TouchableOpacity>
    );
  }
}
export default (ProductRef);

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: metrics.baseMargin,
    marginVertical: metrics.baseMargin
  },
  textEnable: {
    ...fonts.style.t12,
    color: colors.primaryColor
  },
  textDisable: {
    ...fonts.style.t12,
    color: colors.gray54
  },
})