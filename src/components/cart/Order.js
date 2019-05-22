import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import {
  styles,
  metrics,
  colors,
  fonts
} from '../../themes';
import Sub from "./Sub";
import Separator from '../common/Separator';

class Info extends PureComponent {

  static propTypes = {
  };

  static defaultProps = {
  };

  render() {

    return (
      <View style={style.container}>
        <Sub
          firstText={"Subtotal"}
          secondText={"$6,127.68"}
        />
        <Sub
          firstText={"Shipping"}
          secondText={"$18.28"}
        />
        <Sub
          firstText={"Sales Tax"}
          secondText={"$110.11"}
        />
        <Sub
          firstText={"Expedite"}
          secondText={"$0.00"}
        />
        <Separator />
        <View style={[
          style.containerOrder,
          styles.row,
          styles.spaceBetween, 
        ]}>
          <Text style={style.orderTotal}>
            Order Total
          </Text>
          <Text style={style.total}>
            $6,127.68
          </Text>
        </View>
      </View>
    );
  }
}
export default Info;

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: metrics.doubleBaseMargin,
    margin: metrics.baseMargin,
    padding: metrics.baseMargin,
    backgroundColor: colors.white
  }, 
  containerOrder: {
    marginVertical: metrics.smallMargin,
    alignItems: "center"
  },
  orderTotal: {
    ...fonts.style.t14,
    ...fonts.style.bold,
    color: colors.black
  },
  total: {
    ...fonts.style.t14,
    ...fonts.style.bold,
    color: colors.red86
  }
});   