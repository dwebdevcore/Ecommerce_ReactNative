import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';

import Icon from '../common/Icon';
import {
  colors,
  metrics,
  styles,
  fonts,
} from '../../themes';

class ProductImage extends PureComponent {

  static propTypes = {
    stock: PropTypes.bool,
    update: PropTypes.bool,
    refs: PropTypes.string,
    promotion: PropTypes.string,
    image: PropTypes.any,
    onDelete: PropTypes.func,
    promo: PropTypes.bool,
    type: PropTypes.string
  };

  static defaultProps = {
    stock: false,
    update: false,
    refs: "-",
    promotion: '-',
    promo: false,
    type: '',
    image: require("../../resources/images/empty.png"),
    onDelete: () => { }
  };

  render() {

    const {
      stock,
      update,
      refs,
      promotion,
      promo,
      image,
      onDelete,
      type
    } = this.props

    return (
      <View style={style.container}>
        {
          update === true ?
            <View style={{ flex: 1 }}>
              <Text style={style.textRef}>
                {refs}
              </Text>
            </View>
            :
            <View style={[
              styles.row,
              styles.spaceBetween
            ]}>
              {
                stock ?
                  <View style={[
                    style.containerStock,
                    styles.center
                  ]}>
                    <Text style={fonts.style.t10}>
                      In Stock
                    </Text>
                  </View>
                  :
                  <View style={[
                    style.containerNoStock,
                    styles.center
                  ]}>
                    <Text style={fonts.style.t10}>
                      Check Availability
                    </Text>
                  </View>
              }
              {
                promo === true &&
                <View style={[
                  style.containerPromo,
                  styles.center
                ]}>
                  <Text style={style.textPromo}>
                    {promotion}
                  </Text>
                </View>
              }
              <Text style={style.textRef}>
                {refs}
              </Text>
              {
                type !== "" &&
                <Text style={style.textType}>
                  {type}
                </Text>
              }
            </View>
        }

        <View style={styles.center}>
          <Image
            resizeMode={'contain'}
            style={style.image}
            source={image}
          />
        </View>
        {
          update &&
          <TouchableOpacity
            style={[
              styles.row,
              {
                flex: 1,
                height: 40,
                alignItems: 'center'
              }
            ]}
            onPress={onDelete}
          >
            <Icon
              width={20}
              image={require("../../resources/icons/delete.png")}
            />
            <Text style={style.textRemove}>
              remove
            </Text>
          </TouchableOpacity>
        }
      </View>
    );
  }
}
export default (ProductImage);

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: metrics.baseMargin,
  },
  containerStock: {
    paddingHorizontal: metrics.smallMargin,
    borderColor: colors.green,
    borderWidth: 1,
    borderRadius: metrics.radius
  },
  containerNoStock: {
    paddingHorizontal: metrics.smallMargin,
    borderColor: colors.bleu93,
    borderWidth: 1,
    borderRadius: metrics.radius
  },
  containerPromo: {
    paddingHorizontal: metrics.smallMargin,
    borderRadius: metrics.radius,
    backgroundColor: colors.red86
  },
  image: {
    width: 90,
    height: 90
  },
  textRef: {
    ...fonts.style.t9,
    color: colors.gray70
  },
  textRemove: {
    ...fonts.style.t12,
    color: colors.gray70
  },
  textPromo: {
    ...fonts.style.t12,
    color: colors.white
  },
  textType: {
    ...fonts.style.t10,
    color: colors.primaryColor
  }
})