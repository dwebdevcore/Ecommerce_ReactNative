import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';

import {
  colors,
  metrics,
  styles,
  fonts,
} from '../../themes';

class ProductInfo extends PureComponent {

  static propTypes = {
    name: PropTypes.string,
    info: PropTypes.string,
    info: PropTypes.string,
    price: PropTypes.string,
    currency: PropTypes.string,
    type: PropTypes.string
  };

  static defaultProps = {
    name: "",
    info: "",
    catalog: "",
    feature: "",
    description: "",
    price: "",
    currency: "",
    type: "horizontal",
    cart: false,
  };

  render() {

    const {
      name,
      info,
      catalog,
      feature,
      description,
      price,
      currency,
      type,
      cart
    } = this.props;

    return (
      <View style={[
        style.container,
        styles.spaceBetween,
        {
          paddingTop: type === "vertical" ? metrics.baseMargin : 0
        }
      ]}>
        <View>
          <View style={styles.row}>
            <Text style={style.name}>
              {name}
            </Text>
            {
              type === "horizontal" || cart === true ?
                <Text style={style.info}>
                  {info}
                </Text>
                :
                <Text style={style.catalog}>
                  {catalog}
                </Text>
            }
          </View>
          {
            (type === "horizontal" || cart === true) &&
            <Text style={style.feature}>
              {feature}
            </Text>
          }
          {
            cart === false &&
            <Text style={style.description}>
              {description}
            </Text>
          }
        </View>
        {
          type === "horizontal" &&
          <Text style={style.detail}>
            View Details
        </Text>
        }
        {
          type === "horizontal" &&
          <View style={[
            styles.row,
            { alignItems: "center" }
          ]}>
            <Image
              resizeMode={'contain'}
              style={{
                width: 10,
                height: 10
              }}
              source={require("../../resources/icons/save.png")}
            />
            <Text style={style.compare}>
              Compare
            </Text>
            <Image
              resizeMode={'contain'}
              style={{
                width: 10,
                height: 10
              }}
              source={require("../../resources/icons/compare.png")}
            />
            <Text style={style.save}>
              Save
            </Text>
          </View>
        }
        <View style={[
          styles.row,
          { alignItems: "center" }
        ]}>
          <Text style={style.price}>
            $ {price}
          </Text>
          <Text style={style.currency}>
            / {currency}
          </Text>
        </View>
      </View>
    );
  }
}
export default (ProductInfo);

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: metrics.baseMargin
  },
  name: {
    ...fonts.style.t12,
    ...fonts.style.bold,
    color: colors.black
  },
  info: {
    ...fonts.style.t11,
    color: colors.gray64
  },
  catalog: {
    ...fonts.style.t11,
    color: colors.gray64,
    marginLeft: metrics.smallMargin
  },
  feature: {
    ...fonts.style.t11,
    color: colors.gray64
  },
  description: {
    ...fonts.style.t9,
    color: colors.gray64,
    marginVertical: metrics.smallMargin
  },
  detail: {
    ...fonts.style.t12,
    ...fonts.style.bold,
    color: colors.bleu77
  },
  compare: {
    ...fonts.style.t12,
    color: colors.gray86,
    marginHorizontal: metrics.smallMargin
  },
  save: {
    ...fonts.style.t12,
    color: colors.gray86,
    marginHorizontal: metrics.smallMargin
  },
  price: {
    ...fonts.style.t14,
    color: colors.secondaryColor
  },
  currency: {
    ...fonts.style.t14,
    color: colors.gray84
  }
})