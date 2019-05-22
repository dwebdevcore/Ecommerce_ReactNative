import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';

import Icon from '../common/Icon';
import {
  styles,
  metrics,
  colors,
  fonts
} from '../../themes';

class Code extends PureComponent {

  static propTypes = {
    onPressQuestion: PropTypes.func,
    onPress: PropTypes.func,
  };

  static defaultProps = {
    onPressQuestion: () => { },
    onPress: () => { },
  };

  render() {

    const {
      onPressQuestion,
      onPress
    } = this.props;

    return (
      <View style={[
        style.container,
        styles.row,
        styles.spaceBetween
      ]}>

        <View style={[
          styles.row,
          styles.spaceBetween,
          { alignItems: "center" }
        ]}>
          <Text style={style.code}>
            COUPON CODE
        </Text>
          <TouchableOpacity
            onPress={onPressQuestion}
          >
            <Icon
              width={20}
              image={require("../../resources/icons/question.png")}
            />
          </TouchableOpacity>
        </View> 
        <Icon
          width={20}
          image={require("../../resources/icons/arrowBottom.png")}
          onPress={onPress}
        />
      </View>
    );
  }
}
export default Code;

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: metrics.baseMargin
  },
  code: {
    ...fonts.style.t12,
    ...fonts.style.bold,
    color: colors.gray58,
  }
});   