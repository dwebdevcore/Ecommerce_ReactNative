import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';

import ProductDetail from './ProductDetail';
import ProductCart from './ProductCart';
import ProductImage from './ProductImage';
import ProductShippingAmount from './ProductShippingAmount';

import {
  colors,
  metrics,
  styles,
  fonts,
} from '../../themes';

const WIDTH_WIDGET = (metrics.deviceWidth - metrics.baseMargin * 2 - metrics.smallMargin * 2) / 2;

class ProductShipping extends PureComponent {

  static propTypes = {
    item: PropTypes.object
  };

  static defaultProps = {
  };

  render() {

    const {
      item
    } = this.props;

    return (
      <View style={style.container}>
        <View style={[
          styles.row
        ]}>
          <Text style={[
            style.title,
            { ...fonts.style.bold }
          ]}>{item.name}</Text>
          <Text style={style.title}>
            {item.info}
          </Text>
          <Text style={style.title}>
            {item.feature}
          </Text>
        </View>
        <View style={[{
          flex: 1,
          paddingVertical: metrics.smallMargin
        },
        styles.row
        ]}>
          <View style={{ flex: 1 }}>
            <ProductImage
              refs={item.refs}
              image={item.image}
              type={"Baldor"}
            />
          </View>
          <View style={{ flex: 1 }}>
            <ProductShippingAmount />
          </View>
        </View>

      </View>
    );
  }
}

export default (ProductShipping);

const style = StyleSheet.create({
  container: {
    flex: 1,
    height: 180,
    backgroundColor: colors.white,
    marginVertical: metrics.smallMargin,
    marginHorizontal: metrics.baseMargin,
    borderRadius: metrics.radius,
    borderWidth: 1,
    borderColor: colors.gray96,
    padding: metrics.baseMargin
  },
  title: {
    ...fonts.style.t11,
    color: colors.black,
    marginRight: metrics.smallMargin
  }
})