import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

import Radio from "../common/Radio";
import {
  styles,
  metrics,
  colors,
  fonts
} from '../../themes';

class SwitchCard extends PureComponent {

  state = {
    card: "C"
  }

  static propTypes = {
  };

  static defaultProps = {
  };

  render() {

    return (
      <View style={[
        style.container,
        styles.row,
        styles.spaceBetween, 
        { alignItems: "center" }
      ]}>
        <Radio />
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require("../../resources/images/cardCredit.png")}
        />
      </View>
    );
  }
}
export default SwitchCard;

const style = StyleSheet.create({
  container: { 
    alignItems: "center"
  },
  image: {
    width: metrics.deviceWidth * 2 / 4
  },
});  