import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native';

import Count from "../common/Count";
import Button from '../common/Button';
import {
  colors,
  metrics,
  styles,
  fonts
} from '../../themes';

class ProductShippingAmount extends PureComponent {

  state = {
    account: ""
  }

  static propTypes = {
  };

  static defaultProps = {
  };

  render() {

    const { account } = this.state;

    return (
      <View style={style.container} >
        <View style={[
          style.block,
          {
            justifyContent: 'center',
            paddingHorizontal: metrics.baseMargin
          }
        ]}>
          <Text style={style.textBold}>
            UPS Ground
          </Text>
        </View>
        <View style={[
          styles.row,
          {
            flex: 1,
            alignItems: "center"
          }
        ]}>
          <Text style={style.text_}>
            -
          </Text>
          <Text style={style.text}>
            Shipping Amount :
          </Text>
          <Text style={style.price}>
            $48.56
          </Text>
          <Text style={style.textBold}>
            FREE
          </Text>
        </View>
        <View style={style.block}>
          <TextInput
            style={[
              style.textInput,
              fonts.style.t12
            ]}
            placeholder={"Account # (optional)"}
            value={account}
            onChangeText={(account) => this.setState({ account })}
            underlineColorAndroid={'transparent'}
            textAlignVertical={"center"}
          />
        </View>
      </View>
    );
  }
}
export default (ProductShippingAmount);

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  block: {
    flex: 1,
    backgroundColor: colors.gray97
  },
  text: {
    ...fonts.style.t9,
    color: colors.black,
    marginRight: metrics.smallMargin
  },
  text_: {
    ...fonts.style.t9,
    color: colors.gray84,
    marginRight: metrics.smallMargin
  },
  price: {
    ...fonts.style.t9,
    color: colors.green78,
    marginRight: metrics.smallMargin
  },
  textBold: {
    ...fonts.style.t9,
    ...fonts.style.bold,
    color: colors.black,
    marginRight: metrics.smallMargin
  },
  textInput: {
    color: colors.gray75,
    backgroundColor: colors.gray97,
    paddingLeft: metrics.baseMargin
  }
})