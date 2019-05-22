import {
  Platform
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';
 
/* Navigation */
import TabNavigator from './TabNavigator';
 
const Routes = {
  Tab: {
    name: 'Tab',
    screen: TabNavigator,
  } 
};

export default AppNavigator = StackNavigator(
  {
    ...Routes,
  },
  { 
    navigationOptions: {
      header: null,
      cardStack: {
        gesturesEnabled: false,
      },
    },
    initialRouteName: 'Tab',
    /*
     * Use modal on iOS because the card mode comes from the right,
     * which conflicts with the drawer example gesture
     */
    mode: 'card',
  }
);