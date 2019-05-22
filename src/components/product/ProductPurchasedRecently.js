import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Dimensions
} from 'react-native';

import Button from '../common/Button';
import ProductList from './ProductList';

import {
  metrics,
  styles,
  colors,
  fonts
} from '../../themes';

class ProductPurchasedRecently extends PureComponent {
  state = {
    list: "purchase"
  }

  static propTypes = {
    products: PropTypes.array,
    onPressProduct: PropTypes.func.isRequired,
  };

  static defaultProps = {
    products: []
  };

  changeState(value) {
    this.setState({ list: value });
  }

  _keyExtractor = (item) => item.id;

  render() {

    const { products, onPressProduct } = this.props
    const { list } = this.state

    return (
      <View style={style.container}>
        <View style={styles.row}>
          <Button
            text={"Custemers Also Purshased"}
            styleText={list === "purchase" ? style.buttonTextEnable : style.buttonTextDisable}
            styleButton={[
              ...styles.radiusLeft,
              list === "purchase" ? style.buttonEnable : style.buttonDisable
            ]}
            onPress={() => this.changeState("purchase")}
          />
          <Button
            text={"Recently Viewed"}
            styleText={list === "recently" ? style.buttonTextEnable : style.buttonTextDisable}
            styleButton={[
              ...styles.radiusRight,
              list === "recently" ? style.buttonEnable : style.buttonDisable
            ]}
            onPress={() => this.changeState("recently")}
          />
        </View>
        <View style={{ flex: 1, marginLeft: -metrics.smallMargin }}>
          {
            list === "purchase" ?
              <ProductList
                products={products.slice(0,1)}
                onPressProduct={onPressProduct}
              />
              :
              <ProductList
                products={products.slice(1,2)}
                onPressProduct={onPressProduct}
              />
          }
        </View>
      </View>
    );
  }
}
export default (ProductPurchasedRecently);

const style = StyleSheet.create({
  container: {
    flex: 1,
    margin: metrics.baseMargin,
    paddingTop: metrics.smallMargin,
    paddingBottom: metrics.doubleBaseMargin,
  },
  buttonEnable: {
    flex: 1,
    height: metrics.buttonHeight,
    backgroundColor: colors.gray92,
    borderColor: colors.gray92,
    borderWidth: 1
  },
  buttonDisable: {
    flex: 1,
    height: metrics.buttonHeight,
    backgroundColor: colors.transparent,
    borderColor: colors.gray92,
    borderWidth: 1
  },
  buttonTextEnable: {
    ...fonts.style.t12,
    ...fonts.style.bold,
    color: colors.black
  },
  buttonTextDisable: {
    ...fonts.style.t12,
    color: colors.black
  },
  text: {
    ...fonts.style.t12,
    color: colors.black,
    textAlign: "center"
  },
})