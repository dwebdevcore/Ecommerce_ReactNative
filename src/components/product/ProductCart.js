import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import Count from "../common/Count";
import Button from '../common/Button';
import {
  colors,
  metrics,
  styles,
  fonts
} from '../../themes';

class ProductCart extends PureComponent {

  static propTypes = {
    type: PropTypes.string,
    update: PropTypes.bool,
    price: PropTypes.string,
    currency: PropTypes.string,
    edit: PropTypes.bool
  };

  static defaultProps = {
    type: "horizontal",
    update: false,
    price: "0",
    currency: "Each",
    edit: false
  };

  render() {

    const {
      type,
      update,
      price,
      currency,
      edit
    } = this.props;

    return (
      <View style={[
        style.container,
        type === "horizontal" ? { alignItems: "center" } : { justifyContent: "center" },
        type === "horizontal" ? styles.row : null
      ]}
      >
        {
          update === true &&
          <View style={[
            styles.row,
            {
              flex: 1,
              alignItems: "center"
            }
          ]}>
            <Text style={style.price}>
              $ {price}
            </Text>
            <Text style={style.currency}>
              / {currency}
            </Text>
          </View>
        }
        <View style={[
          style.containerCount,
          {
            paddingHorizontal: update ? null : metrics.baseMargin,
            marginRight: type === "horizontal" ? metrics.baseMargin : null
          }
        ]}>
          <Count />
        </View>
        <View style={{ flex: 1 }}>
          <Button
            text={edit === true ? "UPDATE" : "ADD TO CART"}
            styleButton={style.button}
            styleText={{ color: colors.white }}
          />
        </View>
      </View>
    );
  }
}
export default (ProductCart);

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerCount: {
    flex: 1,
    marginVertical: metrics.smallMargin
  },
  button: {
    height: 40,
    backgroundColor: colors.primaryColor
  },
  price: {
    ...fonts.style.t14,
    color: colors.secondaryColor
  },
  currency: {
    ...fonts.style.t14,
    color: colors.gray84
  }
})