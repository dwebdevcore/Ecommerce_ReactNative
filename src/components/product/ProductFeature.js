import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  FlatList
} from 'react-native';

import ProductDocument from "./ProductDocument";
import ProductSpecification from './ProductSpecification';
import Separator from '../common/Separator';
import Button from '../common/Button';

import {
  metrics,
  styles,
  colors
} from '../../themes';

import { SpecificationsProduct } from '../../dummyData/index';

class ProductFeature extends PureComponent {

  render() {
    return (
      <View style={[
        styles.radius,
        style.container
      ]}>
        <ProductDocument />
        <Separator />
        <ProductSpecification specifications={SpecificationsProduct} />
        <Button
          text={"Load More"}
          styleButton={style.button}
        />
      </View>
    );
  }
}
export default (ProductFeature);

const style = StyleSheet.create({
  container: {
    flex: 1, 
    margin: metrics.baseMargin,
    backgroundColor: colors.white,
    paddingHorizontal: metrics.doubleBaseMargin,
    paddingBottom: metrics.doubleBaseMargin
  },
  button: {
    ...styles.radius, 
    height: metrics.buttonHeight,
    backgroundColor: colors.white,
    borderColor: colors.primaryColor,
    marginVertical: metrics.baseMargin,
  }
})