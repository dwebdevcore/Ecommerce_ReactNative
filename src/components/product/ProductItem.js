import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

import ProductDetail from './ProductDetail';
import ProductCart from './ProductCart';

import {
  colors,
  metrics,
  styles,
  fonts,
} from '../../themes';

const WIDTH_WIDGET = (metrics.deviceWidth - metrics.baseMargin * 2 - metrics.smallMargin * 2) / 2;

class ProductItem extends PureComponent {

  static propTypes = {
    type: PropTypes.string,
    item: PropTypes.object.isRequired,
    promo: PropTypes.bool,
    onPressItem: PropTypes.func,
  };

  static defaultProps = {
    type: "list",
    promo: false
  };

  render() {

    const {
      type,
      item,
      promo,
      onPressItem
    } = this.props;

    return (
      <View>
        {
          type == 'list' ?
            <View style={style.container}>
              <TouchableOpacity
                onPress={onPressItem}
                style={{ flex: 3.5}}
                activeOpacity={0.8}
              >
                <ProductDetail
                  item={item}
                  cart={true}
                />
              </TouchableOpacity>
              <View style={{ flex: 1 }}>
                <ProductCart />
              </View>
            </View>
            :
            <View style={style.row2}>
              <TouchableOpacity
                onPress={onPressItem}
                style={{
                  flex: 3,
                  padding: metrics.baseMargin
                }}
                activeOpacity={0.8}
              >
                <ProductDetail
                  item={item}
                  type={'vertical'}
                  cart={true}
                  promo={promo}
                />
              </TouchableOpacity>
              <View style={{ flex: 1.5 }}>
                <ProductCart type={'vertical'} />
              </View>
            </View>
        }
      </View >
    );
  }
}

export default (ProductItem);

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
  row: {
    width: WIDTH_WIDGET,
    height: 220,
    backgroundColor: colors.white,
    margin: metrics.smallMargin,
    borderRadius: metrics.radius,
    borderWidth: 1,
    borderColor: colors.gray96,
    padding: metrics.baseMargin
  },
  row2: {
    width: WIDTH_WIDGET,
    height: 320,
    backgroundColor: colors.white,
    margin: metrics.smallMargin,
    borderRadius: metrics.radius,
    borderWidth: 1,
    borderColor: colors.gray96
  },
})