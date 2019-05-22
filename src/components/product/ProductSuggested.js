import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Dimensions
} from 'react-native';

import ProductItemSuggested from './ProductItemSuggested';
import Separator from '../common/Separator';
import Button from '../common/Button';

import {
  metrics,
  styles,
  colors,
  fonts
} from '../../themes';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

class ProductSuggested extends PureComponent {

  static propTypes = {
    products: PropTypes.array,
    onPressProduct: PropTypes.func.isRequired,
  };

  static defaultProps = {
    products: []
  };
 
  _keyExtractor = (item) => item.id;

  render() {

    const { products } = this.props

    return (
      <View style={[
        styles.radius,
        style.container
      ]}>
        <Text style={style.title}> Suggested Items </Text>
        <Separator />
        <View style={[
          styles.row,
          style.headerTab
        ]}>
          <View style={[{ width: wp(15) }, style.col]} />
          <View style={[{ width: wp(15) }, style.col]} >
            <Text style={style.titleTab}>Photo</Text>
          </View>
          <View style={[{ width: wp(30) }, style.col]}
          ><Text style={style.titleTab}>Item ID</Text>
          </View>
          <View style={[{ width: wp(18) }, style.col]} >
            <Text style={style.titleTab}>Price</Text>
          </View>
          <View style={[{ width: wp(15) }, style.col]} >
            <Text style={style.titleTab}>Qty</Text>
          </View>
        </View>
        <Separator />
        <FlatList
          data={products}
          keyExtractor={this._keyExtractor}
          horizontal={false}
          renderItem={({ item }) => (<ProductItemSuggested
            item={item} 
            onPress={() => { }}
          />)}
        />
        <Button
          text={"Add Selected to Cart"}
          styleButton={style.button}
          styleText={style.buttonText}
        />
        <Text style={style.text}>or</Text>
        <Text style={style.textAdd}>Add to Wishlist</Text>
      </View>
    );
  }
}
export default (ProductSuggested);

const style = StyleSheet.create({
  container: {
    flex: 1,
    margin: metrics.baseMargin,
    paddingTop: metrics.smallMargin,
    paddingBottom: metrics.doubleBaseMargin,
    backgroundColor: colors.white
  },
  headerTab: {
    height: 40
  },
  titleTab: {
    ...fonts.style.t9,
    ...fonts.style.bold,
    color: colors.black
  },
  col: {
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  button: { 
    ...styles.radius, 
    height: metrics.buttonHeight,
    backgroundColor: colors.primaryColor,
    marginVertical: metrics.baseMargin,
    marginHorizontal: metrics.doubleBaseMargin
  },
  buttonText: {
    ...fonts.style.t12,
    color: colors.white
  },
  title: {
    ...fonts.style.t12,
    ...fonts.style.bold,
    color: colors.gray30,
    textAlign: "center",
    marginVertical: metrics.baseMargin
  },
  text: {
    ...fonts.style.t12,
    color: colors.black,
    textAlign: "center"
  },
  textAdd: {
    ...fonts.style.t12,
    ...fonts.style.bold,
    color: colors.primaryColor,
    textAlign: "center"
  },
})