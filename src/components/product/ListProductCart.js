import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  FlatList,
  Text
} from 'react-native';

import ProductUpdate from './ProductUpdate';
import Button from '../common/Button';
import {
  colors,
  metrics,
  styles,
} from '../../themes';

class ListProductCart extends PureComponent {

  static propTypes = {
    Products: PropTypes.array,
    edit: PropTypes.bool
  };

  static defaultProps = {
    Products: [],
    edit: false
  };

  _keyExtractor = (item) => item.id;

  render() {

    const {
      products,
      edit
      } = this.props;

    return (
      <View style={[
        style.container
      ]}
      >
        <FlatList
          data={products}
          keyExtractor={this._keyExtractor}
          horizontal={false}
          renderItem={({ item }) => (<ProductUpdate
            type={"list"}
            item={item}
            edit={edit}
          />)}
        //extraData={}
        />
      </View>
    );
  }
}
export default (ListProductCart);

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerCount: {
    flex: 1,
    height: 40,
    marginVertical: metrics.smallMargin,
    paddingHorizontal: metrics.baseMargin
  },
  button: {
    backgroundColor: colors.primaryColor
  }
})