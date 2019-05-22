import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  Image,
  Text,
} from 'react-native';

import {
  colors,
  metrics,
  styles,
  fonts,
} from '../../themes';

export default class SpecificationItem extends PureComponent {

  static propTypes = {
    item: PropTypes.any,
  };

  render() {

    const { item } = this.props;

    return (
      <View
        style={[
          styles.row,
          style.container
        ]}
      >
        <View style={style.block}>
          <Text style={style.title} >{item.title} </Text>
        </View>
        <View style={style.block}>
          <Text style={style.subtitle}>{item.subTitle} </Text>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: metrics.smallMargin
  },
  block: {
    flex: 1
  },
  title: {
    ...fonts.style.t11,
    color: colors.gray54,
  },
  subtitle: {
    ...fonts.style.t11,
    color: colors.black,
    marginLeft: metrics.baseMargin
  }
})
