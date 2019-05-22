import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import SwitchCard from "./SwitchCard";
import {
  styles,
  metrics,
  colors,
  fonts
} from '../../themes';

class Card extends PureComponent {

  static propTypes = {
  };

  static defaultProps = {
  };

  render() {

    return (
      <View style={style.container}>
        <SwitchCard />
      </View>
    );
  }
}
export default Card;

const style = StyleSheet.create({
  container: {
    flex: 1,
    margin: metrics.baseMargin, 
    backgroundColor: colors.white
  },
});   