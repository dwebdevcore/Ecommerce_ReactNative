import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  FlatList,
  StyleSheet,
  Text
} from 'react-native';

import Price from './Price';
import {
  metrics,
  styles,
  colors,
  fonts
} from '../../themes';

class ProductPromoPrice extends PureComponent {

  static propTypes = {
    listPrice: PropTypes.array
  };

  static defaultProps = {
    listPrice: []
  };

  state = {
    selectedPrice: null
  };

  _keyExtractor = (item) => item.id;

  render() {

    const { listPrice } = this.props;
    const { selectedPrice } = this.state;

    return (
      <View style={style.container}>
        <FlatList
          data={listPrice}
          keyExtractor={this._keyExtractor}
          horizontal={true}
          renderItem={({ item }) => (<Price
            item={item}
            selected={selectedPrice === item}
            onPress={() => this.setState({ selectedPrice: item })}
          />)}
          extraData={selectedPrice}
        />
      </View>
    );
  }
}
export default (ProductPromoPrice);

const style = StyleSheet.create({
  container: {
    flex: 1
  }
})