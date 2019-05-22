import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Icon from "./Icon";
import {
  styles,
  colors,
  fonts,
  metrics,
} from '../../themes';

export default class HeaderRight extends PureComponent {

  static propTypes = {
    type: PropTypes.string,
    onHandleSearch: PropTypes.func.isRequired,
  };

  static defaultProps = {
    onHandleSearch: () => { },
  };

  render() {

    return (
      <View style={{ flexDirection: 'row', }}>
        <Icon
          onPress={() => { }}
          width={25}
          color={colors.gray80}
          image={require('../../resources/icons/search.png')}
        />
        <Icon
          onPress={() => { }}
          width={25}
          color={colors.primaryColor}
          image={require('../../resources/icons/store.png')}
          styleIcon={{ marginHorizontal: metrics.baseMargin }}
        />
      </View>
    );
  }
}