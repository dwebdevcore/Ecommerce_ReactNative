import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View
} from 'react-native';

import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';
import {
  metrics,
  styles,
  colors
} from '../../themes';

class ProductDetail extends PureComponent {

  static propTypes = {
    item: PropTypes.object,
    type: PropTypes.string,
    cart: PropTypes.bool,
    promo: PropTypes.bool
  };

  static defaultProps = {
    type: "horizontal",
    cart: false,
    promo: false
  };

  render() {

    const {
      item,
      type,
      cart,
      promo
     } = this.props;

    return (
      <View style={[
        style.container,
        type === "horizontal" ? styles.row : null
      ]}
      >
        <View style={style.containerImage}>
          <ProductImage
            stock={item.stock}
            refs={item.refs}
            image={item.image}
            promotion={item.promo}
            promo={promo}
          />
        </View>
        <View style={style.containerInfo}>
          <ProductInfo
            name={item.name}
            info={item.info}
            catalog={item.catalog}
            feature={item.feature}
            description={item.description}
            price={item.price}
            currency={item.currency}
            type={type}
            cart={cart}
          />
        </View>
      </View>
    );
  }
}
export default (ProductDetail);

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerImage: {
    flex: 1,
    marginRight: metrics.baseMargin,
  },
  containerInfo: {
    flex: 1
  }
})