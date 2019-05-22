import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import Icon from './Icon';
import {
  styles,
  metrics,
  colors,
} from '../../themes';

class CheckBox extends PureComponent {

  static propTypes = {
    selected: PropTypes.any,
    onPress: PropTypes.func,
  };

  static defaultProps = {
    selected: false,
    onPress: () => { },
  };

  render() {

    const {
      onPress,
      selected
    } = this.props;

    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={onPress}
      >
        {
          selected === true ?
            <View style={[
              style.selected,
              styles.radius,
              style.selectedEnable
            ]}
            >
              <Icon
                width={20}
                image={require("../../resources/icons/stock.png")}
                color={colors.white}
              />
            </View>
            :
            <View style={[
              style.selected,
              styles.radius,
              style.selectedDisable
            ]}
            />
        }
      </TouchableOpacity >
    );
  }
}
export default CheckBox;

const style = StyleSheet.create({
  selected: {
    width: 20,
    height: 20,
    borderWidth: 1,
  },
  selectedEnable: {
    backgroundColor: colors.green
  },
  selectedDisable: {
    backgroundColor: colors.white,
    borderColor: colors.bleu93
  }
});   