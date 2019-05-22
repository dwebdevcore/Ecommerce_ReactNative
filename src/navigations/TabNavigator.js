import React from 'react';
import {
  Image,
  StyleSheet,
  Dimensions,
  Platform,
  View,
} from 'react-native';

import {
  TabNavigator,
} from 'react-navigation';

import {
  colors,
  metrics,
} from '../themes';

import Logo from '../components/common/Logo';
import Icon from '../components/common/Icon';
import HeaderRight from "../components/common/HeaderRight";

/* Home */
import HomeScreen from '../containers/HomeScreen';

/* Product */
import ProductNavigator from './ProductNavigator';

/* Checkout */
import CartNavigator from './CartNavigator';

const TabNavigatorAPP = TabNavigator({
  ProductScreen: {
    screen: ProductNavigator,
    navigationOptions: {
      tabBarLabel: 'My Products',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../resources/icons/products.png')}
          style={[styles.icon, { tintColor: tintColor }]}
        />
      ),
    },
  },
  ChatScreen: {
    screen: () => (<View />),
    navigationOptions: {
      tabBarLabel: 'Chat',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../resources/icons/chat.png')}
          style={[styles.icon, { tintColor: tintColor }]}
        />
      ),
    },
  },
  AccountScreen: {
    screen: CartNavigator,
    navigationOptions: {
      tabBarLabel: 'My Account',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../resources/icons/account.png')}
          style={[styles.icon, { tintColor: tintColor }]}
        />
      ),
    },
  },
  InviteUserScreen: {
    screen: () => (<View />),
    navigationOptions: {
      tabBarLabel: 'Invite User',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../resources/icons/invite.png')}
          style={[styles.icon, { tintColor: tintColor }]}
        />
      ),
    },
  },
  PictureScreen: {
    screen: () => (<View />),
    navigationOptions: {
      tabBarLabel: 'Picture It',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../resources/icons/picture.png')}
          style={[styles.icon, { tintColor: tintColor }]}
        />
      ),
    },
  },
}, {
    navigationOptions: {
      header: null,
    },
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showIcon: true,
      activeTintColor: colors.primaryColor,
      inactiveTintColor: colors.gray54,
      labelStyle: {
        fontSize: 10,
      },
      style: {
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderTopColor: colors.gray,
        height: 60,
      },
      indicatorStyle: {
        backgroundColor: colors.primaryColor,
      },
    }
  });

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});

export default TabNavigatorAPP;