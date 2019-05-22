import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  FlatList,
  Text
} from 'react-native';

import Link from "../common/Link";
import SpecificationItem from "./SpecificationItem";
import {
  metrics,
  styles,
  colors,
  fonts
} from '../../themes';

class ProductSpecification extends PureComponent {

  static propTypes = {
    specifications: PropTypes.array,
  };

  static defaultProps = {
    specifications: []
  };

  _keyExtractor = (item) => item.id;

  render() {

    const { specifications } = this.props;

    return (
      <View style={style.container}>
        <Text style={style.title}> Specifications </Text>
        <FlatList
          contentContainerStyle={style.list}
          data={specifications}
          keyExtractor={this._keyExtractor}
          renderItem={({ item }) => (<SpecificationItem item={item} />)}
        />
      </View>
    );
  }
}
export default (ProductSpecification);

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: metrics.baseMargin,
  },
  list: {
    flex: 1
  },
  title: {
    ...fonts.style.t12,
    ...fonts.style.bold,
    color: colors.gray30,
    textAlign: "center",
    marginVertical: metrics.baseMargin
  },
})