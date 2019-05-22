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

import {
  colors,
  metrics,
  styles,
  fonts,
} from '../themes';

export default class CheckoutShippingInfoScreen extends Component {

  state = {
    address: '',
    firstName: '',
    lastName: '',
    companyName: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    mail: '',
    phoneNumber: '',
    faxNumber: '',
    selected: false
  };

  changeState(value) {
    this.setState({ selected: value });
  }

  render() {

    const {
      address,
      firstName,
      lastName,
      companyName,
      address1,
      address2,
      city,
      state,
      postalCode,
      country,
      mail,
      phoneNumber,
      faxNumber,
      selected
    } = this.state;

    return (
      <ScrollView style={style.container}>
        <HeaderInfo
          title={"Shipping Info"}
          onAlert={() => { }}
          onSignin={() => { }}
        />
        <View style={[
          styles.radius,
          style.containerBlock
        ]}> 
          <TextField
            label='First Name'
            value={firstName}
            onChangeText={(firstName) => this.setState({ firstName })}
          />
          <TextField
            label='Last Name'
            value={lastName}
            onChangeText={(lastName) => this.setState({ lastName })}
          />
          <TextField
            label='Company Name'
            value={companyName}
            onChangeText={(companyName) => this.setState({ companyName })}
          />
          <TextField
            label='Address 1'
            value={address1}
            onChangeText={(address1) => this.setState({ phoaddress1ne })}
          />
          <TextField
            label='Address 2'
            value={address2}
            onChangeText={(address2) => this.setState({ address2 })}
          />
          <TextField
            label='City'
            value={city}
            onChangeText={(city) => this.setState({ city })}
          />
          <TextField
            label='State'
            value={state}
            onChangeText={(state) => this.setState({ state })}
          />
          <TextField
            label='Postal Code'
            value={postalCode}
            onChangeText={(postalCode) => this.setState({ postalCode })}
          />
          <TextField
            label='Country'
            value={country}
            onChangeText={(country) => this.setState({ country })}
          />
          <TextField
            label='E-mail'
            value={mail}
            onChangeText={(mail) => this.setState({ mail })}
          />
          <TextField
            label='Phone Number'
            value={phoneNumber}
            onChangeText={(phoneNumber) => this.setState({ phoneNumber })}
          />
          <TextField
            label='Fax Number'
            value={faxNumber}
            onChangeText={(faxNumber) => this.setState({ faxNumber })}
          />
        </View>
        <Separator />
        <View style={[
          styles.row,
          styles.spaceBetween,
          style.containerSubTotal
        ]}>
          <View style={[styles.row, { alignItems: 'center' }]}>
            <Icon
              width={15}
              color={colors.gray77}
              image={require("../resources/icons/arrowLeft.png")}
            />
            <Text style={style.textBlack}>
              Black to Cart
          </Text>
          </View>
          <View style={styles.row}>
            <Text style={style.text}>Subtotal: </Text>
            <Text style={[
              style.text,
              { color: colors.red86 }
            ]}>
              $ 24,357.59
            </Text>
          </View>
        </View>
        <Button
          text={"NEXT STEP"}
          styleButton={style.button}
          styleText={style.buttonText}
          onPress={() => { this.props.navigation.navigate('CheckoutBillingInfo') }}
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
    marginHorizontal: metrics.baseMargin,
    marginBottom: metrics.baseMargin,
    padding: metrics.baseMargin,
    backgroundColor: colors.white
  },
  containerSubTotal: {
    paddingHorizontal: metrics.baseMargin,
    marginVertical: metrics.baseMargin
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
  text: {
    ...fonts.style.t16,
    color: colors.gray30
  },
  textBlack: {
    ...fonts.style.t12,
    color: colors.gray77
  },
  textShipping: {
    ...fonts.style.t12,
    color: colors.black,
    marginHorizontal: metrics.baseMargin,
    alignItems: 'center'
  }
});