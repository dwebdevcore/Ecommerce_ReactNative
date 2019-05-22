import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';

import {
  styles,
  metrics,
  colors,
  fonts
} from '../../themes';

class Radio extends PureComponent {

  static propTypes = {
    selected: PropTypes.any,
    onPress: PropTypes.func,
  };

  static defaultProps = {
    selected: true,
    onPress: () => { },
  };

  render() {

    const {
      onPress,
      selected
    } = this.props;

    return (
      <TouchableOpacity
        style={[
          style.container,
          styles.row,
          styles.center
        ]}
        activeOpacity={1}
        onPress={onPress}
      >
        {
          selected === true ?
            <View style={[
              styles.center,
              style.selected,
              style.selectedEnable
            ]}
            >
              <View style={[
                style.selectedS,
                style.selectedEnableS
              ]}
              />
            </View>
            :
            <View style={[
              style.selected,
              style.selectedDisable
            ]}
            />
        }

        <Text style={[
          style.text,
          style.textEnable
        ]}>
          Credit Card
        </Text>
      </TouchableOpacity >
    );
  }
}
export default Radio;

const style = StyleSheet.create({
  container: {
    flex: 1
  },
  selected: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderRadius: 10
  },
  selectedS: {
    width: 10,
    height: 10, 
    borderRadius: 10 / 2
  },
  selectedEnable: {
    borderColor: colors.bleu93
  },
  selectedEnableS: {
    backgroundColor: colors.bleu93
  },
  selectedDisable: {
    borderColor: colors.gray54
  },
  text: {
    ...fonts.style.t12,
    marginLeft: metrics.smallMargin
  },
  textEnable: {
    ...fonts.style.bold,
    color: colors.black
  },
  textDisable: {
    color: colors.gray54
  },
});   