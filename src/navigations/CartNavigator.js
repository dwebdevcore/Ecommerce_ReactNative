import React from 'react';
import { StackNavigator } from 'react-navigation';

import Logo from '../components/common/Logo';
import Icon from '../components/common/Icon';
import HeaderRight from "../components/common/HeaderRight";

import {
  colors,
  metrics,
} from '../themes';

/* Checkout */
import CartScreen from '../containers/CartScreen';
import CheckoutShippingInfoScreen from '../containers/CheckoutShippingInfoScreen';
import CheckoutBillingInfoScreen from '../containers/CheckoutBillingInfoScreen';
import CartShippingScreen from '../containers/CartShippingScreen';
import CartPaymentScreen from '../containers/CartPaymentScreen';


const Routes = {
  Cart: {
    name: 'Cart',
    screen: CartScreen,
  },
  CheckoutShippingInfo: {
    name: 'CheckoutShippingInfo',
    screen: CheckoutShippingInfoScreen,
  },
  CheckoutBillingInfo: {
    name: 'CheckoutBillingInfo',
    screen: CheckoutBillingInfoScreen,
  },
  CartShipping: {
    name: 'CartShipping',
    screen: CartShippingScreen,
  },
  CartPayment: {
    name: 'CartPayment',
    screen: CartPaymentScreen,
  }
};

export default CartNavigator = StackNavigator(
  {
    ...Routes,
  },
  {
    navigationOptions: {
      headerTitle: (<Logo />),
      headerRight: (<HeaderRight />),
      headerLeft: (
        <Icon
          width={30}
          color={colors.primaryColor}
          image={require('../resources/icons/menu.png')}
          styleIcon={{ marginHorizontal: metrics.baseMargin }}
        />
      ),
      cardStack: {
        gesturesEnabled: false,
      },
    },
    initialRouteName: 'Cart',
    mode: 'card',
  }
);
