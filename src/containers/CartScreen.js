import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView
} from 'react-native';

import OrderCart from '../components/cart/OrderCart';
import ListProductCart from '../components/product/ListProductCart';
import CardItem from '../components/catalog/CardItem';
import HeaderCart from '../components/header/HeaderCart';
import Separator from '../components/common/Separator';
import Button from "../components/common/Button";

import {
  Products
} from '../dummyData/index';

import {
  colors,
  metrics,
  styles,
  fonts,
} from '../themes';

export default class CartScreen extends Component {

  state = {
    number: 2,
    total: "0,000.00"
  }

  _keyExtractor = (item) => item.id;

  render() {

    const { number, total } = this.state;

    return (
      <ScrollView style={style.container}>
        <HeaderCart number={number} />
        <ListProductCart
          products={Products.slice(0,3)}
          edit={true}
        />
        <Separator />
        <OrderCart
          number={number}
          total={total}
        />
        <Separator />
        <CardItem
          title={"Add-On Products"}
          products={Products.slice(4,6)}
          see={false}
          promo={true}
          onPressProduct={(product) => this.props.navigation.navigate('ProductDetail', { product })}
          
        />
        <View style={styles.center}>
          <Image
            resizeMode={'contain'}
            style={style.image}
            source={require("../resources/images/money.png")}
          />
        </View>
        <Button
          text={"PROCED TO CHECKOUT"}
          styleButton={style.button}
          styleText={style.buttonText}
          onPress={() => { this.props.navigation.navigate('CheckoutShippingInfo') }}
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
  title: {
    ...fonts.style.t12,
    ...fonts.style.bold,
    color: colors.gray30,
    marginVertical: metrics.smallMargin,
    marginHorizontal: metrics.baseMargin
  },
  image: {
    width: metrics.deviceWidth * 2 / 3
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
  },
});