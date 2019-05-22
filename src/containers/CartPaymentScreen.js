import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView
} from 'react-native';
import HeaderInfo from '../components/header/HeaderInfo';
import Separator from '../components/common/Separator';
import Button from "../components/common/Button";
import Info from "../components/cart/Info";
import Order from "../components/cart/Order";
import Card from "../components/cart/Card";

import {
  colors,
  metrics,
  styles,
  fonts,
} from '../themes';

export default class CartPaymentScreen extends Component {

  render() {

    return (
      <ScrollView style={style.container}>
        <HeaderInfo
          title={"Payment Method"}
          back={true}
          backText={"Black"}
          onBack={() => { }}
        />
        <Order />
        <Separator />
        <Card />
        <Separator />
        <Info />
        <Info />
        <View style={styles.center}>
          <Image
            resizeMode={'contain'}
            style={style.image}
            source={require("../resources/images/money.png")}
          />
        </View>
        <Button
          text={"PLACE ORDER"}
          styleButton={style.button}
          styleText={style.buttonText}
        />
      </ScrollView >
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  containerBlock: {
    flex: 1,
    margin: metrics.baseMargin,
    padding: metrics.baseMargin,
    backgroundColor: colors.white
  },
  list: {
    flex: 1
  },
  image: {
    width: metrics.deviceWidth * 2 / 3,
    marginVertical: metrics.baseMargin
  },
  button: {
    ...styles.radius,
    height: metrics.buttonHeight,
    backgroundColor: colors.primaryColor,
    marginVertical: metrics.baseMargin,
    marginHorizontal: metrics.baseMargin
  },
  buttonText: {
    ...fonts.style.t12,
    color: colors.white
  }
});