import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView
} from 'react-native';
import { TextField } from 'react-native-material-textfield';
import OrderCart from '../components/cart/OrderCart';
import HeaderInfo from '../components/header/HeaderInfo';
import Separator from '../components/common/Separator';
import Button from "../components/common/Button";
import Icon from "../components/common/Icon";
import CheckBox from "../components/common/CheckBox";
import ProductShipping from "../components/product/ProductShipping";

import {
  colors,
  metrics,
  styles,
  fonts,
} from '../themes';

import { Products } from '../dummyData/index';

export default class CartShippingScreen extends Component {

  _keyExtractor = (item) => item.id;

  render() {
    
    return (
      <ScrollView style={style.container}>
        <HeaderInfo
          title={"Shipping Method"}
          back={true}
          onBlack={() => { }}
        />
        <FlatList
          contentContainerStyle={style.list}
          data={Products}
          keyExtractor={this._keyExtractor}
          renderItem={({ item }) => (<ProductShipping item={item} />)}
        />
        <View style={styles.center}>
          <Image
            resizeMode={'contain'}
            style={style.image}
            source={require("../resources/images/money.png")}
          />
        </View>
        <Button
          text={"CONTINUE"}
          styleButton={style.button}
          styleText={style.buttonText}
          onPress={() => { this.props.navigation.navigate('CartPayment') }}
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