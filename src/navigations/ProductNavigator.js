import React from 'react';
import { StackNavigator } from 'react-navigation';

import Logo from '../components/common/Logo';
import Icon from '../components/common/Icon';
import HeaderRight from "../components/common/HeaderRight";

import {
  colors,
  metrics,
} from '../themes';

/* Home */
import HomeScreen from '../containers/HomeScreen';

/* Catalog */
import CatalogDetailScreen from '../containers/CatalogDetailScreen';

/* Product */
import ProductDetailScreen from '../containers/ProductDetailScreen';


const Routes = {
  Home: {
    name: 'Home',
    screen: HomeScreen,
  },
  CatalogDetail: {
    name: 'CatalogDetail',
    screen: CatalogDetailScreen,
  },
  ProductDetail: {
    name: 'ProductDetail',
    screen: ProductDetailScreen,
  }
};

export default AppNavigator = StackNavigator(
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
    initialRouteName: 'Home',
    mode: 'card',
  }
);
