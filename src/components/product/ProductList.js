import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  FlatList,
  StyleSheet,
  Text
} from 'react-native';

import ProductItem from './ProductItem'; 
import {
  metrics,
  styles,
  colors,
  fonts
} from '../../themes';

class ProductList extends PureComponent {

  static propTypes = {
    products: PropTypes.array,
    onPressProduct: PropTypes.func.isRequired,
  };

  static defaultProps = {
    products: []
  };

  _keyExtractor = (item) => item.id;

  render() {

    const { products, onPressProduct } = this.props;

    return (
      <View style={style.container}>
        <FlatList
          data={products}
          keyExtractor={this._keyExtractor}
          horizontal={true}
          renderItem={({ item }) => (<ProductItem
            type={"vertical"}
            item={item}
            cart={true}
            onPressItem={() => onPressProduct(item)}
          />)}
        />
      </View>
    );
  }
}
export default (ProductList);

const style = StyleSheet.create({
  container: {
    flex: 1
  }
})